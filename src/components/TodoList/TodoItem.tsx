import { FaCheck } from "react-icons/fa6";
import { TaskType } from "../../context/todo-context";
import { useTodo } from "../../context/todo-context";

const TodoItem = ({ task }: { task: TaskType }) => {
	const { setShowTaskInput, toggleComplete } = useTodo();
	return (
		<div className="bg-white border border-[#E7E7E7] p-5 flex justify-between gap-5 mb-4">
			<div className="flex gap-5 items-center">
				<div
					className={`h-[24px] w-[24px] rounded-full border-[1.5px] flex items-center justify-center ${
						task?.isComplete ? "bg-[#53DA69] border-[#49C25D]" : "bg-white  border-darkBlue"
					}`}
					onClick={() => toggleComplete(task.id)}
				>
					{task?.isComplete && <FaCheck color="#399649" className="" />}
				</div>
				<p className={`text-base font-medium ${task?.isComplete ? "line-through text-textGray" : "text-darkBlue"}`}>
					{task?.taskName}
				</p>
			</div>
			<button className="border border-darkBlue p-3 rounded-md text-darkBlue" onClick={() => setShowTaskInput(true)}>
				Edit
			</button>
		</div>
	);
};

export default TodoItem;
