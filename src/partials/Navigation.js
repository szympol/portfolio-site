import React from "react";
import '../style/components/Navigation.scss' 


/* class Navigation extends React.Component {
    
    
    
    render() {
       
    return (
        <div>
            <nav className="nav">
                <a href="hero" className="navLink">Home</a>
                <a href="about" className="navLink">About</a>
                <a href="portfolio" className="navLink">Portfolio</a>
                <a href="technologies" className="navLink">Technology</a>
            </nav>

            <div className="hamburger" onClick={this.toggleNav}>
                <span className="hamburger__patty"></span>
                <span className="hamburger__patty"></span>
                <span className="hamburger__patty"></span>
            </div>
        </div>
    );
}






 */

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

      toggleNav() {
        const nav = document.querySelector('.nav');
        const toggle = document.querySelector('.hamburger');
        const navItems = nav.querySelectorAll('.nav__link');
        console.log(navItems);

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
		return (

            <div>
            <nav className="nav">
                <a href="#hero" className="nav__link">Home</a>
                <a href="#about" className="nav__link">About</a>
                <a href="#portfolio" className="nav__link">Portfolio</a>
                <a href="#technologies" className="nav__link">Technology</a>
            </nav>

            <div className="hamburger" onClick={this.toggleNav.bind(this)}>
                <span className="hamburger__patty"></span>
                <span className="hamburger__patty"></span>
                <span className="hamburger__patty"></span>
            </div>
        </div>

		);
    }
}



export default Navigation;




