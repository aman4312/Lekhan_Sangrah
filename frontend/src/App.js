import "./App.css";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./bootstrap.min.css";
import LandingPage from "./screens/LandingPage/LandingPage.js";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginPage from "./screens/LoginPage/LoginPage";
import RegisterPage from "./screens/RegisterPage/RegisterPage";
import CreateNote from "./screens/CreateNote/CreateNote.js";
import SingleNote from "./screens/SingleNote/SingleNotes.js";
import ProfilePage from "./screens/ProfilePage/ProfilePage.js";
import { useState } from "react";
const App = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <BrowserRouter>
      <Header setSearch={setSearch} />
      <main>
        <Routes>
          <Route path="/" Component={LandingPage} exact />
          <Route path="/login" Component={LoginPage} exact />
          <Route path="/profile" Component={ProfilePage} exact />
          <Route path="/register" Component={RegisterPage} exact />
          <Route path="/createnote" Component={CreateNote} exact />
          <Route path="/note/:id" Component={SingleNote} exact />
          <Route
            path="/mynotes"
            Component={() => <MyNotes search={search} />}
          />
        </Routes>
      </main>
      <Footer></Footer>
    </BrowserRouter>
  );
};
export default App;
