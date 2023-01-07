import './App.css';
import Footer from './Footer';
import Mycontent from './Mycontent';
import Navbar from './Navbar';
import { useState } from 'react';

function App() {
  // java script
  const [counter, setcounter] = useState(1) // counter is the variable, setcounter is the function, usestate (initial value)..usestate helps us create updated variables
  return (
    <div className="App">
      <button onClick={() => setcounter(counter + 1)}>{counter}</button> {/*we must use ()=> before function because if we use only the function so it calls it one time,
       if we use ()=> then this is a method who calls other method and it can repeat.  */}
      {/* template - HTML */}
      <Navbar />
      <header className="App-header">
        <Mycontent />
      </header>
      <Footer />

    </div >
  );
}

export default App;
