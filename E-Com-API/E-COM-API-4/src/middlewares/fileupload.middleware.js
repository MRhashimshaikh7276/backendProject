
// 1. Import multer.
import multer from 'multer';

// 2. Configure storage with filename and location.
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, './uploads/');
    },
    filename:(req, file, cb)=>{
        cb(null, new Date().toISOString() + file.originalname);
        // .replace(/:/g, '_')
    },
});

export const upload = multer({
    storage: storage,
});
