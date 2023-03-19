import Skill from "./Skill";
import React from 'react'
import TS from "../../public/TS.png";
import Tailwind from "../../public/tail.png";
import Git from "../../public/git.png";
import Reacts from "../../public/react.png";
import OpenAI from "../../public/openai.png";
import Next from "../../public/next-js.svg";
import JS from "../../public/JS.png";
import Express from "../../public/Express.png";
import Node from "../../public/Node.png";
import Angular from "../../public/Angular.png";
import JQuery from "../../public/JQuery.png";
import Python from "../../public/PythonFlat.png";
import Github from "../../public/Github.png";
import Coffee from "../../public/Coffee.png";
import Clone from "../../public/Clone.png";

import A1 from "../../public/Piano/Note-001.mp3";
import A2 from "../../public/Piano/Note-002.mp3";
import A3 from "../../public/Piano/Note-003.mp3";
import A4 from "../../public/Piano/Note-004.mp3";
import A5 from "../../public/Piano/Note-005.mp3";
import A6 from "../../public/Piano/Note-006.mp3";
import A7 from "../../public/Piano/Note-007.mp3";
import A8 from "../../public/Piano/Note-008.mp3";
import A9 from "../../public/Piano/Note-009.mp3";
import A10 from "../../public/Piano/Note-010.mp3";
import A11 from "../../public/Piano/Note-011.mp3";
import A12 from "../../public/Piano/Note-012.mp3";




function SkillTree() {
  return (
    <div className="flex flex-wrap md:h-fit md:w-full md:grid xl:grid-cols-2 gap-x-2">
      <Skill name="React" logo={Reacts} audio={ A1 } />
      <Skill name="Tailwind" logo={Tailwind} audio={ A2 } />
      <Skill name="JavaScript" logo={JS} audio={ A3 } />
      <Skill name="Python" logo={Python} audio={ A4 } />
      <Skill name="OpenAI" logo={OpenAI} audio={ A5 } />
      <Skill name="Git" logo={Git} audio={ A6 } />
      <Skill name="Express" logo={Express} audio={ A7 } />
      <Skill name="Angular" logo={Angular} audio={ A8 } />

      <Skill name="Node" logo={Node} audio={ A9 } />
      <Skill name="Github" logo={Github} audio={ A10 } />
      {/* <Skill name="JQuery" logo={JQuery} /> */}
      <Skill name="Cloning" logo={Clone} audio={ A11 } />
      <Skill name="Drinking Coffee" logo={Coffee} audio={ A12 } />
    </div>
  );
}

export default SkillTree