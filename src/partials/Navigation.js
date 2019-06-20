import React from "react";
import '../style/components/Navigation.scss' 


class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
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
        for (var i = 0, ii = navItems.length; i < ii; i++) {
            navItems[i].classList.toggle('active');
        }
      }


	render() {
        const menu = ['Home', 'About', 'Portfolio', 'Technology'];
        const menuItems = menu.map((menuItem, i) => 
            <div key={i} eventkey={i} className="nav__link" onClick={this.props.goToPage}>{menuItem}</div>
        );

		return (

        <div>
            <nav className="nav">
                {menuItems}
              {/*   <a href="#hero" className="nav__link"  onClick={this.toggleNav}>Home</a>
                <a href="#about" className="nav__link" onClick={this.toggleNav}>About</a>
                <a href="#portfolio" className="nav__link" onClick={this.toggleNav}>Portfolio</a>
                <a href="#technologies" className="nav__link" onClick={this.toggleNav}>Technology</a> */}
            </nav>

            <div className="hamburger" onClick={this.toggleNav}>
                <span className="hamburger__patty"></span>
                <span className="hamburger__patty"></span>
                <span className="hamburger__patty"></span>
            </div>
        </div>

		);
    }
}



export default Navigation;




