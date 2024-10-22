import EditTask from "./pages/EditTask";
import ToDo from "./pages/ToDo";
import { useTodo } from "./context/todo-context";

function App() {
	const { showTaskInput } = useTodo();
	return (
		<div className="h-screen max-h-screen overflow-y-hidden">
			<div className="max-w-2xl w-full mx-auto bg-[#F3F3F3] h-full flex">{showTaskInput ? <EditTask /> : <ToDo />}</div>
		</div>
	);
}

export default App;
