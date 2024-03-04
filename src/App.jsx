import 'bootstrap/dist/css/bootstrap.min.css';

import RandomUUID from  'node:crypto'
import { useState } from 'react';
import { useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

import './App.css'

function tareasGuardadas(){
  const almacenamiento=window.localStorage.getItem("tareas");
  const tareasAlmacenadas=JSON.parse(almacenamiento);
  if (tareasAlmacenadas){return tareasAlmacenadas}else{return []}

}

function App() {
  //ESTADOS
  //tareas corresponde al elemento que guarda todas las tareas =>array
 
  //Se pasa como parametro tareasGuardadas a useState
  //para matener las tareas ya creadas
  const [tareas, setTareas] = useState(tareasGuardadas());

  //Tarea completada
  //Se evalua para CADA tarea el atributo completada
  const handleCompletarTarea=(id)=>{
    const terminarTarea=tareas.map(t =>
      t.id === id ? { ...t, completada: !t.completada }:t);
    setTareas([...terminarTarea]);
    console.log(id)
  }
  //Tarea Borrada
  //Se elimina el objeto que coincida en el atributo id
  const handleBorrarTarea=(id)=>{
    const eliminarId=tareas.filter(t => t.id!=id)
    setTareas([...eliminarId])
    
  };
  //Agregar tareas
  //Se crea un objeto tipo tarea de acuerdo a la descripción
  //ingresada en el input
  const handleAgregarTarea=(description)=>{
    const nuevaTarea={
      id: self.crypto.randomUUID(),
      descripcion:description,
      completada:false,
    }
    setTareas([...tareas,nuevaTarea]);
    console.log(tareas);
  };

  //STORAGE
  useEffect(() => { window.localStorage.setItem("tareas", JSON.stringify(tareas));}, [tareas]);
  
  //COMPLEMENTOS
  return (
    <div className='container'>
      <h3 className='text-white text-center'>LISTA DE TAREAS</h3>
      <div className='container-input'>
        <TaskForm onAgregarTarea={(descripcion)=>handleAgregarTarea(descripcion)}/>
      </div>
      
           
      <ul className='list-group'>
        <TaskList tareas={tareas} onBorrar={(id)=>handleBorrarTarea(id)} onCompleta={(id)=>handleCompletarTarea(id)}/>
      </ul>      
    </div>
  );
};


export default App;
