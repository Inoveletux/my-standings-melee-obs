import React, { useState, useEffect, useRef } from 'react';
import Grow from '@material-ui/core/Grow';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function ResultsComponent({results}) {
  const [count, setCount] = useState(0)
  //   const content = results.map(result => ({
  //     text:`${result.rank} ${result.name} ${result.record} ${result.decklist}`
  // }))
    
  useInterval(() => {
    // Your custom logic here
    setCount(count + 1);
  }, 3000);
  const index = count%results.length
    return (
        <> 
        <div>{index}</div>
        {results.map((results, i) => (
          <Grow in={index === i}>
            {results[i]  ?
              <div>
                {results[i].rank}
                {results[i].name}
                {results[i].record}
                {results[i].decklist}
              </div>
              :
              <div> Rien du tout</div>
            }
          </Grow>

        ))}
          
          {/* {results[index]  ? 
            <div>
              {results[index].rank}
              {results[index].name}
              {results[index].record}
              {results[index].decklist}
            </div>
          : 
          <div/>
        } */}
        </>
    )
    
} 

export default ResultsComponent