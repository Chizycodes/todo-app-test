import { FaPlus } from "react-icons/fa";
import TodoItem from "./TodoItem";
import { useTodo } from "../../context/todo-context";
import { useNavigate } from "react-router-dom";

const TodoList = () => {
	const navigate = useNavigate();
	const { tasks } = useTodo();

	return (
		<div className="h-full w-full ">
			<div className="h-full w-full">
				{tasks?.length ? tasks.map((task) => <TodoItem task={task} key={task?.id} />) : <p>No tasks available</p>}
			</div>

			<div className="absolute bottom-5 right-5">
				<button className="bg-lightBlue p-5 rounded-full border boder-[#123EB1]" onClick={() => navigate("/add")}>
					<FaPlus color="white" size="32px" />
				</button>
			</div>
		</div>
	);
};

export default TodoList;
