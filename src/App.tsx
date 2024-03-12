import React, { useState } from 'react';

import './App.css';

import { Loader } from './components/Loader/Loader';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  function imageLoader() { 
    setIsLoaded(true);
  }

  return (
    <div className="App">
      <div className='Loader'>
        <Loader onLoadEnd={imageLoader}/>
        {isLoaded && <img src='https://storage.yandexcloud.net/themitri4-backet/capybaras/capybara-20.jpeg'></img>}
      </div>
    </div>  
  );
}

export default App;
