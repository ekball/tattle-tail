import React from 'react';

import Button from '@mui/material/Button';


function Puppy({ currentPage, handlePageChange }) {
  return (

    <section >

      <h1 id="puppy">General Puppy Information</h1>

      <div>

      <ul>

        <li>

          <a href="#pottytrain"
            onClick={() => handlePageChange('PottyTrain')}
            // when the about button is clicked, re-render the page with the info from the about component
            // if the current page is the about page, set the value of nav-link to active, otherwise, leave false
            className={currentPage === 'PottyTrain' ? 'nav-link active' : 'nav-link'}>

            Potty Training
          
          </a>

        </li>

        <li>

          <a href="#biting">
            <Button>Biting and Teething</Button>
          </a>

        </li>

        <li>

          <a href="#socialize">
          <Button>Socializing</Button>
          </a>

        </li>

      </ul>

      

      </div>
      
    </section>
  );
}

export default Puppy;
