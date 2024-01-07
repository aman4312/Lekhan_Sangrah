const express = require("express");

//const notes = require("./data/notes");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const user = require("./routes/user");
const notesRoutes = require("./routes/notesRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const app = express();

const path = require("path");
dotenv.config();
connectDB();

app.use(express.json());
// app.get("/", (req, res) => {
//   res.send("API is running...");
// });
// app.get("/api/notes", (req, res) => {
//   res.json(notes);
// });
// app.get("/api/notes/:id", (req, res) => {
//   const note = notes.find((n) => n._id === req.params.id);
//   res.send(note);
// });

app.use("/api/users", user);
app.use("/api/notes", notesRoutes);
// Error handling

// -------Deplpyment----

//const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  console.log("hi");
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

// ----Deployment----
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running on port ${PORT}`));
