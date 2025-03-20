import multer from 'multer';
import path from 'path';

// Configure storage for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Define the directory where files will be saved
    cb(null, 'uploads/'); // Ensure this folder exists
  },
  filename: (req, file, cb) => {
    // Generate a unique filename to avoid overwriting existing files
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, `${uniqueSuffix}-${file.originalname}`);
  },
});

// File filter to allow only specific file types
const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ];
  
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);  // Allow the file upload
  } else {
    cb(new Error('Invalid file type. Only PDF and Word documents are allowed.'));
  }
};

// Set file upload limits (max 5MB for each file)
const limits = {
  fileSize: 5 * 1024 * 1024, // 5MB
};

// Initialize Multer with storage, fileFilter, and limits
const upload = multer({ storage, fileFilter, limits });

export default upload;