const multer = require("multer");
const path = require("path");

const tempDir = path.join(__dirname, "../", "temp");

const multerConfig = multer.diskStorage({
    destination: tempDir,
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage: multerConfig,
    limits: {fieldSize: 2000000}
});

<<<<<<< HEAD
module.exports = upload;
=======
module.exports = upload;
>>>>>>> 483c538 (returned avatar)
