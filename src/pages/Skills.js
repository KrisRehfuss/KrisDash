import Image from "next/image";

function Skills({ name, color, logo }) {
  return (
    <div className="flex rounded-lg Shadow bg-DarkG items-center w-full mb-2 p-2">
      <div className={`rounded-xl Shadow FlexCenter p-2 ${color}`}>
        <Image 
         src={logo} 
         className="w-6" 
         alt="#" />
      </div>
      <div className="font-light ml-2 text-gray-400 ">{name}</div>
    </div>
  );
}

export default Skills;
