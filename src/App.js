import React from 'react'

import './App.css';
import EffectWidth from './EffectWidth';
import TodoList from './TodoList';

const App=() =>{
   return(
     <div className="App">
       <h2>width</h2>
       <TodoList/>
       {/* <EffectWidth/> */}
     </div>
   )
}
export default App