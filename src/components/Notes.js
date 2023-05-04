import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

export default function Notes() {
    const [notes, setNotes] = useState(null);

    const fetchNotes = useCallback(async () => {
        const response = await fetch("http://localhost:4000/notes");
        const data = await response.json();
        setNotes(data);
    }, []);

    const addNote = async (note) => {
        const newNote = {
            id: uuidv4(),
            title: note.title,
            body: note.body,
        };
        const response = await fetch("http://localhost:4000/notes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newNote),
        });
        const data = await response.json();
        setNotes([...notes, data]);
    };

    const deleteNote = async (id) => {
        await fetch(`http://localhost:4000/notes/${id}`, {
            method: "DELETE",
        });
        setNotes(notes.filter((note) => note.id !== id));
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    return (
        <div className="Main">
            <h1>Notes</h1>
            <div className="create-note">
                <h2>Create Note</h2>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        addNote({
                            title: e.target.title.value,
                            body: e.target.body.value,
                        });
                        e.target.title.value = "";
                        e.target.body.value = "";
                    }}
                >
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        required
                    />
                    <textarea
                        name="body"
                        cols="30"
                        rows="10"
                        placeholder="Body"
                        required
                    ></textarea>
                    <button className="btn">Add Note</button>
                </form>
            </div>
            <div className="notes">
                {notes &&
                    notes.map((note) => (
                        <div className="note" key={note.id}>
                            <Link to={`/notes/${note.id}`}>
                                <h3>{note.title}</h3>
                            </Link>
                            <div className="btn-container">
                                <button
                                    className="btn"
                                    onClick={() => deleteNote(note.id)}
                                >
                                    DELETE
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
