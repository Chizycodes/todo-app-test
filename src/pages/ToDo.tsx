import Header from "../components/Header";
import TodoList from "../components/TodoList";

const ToDo = () => {
	return (
		<div className="relative h-full drop-shadow-md shadow-lg shadow-[#00000040] w-full overflow-y-hidden">
			<Header />
			<div className="p-5 h-full overflow-y-auto">
				<TodoList />
			</div>
		</div>
	);
};

export default ToDo;
