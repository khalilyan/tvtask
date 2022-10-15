import './App.css';
import { useState } from 'react';
import data from './Components/react/data.json'
import Wrapper from './Wrapper/Wrapper';
import Menu from './Menu/Menu';

const getchche = () =>{
  const getFromLocal = JSON.parse(localStorage.getItem('Watched'));
   if(getFromLocal){
    const ids = getFromLocal.map(el=>el.Id)
    const localSet =  new Set(ids);
    const newData = data.TendingNow.filter((item) =>!localSet.has(item.Id))
    const ArraySet = [...new Set(getFromLocal)]
    data.TendingNow = [...ArraySet,...newData];
    return data
}}

function App() {
  
  const [selected, setSelected] = useState(data.Featured);
  const [state, setState] = useState(getchche())
 
  
  return (
    <div className="App">
      <div className='Content' >
      <Menu/>
      <Wrapper data={state} setSelected={setSelected} selected={selected} />
      </div>
    </div>
  );
}

export default App;
