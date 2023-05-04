import React from "react";
import { Link } from "react-router-dom";
import { useCallback, useState, useEffect } from "react";

export default function Navbar() {
    const [notes, setNotes] = useState(null);

    const fetchNotes = useCallback(async () => {
        const response = await fetch("http://localhost:4000/notes");
        const data = await response.json();
        setNotes(data);
    }, []);

    useEffect(() => {
        fetchNotes();
    }, []);

    return (
        <aside className="Side">
            <Link to="/notes">Notes</Link>
            {notes &&
                notes.map((note) => (
                    <div className="note" key={note.id}>
                        <Link to={`/notes/${note.id}`}>
                            <h3>{note.title}</h3>
                        </Link>
                    </div>
                ))}
        </aside>
    );
}
