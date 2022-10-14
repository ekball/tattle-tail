import './App.css';
import Footer from './components/Footer';
import Site from './components/Site';

import { useState } from 'react';

function App() {

  // const [page] = useState([
  //   'puppy', 'references', 'contact', 'commands'
  // ])

  // const [currentPage, setCurrentPage] = useState('Home')

  return (
    // <> 
    //   <Header
    //     page={page}
    //     currentPage={currentPage}
    //     setCurrentPage={setCurrentPage}
    //   />
      
    //   <Puppy/>

    //   <References/>

    //   <Commands/>

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