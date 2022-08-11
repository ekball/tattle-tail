import './App.css';
import Footer from './components/Footer';
import Site from './components/Site';

import { useState } from 'react';

function App() {

  // const [page] = useState([
  //   'about', 'projects', 'contact', 'resume'
  // ])

  // const [currentPage, setCurrentPage] = useState('Home')

  return (
    // <> 
    //   <Header
    //     page={page}
    //     currentPage={currentPage}
    //     setCurrentPage={setCurrentPage}
    //   />
      
    //   <About/>

    //   <Projects/>

    //   <Resume/>

    //   <Contact/>

    //   <Footer/>

    // </>


    <div >
      <Site />

      <Footer/>
    </div>
          
  );
}

export default App;