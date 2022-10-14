import React, { useState } from 'react';
import NavTabs from '../NavTabs';
import References from '../References';
import Puppy from '../Puppy';
import Commands from '../Commands';
import Contact from '../Contact';

 function Portfolio() {

  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {

    if (currentPage === 'Puppy') {
        return <Puppy />;
    }

    // if the user clicks on the references button, render the references page component
    if (currentPage === 'References') {
      return <References />;
    }

    // if the user clicks on the commands button, render the puppy commands component
    if (currentPage === 'Commands') {
      return <Commands />;
    }
    
    // if the user clicks on the contact button, render the contact page component
    if (currentPage === 'Contact') {
      return <Contact />;
    }

    // otherwise, default the page to the puppy section
    return <Puppy />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>

        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

        {renderPage()}

    </div>
  );
}

export default Portfolio;