import React from "react";
import PortfolioCards from './PortfolioCards';

class PortfolioBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectsData: this.props.projectsData,
            filteredProjects: this.props.projectsData
        };
    }
    componentDidUpdate(prevProps) {
        console.log(prevProps.projectsData[0].desc)
        if ( prevProps.projectsData[0].desc !==  this.props.projectsData[0].desc) {
            this.setState({
                projectsData: this.props.projectsData,
                filteredProjects: this.props.projectsData
              })
        }
    }


    filterPortfolio = (e) => {
        const portfolioFilterListElements = document.querySelectorAll('.portfolio__filter__list__element');
        const filterValue = e.target.getAttribute('data-filter');

        portfolioFilterListElements.forEach(element => element.classList.remove('portfolio__filter__list__element--active'));
        e.target.classList.add('portfolio__filter__list__element--active');

        this.setState({
            filteredProjects: this.state.projectsData.filter(card => card.type.includes(`${filterValue}`))
        });

        let allPortfolioCards = document.querySelectorAll('.portfolio__card');
        allPortfolioCards.forEach(element => element.classList.remove('portfolio__card--active'));

        setTimeout(function(){
            let allPortfolioCards = document.querySelectorAll('.portfolio__card');
            allPortfolioCards.forEach(element => element.classList.add('portfolio__card--active'));
          }, 1);
}

    render() {
      return (
        <section className="component" id="portfolio">
            <div className="container portfolio">
                <h1>{this.props.data.section}</h1>
                <div className="portfolio__filter">
                    <ul className="portfolio__filter__list">
                        <li className="portfolio__filter__list__element portfolio__filter__list__element--active" data-filter="all" onClick={(e) => this.filterPortfolio(e)}>{this.props.data.filterNav[0]}</li>
                        <li className="portfolio__filter__list__element" data-filter="react" onClick={(e) => this.filterPortfolio(e)}>{this.props.data.filterNav[1]}</li>
                        <li className="portfolio__filter__list__element" data-filter="layout" onClick={(e) => this.filterPortfolio(e)}>{this.props.data.filterNav[2]}</li>
                        <li className="portfolio__filter__list__element" data-filter="api" onClick={(e) => this.filterPortfolio(e)}>{this.props.data.filterNav[3]}</li>
                        <li className="portfolio__filter__list__element" data-filter="vanillajs" onClick={(e) => this.filterPortfolio(e)}>{this.props.data.filterNav[4]}</li>
                        <li className="portfolio__filter__list__element" data-filter="game" onClick={(e) => this.filterPortfolio(e)}>{this.props.data.filterNav[5]}</li>
                        <li className="portfolio__filter__list__element" data-filter="node" onClick={(e) => this.filterPortfolio(e)}>{this.props.data.filterNav[6]}</li>
                        <li className="portfolio__filter__list__element" data-filter="vue" onClick={(e) => this.filterPortfolio(e)}>{this.props.data.filterNav[7]}</li>
                    </ul>
                </div>
                  <div className="portfolio__box" onScroll={(e) => e.stopPropagation()} onWheel={(e) => e.stopPropagation()}>
                    <main className="portfolio__content row">
                    {this.state.filteredProjects.map(data => (
                        <PortfolioCards
                        key={data.id}
                        id={data.id}
                        img={data.img}
                        alt={data.alt}
                        title={data.title}
                        desc={data.desc}
                        demo={data.demo}
                        github={data.github}
                        type={data.type}
                        />
                        ))}
                    </main>
                </div>
            </div>
        </section>
        );
    }
  }


export default PortfolioBox;