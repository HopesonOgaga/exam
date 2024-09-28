import React, { useState } from "react";

// Renaming the function to avoid conflict with JavaScript's Date object
function CurrentDate() {
    const currentYear = new Date().getFullYear();
    return <span>{currentYear}</span>;
}

export default function Footer() {

    
    return (
        <section>
            <div></div>
            <div>
                <a href="/" target="_blank" rel="noopener noreferrer" className="">about</a>
                <a href="/" target="_blank" rel="noopener noreferrer">disclaimer</a>
                <a href="/" target="_blank" rel="noopener noreferrer">privacy policy</a>
                <a href="/" target="_blank" rel="noopener noreferrer">terms and conditions</a>
            </div>
            <div>
                {/* Rendering the year here */}
               <p className="">@ <CurrentDate /> by arch</p> 
            </div>
        </section>
    );
}
