import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="./images/troll_face.png" 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">Make all Laugh</h4>
        </header>
    )
}
