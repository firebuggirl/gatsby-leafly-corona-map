import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Container from 'components/Container';

const Header = () => {

   
    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
        let mainNav = document.getElementById('js-menu');
        let navBarToggle = document.getElementById('js-navbar-toggle');
        console.log(navBarToggle);
        const title = document.getElementById('title');
        navBarToggle.addEventListener('click', function () {
         mainNav.classList.toggle('active');
        //  title.style.display = 'none';
       });
     }
  return (
    <header>
      {/* <Container type="content"> */}
      <nav className="navbar">

      <FontAwesomeIcon className="navbar-toggle" id="js-navbar-toggle" icon="coffee" onClick={handleClick} />

        <p id="title">Corona Cases By Country</p>
        <ul className="main-nav" id="js-menu">
          <li>
            <Link className="nav-links" to="/">Home</Link>
          </li>
          <li>
            <Link className="nav-links" to="/africa/">Africa</Link>
          </li>
          <li>
            <Link className="nav-links" to="/europe/">Europe</Link>
          </li>
          <li>
            <Link className="nav-links" to="/asia/">Asia</Link>
          </li>
        </ul>
        </nav>
      {/* </Container> */}

    </header>
);


};

export default Header;
