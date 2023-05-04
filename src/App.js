import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Notes from "./components/Notes";
import Navbar from "./components/Navbar";
import Detail from "./components/Detail";

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/notes" element={<Notes />} />
                    <Route path="/notes/:id" element={<Detail />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
