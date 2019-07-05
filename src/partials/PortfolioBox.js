import React from "react";

const PortfolioBox = (props) => {

    return (
        <section className="component" id="portfolio">
            <div className="container portfolio">
                <h1>Portfolio</h1>
                  <div className="portfolio__box" onScroll={(e) => e.stopPropagation()} onWheel={(e) => e.stopPropagation()}>
                    <main className="portfolio__content row">
                            {props.children}
                    </main>
                </div>
            </div>
        </section>
    )
}

export default PortfolioBox;