import React from "react";
import PortfolioCards from './PortfolioCards';



class PortfolioBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectsData: this.props.projectsData
        };
    }
    componentDidUpdate(prevProps) {
        console.log(prevProps.projectsData[0].desc)
        if ( prevProps.projectsData[0].desc !==  this.props.projectsData[0].desc) {
            this.setState({
                projectsData: this.props.projectsData
              })
        }
    }

    filterPortfolio = (e) => {
      console.log(e.target.value);
       this.setState({
        projectsData: this.state.projectsData.filter(card => card.id !== 1)
      });
    }

    render() {

      return (
        <section className="component" id="portfolio">
            <div className="container portfolio">
                <h1>Portfolio</h1>
                <div className="portfolio__filter">
                    <ul className="portfolio__filter__list">
                        <li data-filter="all" onClick={(e) => this.filterPortfolio(e)} value="all">All</li>
                        <li data-filter="react" onClick={(e) => this.filterPortfolio(e)} value="react">React</li>
                        <li data-filter="layout" onClick={(e) => this.filterPortfolio(e)} value="layout">Layout</li>
                        <li data-filter="api" onClick={(e) => this.filterPortfolio(e)} value="api">API</li>
                        <li data-filter="vanillajs" onClick={(e) => this.filterPortfolio(e)} value="vanillajs">VanillaJS</li>
                        <li data-filter="game" onClick={(e) => this.filterPortfolio(e)} value="game">Game</li>
                        <li data-filter="node" onClick={(e) => this.filterPortfolio(e)} value="node">Node</li>
                        <li data-filter="vue" onClick={(e) => this.filterPortfolio(e)} value="vue">Vue</li>
                    </ul>
                </div>
                  <div className="portfolio__box" onScroll={(e) => e.stopPropagation()} onWheel={(e) => e.stopPropagation()}>
                    <main className="portfolio__content row">
                    {this.state.projectsData.map(data => (
                        <PortfolioCards
                        key={data.id}
                        id={data.id}
                        img={data.img}
                        alt={data.alt}
                        title={data.title}
                        desc={data.desc}
                        button={data.button}
                        />
                        ))}
                    </main>
                </div>
            </div>
        </section>
        );
    }
  }



/* const PortfolioBox = (props) => {

    return (
        <section className="component" id="portfolio">
            <div className="container portfolio">
                <h1>Portfolio</h1>
                <button onClick={() => this.props.filterPortfolio('heh')}>test</button>
                  <div className="portfolio__box" onScroll={(e) => e.stopPropagation()} onWheel={(e) => e.stopPropagation()}>
                    <main className="portfolio__content row">
                            {props.children}
                    </main>
                </div>
            </div>
        </section>
    )
} */

export default PortfolioBox;