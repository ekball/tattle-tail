import React from "react";

function Commands() {

    // const skills = [
    //     'React',
    //     'Javascript', 
    //     'GraphQL',
    //     'MERN Stack',
    //     'Node.js',
    //     'MongoDB',
    //     'Express.js',
    //     'NoSQL', 
    //     'GitHub', 
    //     'CSS', 
    //     'DRY Methods',
    //     'OOP', 
    //     'MVC Paradigm',
    //     'Progressive Web Applications',
    // ]


    return(
        <div className="commands-section bg-cyan-600">

            <h1 className="commands-title flex justify-center text-xl p-5">Basic Commands:</h1>

            <div>
                <a href='../assets/docs/week_1.pdf' download className="commands-link flex justify-center underline decoration-solid hover:text-orange-500 p-5">Click here to download a PDF Worksheet for Week #1</a>
            </div>

            <div>
                <a href='../assets/docs/week_2.pdf' download className="commands-link flex justify-center underline decoration-solid hover:text-orange-500 p-5">Click here to download a PDF Worksheet for Week #2</a>
            </div>

            <div>
                <a href='../assets/docs/week_3.pdf' download className="commands-link flex justify-center underline decoration-solid hover:text-orange-500 p-5">Click here to download a PDF Worksheet for Week #3</a>
            </div>

            <div>
                <a href='../assets/docs/week_4.pdf' download className="commands-link flex justify-center underline decoration-solid hover:text-orange-500 p-5">Click here to download a PDF Worksheet for Week #4</a>
            </div>



            {/* <div className="flex justify-center">
                <h1 className="underline decoration-solid decoration-1 underline-offset-2 flex justify-center p-5">Skills: </h1>

                <ul className="list-disc p-5">
                        {skills.map(skill => {
                            return <li>{skill}</li>
                        })}
                </ul>
            </div> */}
        </div>
    );
}

export default Commands;