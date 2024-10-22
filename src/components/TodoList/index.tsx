import TodoItem from "./TodoItem";

const TodoList = ({ isComplete = false, todo = {} }) => {
	return (
		<div>
			<TodoItem isComplete={isComplete} todo={todo} />
		</div>
	);
};

export default TodoList;
