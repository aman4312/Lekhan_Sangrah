const Note = require("../models/notesModel");
const asyncHandler = require("express-async-handler");

const getNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find({ user: req.user._id });
  res.json(notes);
});

const createNotes = asyncHandler(async (req, res) => {
  const { title, content, category } = req.body;
  if (!title || !content || !category) {
    res.status(400);
    throw new Error("Please fill all the fields");
    return;
  } else {
    const note = new Note({
      title,
      content,
      category,
      user: req.user._id,
    });

    const createdNote = await note.save();
    res.status(201).json(createdNote);
  }
});

const getNoteById = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (note) {
    res.json(note);
  } else {
    res.status(404);
    throw new Error("Note not found");
  }
});
const updateNote = asyncHandler(async (req, res) => {
  const { title, content, category } = req.body;
  const note = await Note.findById(req.params.id);
  if (note.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }
  if (note) {
    note.title = title;
    note.content = content;
    note.category = category;

    const updatedNote = await note.save();
    res.json(updatedNote);
  } else {
    res.status(404);
    throw new Error("Note not found");
  }
});

const deleteNotes = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (note.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }
  if (note) {
    await note.deleteOne();
    res.json({ message: "Note removed" });
  } else {
    res.status(404);
    throw new Error("Note not found");
  }
});

module.exports = {
  getNotes,
  createNotes,
  getNoteById,
  updateNote,
  deleteNotes,
};
