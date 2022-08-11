import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (

    <div>

    <ul>

      {/*  navigation tab to the Home section */}
      <li>
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          // when the home button is clicked, re-render the page with the info from the home component
          // if the current page is the home page, set the value of nav-link to active, otherwise, leave false
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>

      {/*  navigation tab to the about section */}
      <li>
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // when the about button is clicked, re-render the page with the info from the about component
          // if the current page is the about page, set the value of nav-link to active, otherwise, leave false
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>

    </ul>

    </div>
  );
}

export default NavTabs;
