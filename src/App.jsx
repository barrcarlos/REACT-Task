
import "./App.css";
import TaskList from "./Components/TaskList";
import TaskForm from "./Components/TaskForm";

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      {/*  propiedad=parametro */}
      <div className="container mx-auto">
      <TaskForm />
      <TaskList />
      </div>
    </main>
  );
}
export default App;
