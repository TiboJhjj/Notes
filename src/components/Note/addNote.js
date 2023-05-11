import React from "react";
import { useState } from "react";

const AddNote = () => {
    // Create a new note with a title and a content
    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    // Send the note to the server
    const saveNote = async () => {
        await fetch("/notes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(note),
        });
    };

    return (
        <form className="Form">
            <input
                className="Note-editable Note-title"
                type="text"
                value={note.title}
                onChange={(event) => {
                    setNote({ ...note, title: event.target.value });
                }}
            />
            <textarea
                className="Note-editable Note-content"
                value={note.content}
                onChange={(event) => {
                    setNote({ ...note, content: event.target.value });
                }}
            />
            <div className="Note-actions ">
                <button className="Button" onClick={saveNote}>
                    Enregistrer
                </button>
            </div>
        </form>
    );
};

export default AddNote;
