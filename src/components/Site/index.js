import React, { useState } from 'react';
import NavTabs from '../NavTabs';
import About from '../About';
import Home from '../Home';



 function Site() {

  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {

    // if the user clicks on the about me button, render the about me page component
    if (currentPage === 'About') {
        return <About />;
    }

    // otherwise, default the page to the Home section
    return <Home />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>

        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

        {renderPage()}

    </div>
  );
}

export default Site;