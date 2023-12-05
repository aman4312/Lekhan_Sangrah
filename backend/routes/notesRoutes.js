const express = require("express");
const { getNotes } = require("../controllers/notesController");
const { createNotes } = require("../controllers/notesController");
const { getNoteById } = require("../controllers/notesController");
const { updateNote } = require("../controllers/notesController");
const { deleteNotes } = require("../controllers/notesController");
const router = express.Router();

const { protect } = require("../middlewares/authMiddleware");
router.route("/").get(protect, getNotes);
router.route("/create").post(protect, createNotes);
router
  .route("/:id")
  .get(getNoteById)
  .put(protect, updateNote)
  .delete(protect, deleteNotes);

module.exports = router;
