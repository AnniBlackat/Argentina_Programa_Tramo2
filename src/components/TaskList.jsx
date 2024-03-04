
import TaskItem from './TaskItem';

function TaskList({tareas, onBorrar,onCompleta}) {
return (
    <>
        {tareas.map(t => <TaskItem key={t.id} tarea={t} onBorrar={onBorrar} onCompleta={onCompleta}/>)}
    </>  
   
);
}

export default TaskList;