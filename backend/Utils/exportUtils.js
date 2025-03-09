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

const createExcelFile = async (data, filePath) => {
  try {
    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet(data);
    xlsx.utils.book_append_sheet(wb, ws, "Quiz Results");
    xlsx.writeFile(wb, filePath);
  } catch (error) {
    console.error("Error creating Excel file:", error);
    throw error;
  }
};

exports.uploadResultsToGoogleDrive = async (data, fileName) => {
  try {
    // Create temporary file path
    const filePath = path.join(TEMP_DIR, fileName);

    // Create Excel file
    await createExcelFile(data, filePath);

    // Get authorized client
    const authClient = await auth.getClient();
    
    // Create drive instance
    const drive = google.drive({ 
      version: 'v3', 
      auth: authClient 
    });

    // Use the specified public folder ID
    const PUBLIC_FOLDER_ID = "1_fo9QIsbhs2Xffl8QiTCJeJXRlwO-hFw";

    // Upload file directly to the public folder
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

  } catch (error) {
    console.error("Error in uploadResultsToGoogleDrive:", error);
    throw error;
  }
};
