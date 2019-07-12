import React from "react";


class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: this.props.data.menu
        };
      }

    componentDidUpdate(prevProps) {
        if ( prevProps.data.section !==  this.props.data.section) {
            this.setState({
                menu: this.props.data.menu,
              })
        }
    }

      toggleNav = () => {
        const nav = document.querySelector('.nav');
        const toggle = document.querySelector('.hamburger');
        const navItems = nav.querySelectorAll('.nav__link');

        // Show Nav
        nav.classList.toggle('active');

        // Transform Hamburger into 'X'
        toggle.classList.toggle('active');

        // Show Nav Items
        for (let i = 0, ii = navItems.length; i < ii; i++) {
            navItems[i].classList.toggle('active');
        }
      }

      getWindowInnerWidth = () => {
          let innerWidth = window.innerWidth;
          const isDesktopOrLaptop = (innerWidth >= 992) ? true : false;
          return isDesktopOrLaptop;
      }



	render() {

        const menu = this.state.menu;
        const isDesktopOrLaptop = this.getWindowInnerWidth();

        const menuItemsDesktopOrLaptop = menu.map((menuItem, i) =>
            <div className="nav__link" key={i} eventkey={i} onClick={() => {this.props.goToPage(i); this.toggleNav();}}>
                {menuItem}
            </div>
        );

        const menuItemsTabletOrMobile = menu.map((menuItem, i) =>
            <a href={'#' + menuItem} className="nav__link" key={i} onClick={this.toggleNav}>
                {menuItem}
            </a>
        );


		return (

        <React.Fragment>
            <nav className="nav" onChange={this.getWindowInnerWidth}>
            `{isDesktopOrLaptop ? menuItemsDesktopOrLaptop : menuItemsTabletOrMobile}`
            </nav>

            <div className="hamburger" onClick={this.toggleNav}>
                <span className="hamburger__bar"></span>
                <span className="hamburger__bar"></span>
                <span className="hamburger__bar"></span>
            </div>
        </React.Fragment>

		);
    }
}



export default Navigation;




