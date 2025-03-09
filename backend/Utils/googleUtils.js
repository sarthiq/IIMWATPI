const { google } = require("googleapis");
const fs = require("fs");
const path = require("path");
const xlsx = require("xlsx");
const { googleDriveCredentials } = require("../importantInfo");

const SCOPES = ["https://www.googleapis.com/auth/drive.file"];

// Authenticate Google Drive
const auth = new google.auth.GoogleAuth({
  keyFile: googleDriveCredentials,
  scopes: SCOPES,
});

const drive = google.drive({ version: "v3", auth });

// Function to create Excel file
const createExcelFile = async (data, filePath) => {
  const wb = xlsx.utils.book_new();
  const ws = xlsx.utils.json_to_sheet(data);
  xlsx.utils.book_append_sheet(wb, ws, "Sheet1");
  xlsx.writeFile(wb, filePath);
};

// Upload file to Google Drive
const uploadFileToDrive = async (filePath, fileName) => {
  const fileMetadata = {
    name: fileName,
    parents: ["1_fo9QIsbhs2Xffl8QiTCJeJXRlwO-hFw"], // Replace with your Google Drive folder ID
  };

  const media = {
    mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    body: fs.createReadStream(filePath),
  };

  const response = await drive.files.create({
    resource: fileMetadata,
    media: media,
    fields: "id",
  });

  return response.data;
};

// API route to export data and upload to Drive
app.post("/export-to-drive", async (req, res) => {
  try {
    const data = req.body.data; // Data to be exported (sent from frontend)
    const filePath = path.join(__dirname, "export.xlsx");

    await createExcelFile(data, filePath);
    const uploadedFile = await uploadFileToDrive(filePath, "export.xlsx");

    fs.unlinkSync(filePath); // Remove file after upload

    res.json({ success: true, fileId: uploadedFile.id });
  } catch (error) {
    console.error("Error exporting file:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});
