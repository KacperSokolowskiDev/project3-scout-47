const express = require("express");
const router = express.Router({ mergeParams: true });
const multer = require("multer")
const evaluationsController = require("../controllers/evaluations.controller");
const uploadsController = require("../controllers/uploads.controller");


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("yo")
    cb(null, "uploads/")
  },
  filename: (req, file, cb) => {
    console.log("here the file", file)
    cb(null, Date.now() + "-" + file.originalname.substring(0, file.originalname.length - 3) + "mp4")
  },
})

const uploadStorage = multer({ storage: storage })
// Get all evaluations
router.get(
  "/",
  evaluationsController.index,
  evaluationsController.indexByPlayer
);

// Get evaluation by id
router.get("/:id", evaluationsController.show);

// Post evaluation
router.post("/", evaluationsController.create);

// Post evalutaion
router.post("/all", evaluationsController.createMore);

// Update evaluation by id
router.put("/:id", evaluationsController.update, uploadStorage.single("file"), uploadsController.saveVideoEvaluation );

// Delete evaluation by id
router.delete("/:id", evaluationsController.destroy);

module.exports = router;
