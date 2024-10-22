import { FaCheck } from "react-icons/fa6";

const TodoItem = ({ isComplete = false, todo }) => {
	return (
		<div>
			<div className="bg-white border border-[#E7E7E7] p-5 flex justify-between gap-5">
				<div className="flex gap-5 items-center">
					<div
						className={`h-[24px] w-[24px] rounded-full border-[1.5px] flex items-center justify-center ${
							isComplete ? "bg-[#53DA69] border-[#49C25D]" : "bg-white  border-darkBlue"
						}`}
					>
						{isComplete && <FaCheck color="#399649" className="" />}
					</div>
					<p className={`text-textGray text-base font-medium ${isComplete ? "line-through" : ""}`}>
						Training at the gym
					</p>
				</div>
				<button className="border border-darkBlue p-3 rounded-md text-darkBlue">Edit</button>
			</div>
		</div>
	);
};

export default TodoItem;
