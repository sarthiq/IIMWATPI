const { HfInference } = require("@huggingface/inference");

const client = new HfInference(process.env.HUGGINGFACE_API_KEY);

exports.calculateCreativityScore = async (datas) => {
  const results = {};
  
  for (const id in datas) {
    const data = datas[id];
    const question = data.question;
    const answers = data.answers;

    const releventAnswers = await calculateSimilarity(question, answers);

    
    const categories = {
      flexibility: ["practical", "creativity"],
      originality: [ "unique"],
      elaboration: ["elaborated"],
    };
    const scores = {
      fluency: releventAnswers.reduce((sum, score) => sum + score, 0) ,
    };
    if(scores.fluency>10){
      scores.fluency=10;
    }
    

    for (const category in categories) {
      const categoryScores = [];
      for (const index in answers) {
        const answer = answers[index];
        const similarity = releventAnswers[index];
       //  if (similarity > 0.5) {
          const result = await calculateCategoryScore(
            answer,
            categories[category]
          );
          const cScore = result.scores;
          const averageScore =
            cScore.reduce((sum, score) => sum + score, 0) / cScore.length;
           const resultantAverageScore = (averageScore+similarity)/2
            
          categoryScores.push( resultantAverageScore);
        // } else {
        //   categoryScores.push(0);
        // } 
      }
      const averageScore =
        categoryScores.reduce((sum, score) => sum + score, 0) /
        categoryScores.length;
      scores[category] = averageScore.toFixed(2) * 10;
     
    }
    const totalScore =
      Object.values(scores).reduce((sum, score) => sum + score, 0)
    if(totalScore<15){
      scores.label='Low Creativity'
    }
    else if(totalScore>=15 && totalScore<24){
      scores.label='Moderately Creativity'
    }
    else if(totalScore>=24 && totalScore<25){
      scores.label='Creative Thinker'
    }
    else{
      scores.label='High Creative'
    }
    
    scores["total"] = totalScore.toFixed(2);
    results[id] = scores;
  }

  let wholeScore=0;
  let wholeScoreLabel='';

  for(const id in results){
    const score=results[id].total;
    wholeScore+=score;
  }
  wholeScore=wholeScore/results.length;

  if(wholeScore<15){
    wholeScoreLabel='Low Creativity'
  }
  else if(wholeScore>=15 && wholeScore<24){
    wholeScoreLabel='Moderately Creativity'
  }
  else if(wholeScore>=24 && wholeScore<25){
    wholeScoreLabel='Creative Thinker'
  }
  else{
    wholeScoreLabel='High Creative'
  }
  
  results['total']=wholeScore;
  results['label']=wholeScoreLabel;

  return results;
};

async function calculateSimilarity(question, answers) {
  const output = await client.sentenceSimilarity({
    model: "sentence-transformers/all-MiniLM-L6-v2",
    inputs: {
      source_sentence: question,
      sentences: answers,
    },
    provider: "hf-inference",
  });
  return output;
}

async function calculateCategoryScore(answer, categories) {
  const data = {
    inputs: answer,
    parameters: {
      candidate_labels: categories,
    },
  };
  const response = await fetch(
    "https://router.huggingface.co/hf-inference/models/facebook/bart-large-mnli",
    {
      headers: {
        Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  
  const result = await response.json();
  return result;
}
