import React from "react";
import Top from "./Top";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";



function Footer({text}) {

  return (

    // Link Container
    <div className="mt-12 border-b FlexCenterCol">

      <div className="flex items-center space-x-12 w-full h-fit p-2">

        {/* LinkedIn */}
        <div className="Icons">
          <a href="https://www.linkedin.com/in/krisrehfuss/">
            <AiFillLinkedin />
          </a>
        </div>

        {/* Github */}
        <div className="Icons">
          <a href="https://github.com/KrisRehfuss">
            <AiOutlineGithub />
          </a>
        </div>

      </div>
    </div>
  );
}

export default Footer;
