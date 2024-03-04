

function TaskForm({onAgregarTarea}) {
    const handleSubmit=(event)=>{
        event.preventDefault();
        const formData=new FormData(event.target);
        const descripcion=formData.get("tarea");
        onAgregarTarea(descripcion);
        event.target.reset();

    };

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="tarea" hidden>Nueva Tarea</label>
        <input type="text" name="tarea" id="tarea" placeholder="Nueva tarea" required/>
        <button className="btn text-white" type="submit">Agregar</button>
    </form>
  )
}

export default TaskForm;