import { BsXSquareFill } from "react-icons/bs";
import { BsCheckSquareFill } from "react-icons/bs";

function TaskItem({tarea,onBorrar,onCompleta}) {
   
  return (
    <li key={tarea.id} className="list-group-item"  >
      <div className={tarea.completada ? "realizada" : null} id="descripcion">
        {tarea.descripcion}
      </div>
      <div className="algo">
        <BsCheckSquareFill className="check" onClick={()=>onCompleta(tarea.id)}/>
        <BsXSquareFill className="delete" onClick={() => onBorrar(tarea.id)} /> 
      </div>
     
    </li>
   
    
   );
}


export default TaskItem;