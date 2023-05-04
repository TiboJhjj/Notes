import React from "react";
import { useEffect, useState } from "react";

export default function Detail() {
    const [note, setNote] = useState({});
    useEffect(() => {
        const url = new URL(window.location.href);
        const id = url.pathname.split("/")[2];
        fetch(`http://localhost:4000/notes/${id}`)
            .then((response) => response.json())
            .then((data) => setNote(data))
            .then((data) => console.log(data));
    }, []);

    return (
        <div>
            <h1>{note.title}</h1>
            <p>{note.body}</p>
        </div>
    );
}
