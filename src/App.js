import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import AddNote from "./components/Note/addNote";

import "./App.css";
import Note from "./components/Note/Note";

function App() {
    const [notes, setNotes] = useState(null);

    const fetchNotes = async () => {
        const response = await fetch("/notes");
        const result = await response.json();
        setNotes(result);
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    return (
        <>
            <aside className="Side">
                <Link to="/notes/new" className="Note-link">
                    Nouvelle note ?
                </Link>
                {notes &&
                    notes.map((note) => (
                        <Link to={`/notes/${note.id}`} className="Note-link">
                            {note.title}
                        </Link>
                    ))}
            </aside>
            <main className="Main">
                <Routes>
                    <Route path="/notes/new" Component={AddNote} />
                    <Route path="/notes/:id" Component={Note} />
                </Routes>
            </main>
        </>
    );
}

export default App;
