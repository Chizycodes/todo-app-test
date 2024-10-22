import AvatarImage from "../../assets/avatar.svg";
import TrophyImage from "../../assets/trophy.svg";

const Header = () => {
	return (
		<div>
			<div className="bg-lightBlue flex items-start gap-5 w-full  p-5 text-white drop-shadow-xl shadow-xl shadow-[#00000026] min-h-[120px]">
				<img src={AvatarImage} alt="Avatar" />
				<div>
					<h1 className="text-lg font-bold">Hello, Jhon</h1>
					<p className="italic text-2xl font-thin">What are your plans for today?</p>
				</div>
			</div>

			<div className="bg-[#CDE53D] border border-[#9EB031] px-5 py-10 relative  shadow-inner shadow-[#FFFFFF99]">
				<div className="flex gap-5 items-center">
					<img src={TrophyImage} alt="Trophy" />
					<p className="font-bold text-lg text-darkBlue">Go Pro Upgrade Now</p>
				</div>
				<div className="bg-darkBlue w-[66px] h-[71px] text-[#F2C94C] font-medium text-lg absolute top-[-2px] right-5 flex items-center justify-center">
					$1
				</div>
			</div>
		</div>
	);
};

export default Header;
