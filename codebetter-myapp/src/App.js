import './App.css';
// import Functional from './Component/Functional';
import Props from './Component/Props';
function App(){
  return (
    <div className="App">
      {/* <Functional/> */}
      <Props data={{name: 'Abhishek', address: 'Varanasi'}}/>
    </div>
  );
}

export default App;
