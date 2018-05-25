import multer from 'multer';

const storage = multer.diskStorage({
  filename: (request, file, callback) => {
    callback(null, `${file.fieldname}-${Date.now()}`);
  }
});

const imageFilter = (request, file, callback) => {
  // accept image files only
  if (!file.originalname.match(/\.(jpg|jpeg|png)$/i)) {
    return callback(new Error('Only image files are allowed!'), false);
  }
  callback(null, true);
};

const upload = multer({
  storage,
  fileFilter: imageFilter
});

export default upload;
