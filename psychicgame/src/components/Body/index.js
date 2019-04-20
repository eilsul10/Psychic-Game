import React from "react";

const Body = () => {
    return (
        <div className="mdc-layout-grid">
            <div className="mdc-layout-grid__inner">
                {/* <h1 className="mdc-typography--headline1">The Psychic Game</h1> */}
                <h3 className="mdc-typography--headline3">Guess what letter I'm thinking of</h3>
                {/* <hr> */}
                <h4>Wins</h4>
                <div id="showWins"></div>
                <h4>Losses</h4>
                <div id="showLosses"></div>
                <h4>Guesses Left</h4>
                <div id="guesses-remaining"></div>
                <h4>Your guesses so far</h4>
                <div id="guessed-letters"></div>

            </div>
        </div>
    );
}

export default Body;