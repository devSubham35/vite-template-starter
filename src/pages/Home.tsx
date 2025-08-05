import { BiUser } from "react-icons/bi";

const data = [
  { id: 1, title: "Users", value: 1200, color: "bg-gradient-to-tr from-blue-600 via-blue-500 to-blue-900" },
  { id: 2, title: "Sales", value: "$34,000", color: "bg-gradient-to-tr from-emerald-600 via-green-500 to-emerald-900" },
  { id: 3, title: "Orders", value: 350, color: "bg-gradient-to-tr from-yellow-600 via-orange-500 to-yellow-900" },
  { id: 4, title: "Visitors", value: 5400, color: "bg-gradient-to-tr from-violet-600 via-indigo-500 to-violet-900" },
];

export const Home = () => {
  return (
    <div>
      <div className="h-[150px] grid grid-cols-1 md:grid-cols-4 gap-6">
        {data.map(({ id, title, value, color }) => (
          <div
            key={id}
            className={`${color} text-white rounded-2xl p-6 shadow-md flex flex-row-reverse justify-between`}
          >
            <div className="size-14 rounded-xl bg-white/30 flex justify-center items-center mb-2 text-xl">
              <BiUser />
            </div>
            <div>
              <h1 className="text-sm uppercase font-semibold mb-4">{title}</h1>
              <h1 className="text-3xl font-bold mt-auto">{value}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
