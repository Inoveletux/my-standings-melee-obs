import React from 'react';
// import ReactTextRotator from "react-text-rotator";


function ResultComponent({rank, record, decklist, name}) {
    // const content = [
    //     {
    //       text: "We shall fight on the beaches.",
    //       className: "classA",
    //       animation: "fade",
    //     },
    //     {
    //       text: "We shall fight on the landing grounds.",
    //       className: "classB",
    //       animation: "zoom",
    //     },
    //     {
    //       text: "We shall fight in the fields and in the streets.",
    //       className: "classC",
    //       animation: "fade",
    //     },
    //     {
    //         text: "We shall fight in the hills.",
    //         className: "classD",
    //         animation: "squeeze",
    //     },
    //     {
    //       text: "We shall never surrender...",
    //       className: "classE",
    //       animation: "zoom",
    //     },
    //   ];
    return (
        <>
            <div>{rank}</div>
            <div>{name}</div>
            <div>{record}</div>
            <div>{decklist}</div>
        </>
    )
    
} 
export default ResultComponent