const { google } = require("googleapis");
const fs = require("fs");
const path = require("path");
const xlsx = require("xlsx");
const { googleDriveCredentials } = require("../importantInfo");

// Use the credentials directly
const CREDENTIALS =googleDriveCredentials

const SCOPES = ["https://www.googleapis.com/auth/drive"];
const TEMP_DIR = path.join(__dirname, "../temp");

// Ensure temp directory exists
if (!fs.existsSync(TEMP_DIR)) {
  fs.mkdirSync(TEMP_DIR);
}

// Initialize Google Drive API with credentials
const auth = new google.auth.GoogleAuth({
  credentials: CREDENTIALS,
  scopes: SCOPES,
});

const createOrUpdateExcelFile = async (data, filePath, fileId = null) => {
  try {
    let existingData = [];
    if (fileId) {
      // Download existing file if it exists
      const authClient = await auth.getClient();
      const drive = google.drive({ version: 'v3', auth: authClient });
      
      // Download the file
      const dest = fs.createWriteStream(filePath);
      const response = await drive.files.get(
        { fileId: fileId, alt: 'media' },
        { responseType: 'stream' }
      );
      await new Promise((resolve, reject) => {
        response.data
          .pipe(dest)
          .on('finish', resolve)
          .on('error', reject);
      });

      // Read existing data
      const workbook = xlsx.readFile(filePath);
      existingData = xlsx.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
    }
    // console.log(existingData);
    // console.log(data);
    // Append new data or create new file
    const dataToWrite = fileId ? [data[0],...existingData] : data;
    
    // Create/Update Excel file
    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet(dataToWrite);
    xlsx.utils.book_append_sheet(wb, ws, "Quiz Results");
    xlsx.writeFile(wb, filePath);
  } catch (error) {
    console.error("Error creating/updating Excel file:", error);
    throw error;
  }
};

exports.uploadResultsToGoogleDrive = async (data, fileName = 'testResult.xlsx') => {
  try {
    // Create temporary file path
    const filePath = path.join(TEMP_DIR, fileName);
    const PUBLIC_FOLDER_ID = "1_fo9QIsbhs2Xffl8QiTCJeJXRlwO-hFw";

    // Check if file already exists in Google Drive
    const authClient = await auth.getClient();
    const drive = google.drive({ version: 'v3', auth: authClient });
    
    const existingFile = await drive.files.list({
      q: `name = '${fileName}' and '${PUBLIC_FOLDER_ID}' in parents and trashed = false`,
      fields: 'files(id, name)',
    });

    const fileId = existingFile.data.files[0]?.id;

    // Create or update Excel file
    await createOrUpdateExcelFile(data, filePath, fileId);

    if (fileId) {
      // Update existing file
      const media = {
        mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        body: fs.createReadStream(filePath)
      };

      const response = await drive.files.update({
        fileId: fileId,
        media: media,
        fields: 'id, webViewLink'
      });

      // Clean up temporary file
      fs.unlinkSync(filePath);

      const folderLink = `https://drive.google.com/drive/folders/${PUBLIC_FOLDER_ID}`;
      return {
        fileUrl: response.data.webViewLink,
        fileId: response.data.id,
        folderId: PUBLIC_FOLDER_ID,
        folderUrl: folderLink
      };
    } else {
      // Create new file
      const fileMetadata = {
        name: fileName,
        parents: [PUBLIC_FOLDER_ID]
      };

      const media = {
        mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        body: fs.createReadStream(filePath)
      };

      const response = await drive.files.create({
        requestBody: fileMetadata,
        media: media,
        fields: 'id, webViewLink'
      });

      // Make the file accessible
      await drive.permissions.create({
        fileId: response.data.id,
        requestBody: {
          role: 'reader',
          type: 'anyone',  // Makes it accessible via link
        }
      });

      // Clean up temporary file
      fs.unlinkSync(filePath);

      // Get shareable links
      const folderLink = `https://drive.google.com/drive/folders/${PUBLIC_FOLDER_ID}`;
      
      return {
        fileUrl: response.data.webViewLink,
        fileId: response.data.id,
        folderId: PUBLIC_FOLDER_ID,
        folderUrl: folderLink
      };
    }

  } catch (error) {
    console.error("Error in uploadResultsToGoogleDrive:", error);
    throw error;
  }
};
