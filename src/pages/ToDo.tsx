import Header from "../components/Header";
import TodoList from "../components/TodoList";

const ToDo = () => {
	return (
		<div>
			<Header />
			<div className="p-5">
				<TodoList />
			</div>
		</div>
	);
};

export default ToDo;
