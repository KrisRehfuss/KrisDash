import Image from "next/image";

function Skills({ name, color, logo }) {
  return (
    <div className="SkillTree">
      <div className={`rounded-xl Shadow FlexCenter p-2 ${color}`}>
        <Image src={logo} className="w-6" alt="#" />
      </div>
      <div className="ml-2">{name}</div>
    </div>
  );
}

export default Skills;
