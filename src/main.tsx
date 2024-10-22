import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { TodoProvider } from "./context/todo-context.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<TodoProvider>
			<Router>
				<App />
			</Router>
			<ToastContainer />
		</TodoProvider>
	</StrictMode>
);
