

import multer from 'multer';

// Set up storage configuration for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');  // Ensure this folder exists
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, '_') + file.originalname);
    }
});

// Use multer to upload a single file (imageUrl)
export const upload = multer({
    storage: storage
});
