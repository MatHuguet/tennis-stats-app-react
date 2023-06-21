import React from "react"
import "../styles/header.css"

export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="logo-container">
                    <h1>YOUR<br></br>TENNIS<br></br>MATCH<br></br>STATS</h1>
                </div>
                <div className="ham-container">
                    <div className="ham-box">
                        <div className="ham-line-top" id="ham-line-top"></div>
                        <div className="ham-line-bottom" id="ham-line-bottom"></div>
                    </div>
                </div>
                <div className="right-side"></div>
            </div>
        </header>
    )
}