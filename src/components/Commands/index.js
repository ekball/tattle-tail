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
            <div>
                <h1 className="commands-title flex justify-center text-xl p-5">Commands</h1>

                <a href='../assets/docs/commands.pdf' download className="commands-link flex justify-center underline decoration-solid hover:text-orange-500 p-5">Click here to download a PDF Worksheet for Week #1</a>
            </div>

            <div className="flex justify-center">
                <h1 className="underline decoration-solid decoration-1 underline-offset-2 flex justify-center p-5">Skills: </h1>

                {/* <ul className="list-disc p-5">
                        {skills.map(skill => {
                            return <li>{skill}</li>
                        })}
                </ul> */}
            </div>
        </div>
    );
}

export default Commands;