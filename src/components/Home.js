import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="Main">
            <Link to="/notes">Notes</Link>
        </div>
    );
}
