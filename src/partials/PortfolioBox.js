import React from "react";
import PortfolioCards from './PortfolioCards';



class PortfolioBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: this.props.data
        };
    }
    componentDidUpdate(prevProps) {
        console.log(prevProps.data[0].desc)
        if ( prevProps.data[0].desc !==  this.props.data[0].desc) {
            this.setState({
                data: this.props.data
              })
        }
    }

    filterPortfolio = (e) => {
      console.log(e.target.value);
       this.setState({
        data: this.state.data.filter(card => card.id !== 1)
      });
    }

    render() {

      return (
        <section className="component" id="portfolio">
            <div className="container portfolio">
                <h1>Portfolio</h1>
                <button onClick={(e) => this.filterPortfolio(e)} value="all">test</button>
                  <div className="portfolio__box" onScroll={(e) => e.stopPropagation()} onWheel={(e) => e.stopPropagation()}>
                    <main className="portfolio__content row">
                    {this.state.data.map(data => (
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