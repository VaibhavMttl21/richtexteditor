import './App.css'
import Demo from './components/demo'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  

  return (
    <div className=''>
     
       <DndProvider backend={HTML5Backend}>
        <div className='border border-slate-900'>
        <Demo id="demo1" ></Demo>
        </div>
       </DndProvider>
    </div>
  )
}

export default App
