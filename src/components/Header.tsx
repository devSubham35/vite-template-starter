import { LuLogOut } from "react-icons/lu";

export const Header = () => {
    return (
        <header className="w-full bg-white shadow px-6 py-4 flex items-center justify-between">
            <h1 className="text-xl font-bold">My Dashboard</h1>
            <div>
                <button className="bg-blue-600 text-white text-md px-4 py-2 
        rounded-xl hover:bg-blue-700 font-ubuntu font-medium flex items-center gap-2">
                    <LuLogOut />
                    Logout
                </button>
            </div>
        </header>
    );
};
