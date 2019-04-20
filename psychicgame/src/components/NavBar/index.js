import React from "react";

const NavBar = () => {
    return (
        <header class=" mdc-top-app-bar mdc-top-app-bar--short">
            <div class="mdc-top-app-bar__row">
                <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                    <button class="material-icons mdc-top-app-bar__navigation-icon--unbounded">menu</button><span class="mdc-top-app-bar__title">The Psychic Game</span> </section>
                <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
                    <button class="material-icons mdc-top-app-bar__action-item--unbounded" aria-label="Bookmark this page">bookmark</button>
                </section>
            </div>
        </header>

    );
}

export default NavBar;