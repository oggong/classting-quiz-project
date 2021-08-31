import React, { useState, useEffect } from 'react';
import IntroPage from './views/IntroPage/IntroPage';


const App = () => {

  const [test, setTest] = useState(null);

  useEffect(() => {
    console.log(test);
  }, [test])

  return (
    <div className="flex justify-center items-center">
      <IntroPage setTest={setTest} />
    </div>
  );
}

export default App;
