// import React from "react";

// function Commands() {

//     return(
//         <div className="commands-section bg-cyan-600">

//             <h1 id="commands" className="commands-title flex justify-center text-xl p-5">Basic Commands:</h1>

//             <div>
//                 <a href='../assets/docs/week_1.pdf' download className="commands-link flex justify-center underline decoration-solid hover:text-orange-500 p-5">Click here to download a PDF Worksheet for Week #1</a>
//             </div>

//             <div>
//                 <a href='../assets/docs/week_2.pdf' download className="commands-link flex justify-center underline decoration-solid hover:text-orange-500 p-5">Click here to download a PDF Worksheet for Week #2</a>
//             </div>

//             <div>
//                 <a href='../assets/docs/week_3.pdf' download className="commands-link flex justify-center underline decoration-solid hover:text-orange-500 p-5">Click here to download a PDF Worksheet for Week #3</a>
//             </div>

//             <div>
//                 <a href='../assets/docs/week_4.pdf' download className="commands-link flex justify-center underline decoration-solid hover:text-orange-500 p-5">Click here to download a PDF Worksheet for Week #4</a>
//             </div>

//         </div>
//     );
// }
//     <section className='about-section flex-wrap flex justify-center align-center bg-cyan-600 h-full'>

//       <h1 id="sit" className="about-title text-lg p-5">Teaching Sit</h1>

//       <div className='flex justify-evenly align-center p-5'>

//         <p className='flex flex-wrap w-1/2'>
//                 Hello, my name is Kyles and I am currently a dog trainer at Petco. I have been training dogs for about 4 years now. I graduated from UNC-Chapel Hill in 2017 with a B.A. in German Studies and a minor in Linguistics. 
//                 Coding has always been an interest of mine, but I did not have the opportunity to learn it in a formal environment until I enrolled in the UNC Coding Bootcamp in Fall 2021. 
//                 I would like to find a position that revolves around web development or creating independent projects for people.
//         </p>


//       </div>

      
//     </section>

// export default Commands;

import React from 'react';

import Button from '@mui/material/Button';


function Commands() {
  return (

    <section >

      <h1 id="commands"></h1>

      <div>

      <img/>

      <ol>

        <li>

          <a
          >
            <Button>Getting Attention</Button>
          </a>

        </li>

        <li>

          <a>
            <Button>Sit</Button>
          </a>

        </li>

        <li>

          <a>
          <Button>How to Keep Focus</Button>
          </a>

        </li>

      </ol>

      

      </div>
      
    </section>
  );
}

export default Commands;
