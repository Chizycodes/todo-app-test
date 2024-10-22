import { FaPlus } from "react-icons/fa";
import TodoItem from "./TodoItem";
import { useTodo } from "../../context/todo-context";

const TodoList = () => {
	const { tasks, setShowTaskInput } = useTodo();

	return (
		<div className="overflow-y-auto h-[calc(100%-80px)]">
			<div className="p-5 ">
				{tasks?.length ? tasks.map((task) => <TodoItem task={task} key={task?.id} />) : <p>No tasks available</p>}
			</div>

			<div className="absolute bottom-5 right-5">
				<button className="bg-lightBlue p-5 rounded-full border boder-[#123EB1]" onClick={() => setShowTaskInput(true)}>
					<FaPlus color="white" size="32px" />
				</button>
			</div>
		</div>
	);
};

export default TodoList;
