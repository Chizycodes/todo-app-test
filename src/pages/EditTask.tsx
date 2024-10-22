import { useState } from "react";
import { useTodo } from "../context/todo-context";
import { toast } from "react-toastify";

const EditTask = () => {
	const { tasks, addTask, removeTask, setShowTaskInput } = useTodo();
	const [taskName, setTaskName] = useState("");
	const [editingTaskId, setEditingTaskId] = useState<string | null>(null);

	// Handle input change for task name
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTaskName(e.target.value);
	};

	// Save the task (either add or update task)
	const handleSave = () => {
		if (!taskName.trim()) {
			return toast.error("Please enter task name");
		}

		if (editingTaskId) {
			// Update the task
			const updatedTasks = tasks.map((task) => (task.id === editingTaskId ? { ...task, taskName } : task));
		} else {
			// Add a new task
			addTask(taskName);
		}
		setTaskName("");
		setShowTaskInput(false);
	};

	// Remove the task
	const handleDelete = () => {
		if (editingTaskId) {
			removeTask(editingTaskId);
			setTaskName("");
			setEditingTaskId(null);
		}
		setShowTaskInput(false);
	};

	return (
		<div className="relative h-full w-full">
			<div className="bg-lightBlue w-full flex items-center justify-center  p-5 text-white drop-shadow-xl shadow-xl shadow-[#00000026] min-h-[120px]">
				<h1 className="text-2xl font-bold">Edit Task</h1>
			</div>

			<div className="p-5">
				<div>
					<label htmlFor="taskName" className="text-darkBlue text-base ">
						Task Name
					</label>
					<input
						type="text"
						name="taskName"
						placeholder="Enter task name"
						value={taskName}
						onChange={handleChange}
						className="border border-[#CBCBCB] p-3 rounded-md w-full mt-3  focus:border-lightBlue focus:"
					/>
				</div>

				<div className="flex gap-10 absolute bottom-2 left-0 right-0 w-full p-5">
					<button
						className="bg-red p-3 rounded-md text-white w-full max-w-[120px] mt-5 border-2 border-[#720D0D] shadow-inner shadow-[#A8B5DE80]"
						onClick={handleDelete}
					>
						Delete
					</button>
					<button
						className="border border-darkBlue bg-lightBlue p-3 rounded-md w-full mt-5 text-white shadow-inner shadow-[#A8B5DE80]"
						onClick={handleSave}
					>
						Save
					</button>
				</div>
			</div>
		</div>
	);
};

export default EditTask;
