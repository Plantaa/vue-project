const File = require("../mongodb/models/file");
const { isEmpty } = require("../utils/objUtils");

async function getFiles(req, res) {
    console.log("Trying to fetch files...");
    try {
        const files = await File.find();
        res.status(200).json({
            Files: files.map(file => ({
                fieldName: file.fieldName,
                orignalName: file.originalName,
                contents: file.contents,
            })),
        });
        console.log("Fetched files");
    } catch (error) {
        console.error("Error fetching files");
        console.error(error.message);
        res.status(500).json({ message: "Failed to fetch files" })
    }
}

async function uploadFile(req, res) {
    console.log("Trying to store file...");
    const file = req.file;
    console.log(file);
    if(isEmpty(file)) {
        res.status(304).json({ message: "File field in the request cannot be empty" });
        return;
    }
    const newFile = new File({
        fieldName: file.fieldname,
        originalName: file.originalname,
        contents: file.buffer,
    })
    try {
        await newFile.save();
        res.status(201).json({
            message: "File saved",
            newFile,
        });
        console.log("Stored new file");
    } catch (error) {
        console.error("Error storing file", error.message);
        res.status(500).json({ message: "Failed to save file" });
        return;
    }
}

module.exports = {
    getFiles,
    uploadFile,
}