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
        for (let i = 0, ii = navItems.length; i < ii; i++) {
            navItems[i].classList.toggle('active');
        }
      }


	render() {

        const menu = ['home', 'about', 'portfolio', 'technology'];
        const menuItems = menu.map((menuItem, i) => 
            <div key={i} eventkey={i} onClick={() => this.props.goToPage(i)}>
                <div className="nav__link" onClick={this.toggleNav}>{menuItem}</div>
            </div>
            
        );        



		return (

        <div>
            <nav className="nav">
                {menuItems}
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




