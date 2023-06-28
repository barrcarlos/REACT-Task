import React from "react";
import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, des });
    setTitle("");
    setDes("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form className=" bg-slate-600 p-3 w-full mb-2" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold mb-3 text-white">Crea tu tarea</h1>
        <input className=" bg-slate-200 w-full mb-2"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <textarea className=" bg-slate-200 p-3 w-full mb-2"
          placeholder="Escribe la información de la tarea"
          onChange={(e) => setDes(e.target.value)}
          value={des}
        ></textarea>
        <button className="bg-blue-700 px-3 py-1 text-white hover:bg-blue-300">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
