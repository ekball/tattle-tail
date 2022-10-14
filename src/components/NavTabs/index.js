import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (

    <div className='bg-sky-700 p-5'>

    <ul className="nav nav-tabs flex justify-evenly">

      {/*  navigation tab to the puppy section */}
      <li className='hover:text-orange-400 text-xl'>
        <a
          href="#puppy"
          onClick={() => handlePageChange('Puppy')}
          // when the puppy button is clicked, re-render the page with the info from the puppy component
          // if the current page is the puppy page, set the value of nav-link to active, otherwise, leave false
          className={currentPage === 'Puppy' ? 'nav-link active' : 'nav-link'}
        >
          Puppy
        </a>
      </li>

      {/*  navigation tab to the references section */}
      <li className='hover:text-orange-400 text-xl'>
        <a
          href="#references"
          onClick={() => handlePageChange('References')}
          // when the references button is clicked, re-render the page with the info from the references component
          // if the current page is the references page, set the value of nav-link to active, otherwise, leave false
          className={currentPage === 'References' ? 'nav-link active' : 'nav-link'}
        >
          References
        </a>
      </li>

      {/*  navigation tab to the commands section */}
      <li className='hover:text-orange-400 text-xl'>
        <a
          href="#commands"
          onClick={() => handlePageChange('Commands')}
          // when the commands button is clicked, re-render the page with the info from the commands component          
          // if the current page is the commands page, set the value of nav-link to active, otherwise, leave false
          className={currentPage === 'Commands' ? ' active' : 'nav-link'}
        >
          Commands
        </a>
      </li>

      {/*  navigation tab to the contact section */}
      <li className='hover:text-orange-400 text-xl'>
        <a
          href="#contact"
          // when the contact button is clicked, re-render the page with the info from the contact component
          // if the current page is the contact page, set the value of nav-link to active, otherwise, leave false
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>

      </li>
    </ul>

    </div>
  );
}

export default NavTabs;
