import EditTask from "./pages/EditTask";
import ToDo from "./pages/ToDo";
// import { useTodo } from "./context/todo-context";
import { Route, Routes } from "react-router-dom";

function App() {
	// const { showTaskInput } = useTodo();

	return (
		<div className="h-screen max-h-screen overflow-y-hidden">
			<div className="max-w-2xl w-full mx-auto bg-[#F3F3F3] h-full flex">
				<Routes>
					<Route path="/*" element={<ToDo />} />
					<Route path="/edit/:taskId" element={<EditTask />} />
					<Route path="/add" element={<EditTask />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
