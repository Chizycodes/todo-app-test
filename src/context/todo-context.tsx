/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, ReactNode } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

export type TaskType = {
	id: string;
	taskName: string;
	isComplete: boolean;
};

interface TodoContextType {
	tasks: TaskType[];
	addTask: (taskName: string, taskId?: string) => void;
	toggleComplete: (taskId: string) => void;
	removeTask: (taskId: string) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

interface TodoProviderProps {
	children: ReactNode;
}

export const TodoProvider = ({ children }: TodoProviderProps) => {
	const [tasks, setTasks] = useState<TaskType[]>([]);

	const addTask = (taskName: string, taskId?: string) => {
		if (taskId) {
			// If taskId is provided, find the task and update it
			setTasks((prev) => prev.map((task) => (task.id === taskId ? { ...task, taskName } : task)));
			toast.success("Task updated successfully");
		} else {
			// If no taskId, create a new task
			const newTask: TaskType = {
				id: uuidv4(),
				taskName,
				isComplete: false,
			};
			setTasks((prev) => [...prev, newTask]);
			toast.success("Task added successfully");
		}
	};

	const toggleComplete = (taskId: string) => {
		setTasks(tasks.map((task) => (task.id === taskId ? { ...task, isComplete: !task.isComplete } : task)));
	};

	const removeTask = (taskId: string) => {
		setTasks(tasks.filter((task) => task.id !== taskId));
		toast.success("Task removed successfully");
	};

	return <TodoContext.Provider value={{ tasks, addTask, toggleComplete, removeTask }}>{children}</TodoContext.Provider>;
};

export const useTodo = (): TodoContextType => {
	const context = useContext(TodoContext);
	if (!context) {
		throw new Error("useTodo must be used within a TodoProvider");
	}
	return context;
};
