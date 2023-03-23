import React from "react";
import Top from "./Top";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";



function Footer() {

  return (

    // Link Container
    <div className="FlexCenterCol">

      <div className="flex items-center justify-evenly w-full h-fit p-2">

        {/* Github */}
        <div className="Icons">
          <a href="https://github.com/KrisRehfuss">
            <AiOutlineGithub />
          </a>
        </div>

        {/* LinkedIn */}
        <div className="Icons">
          <a href="https://www.linkedin.com/in/krisrehfuss/">
            <AiFillLinkedin />
          </a>
        </div>


        {/* Insta */}
        <div className="Icons">
          <a href="https://www.instagram.com/krismatic__/">
            <AiOutlineInstagram />
          </a>
        </div>



      </div>
      <Top text="This site was developed from scratch by Kris and is getting regular updates" />
    </div>
  );
}

export default Footer;
