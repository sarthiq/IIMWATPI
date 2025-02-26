import React, { useRef, useEffect, useState } from "react";
import { useReactToPrint } from "react-to-print";

const Certificate = () => {
  const certificateRef = useRef();
  const [userData, setUserData] = useState({ name: "", testType: "", score: "" });

  useEffect(() => {
    // Fetching data from backend (replace with actual API URL)
    fetch("https://api.example.com/user/certificate")
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handlePrint = useReactToPrint({
    content: () => certificateRef.current,
  });

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <button
        onClick={handlePrint}
        className="mb-4 px-6 py-2 bg-blue-600 text-white rounded shadow"
      >
        Download as PDF
      </button>

      <div
        ref={certificateRef}
        className="bg-white p-10 border shadow-lg text-center w-[700px] relative"
        style={{
          backgroundImage: "url('/CertificateIQ.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mt-24 text-lg font-semibold">
          This is Certified, <span className="font-bold">{userData.name}</span> has an intelligence quotient of <span className="font-bold">{userData.score}</span>.
          The average IQ in India is 97.
        </div>

        <div className="mt-16 border-b border-black w-1/2 mx-auto" />
        <div className="mt-10 text-lg font-semibold">This is based on the {userData.testType} test on SarthiQ</div>
      </div>
    </div>
  );
};

export default Certificate;
