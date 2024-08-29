import React from "react";
import Image from "next/image";
import twitter from "@/app/assets/twitter.svg";
import instagram from "@/app/assets/instagram.svg";
import linkedin from "@/app/assets/linkedin.svg";
import facebook from "@/app/assets/facebook.svg";

function Footer() {
  return (
    <main className="flex flex-row justify-between px-[5%] py-4 border-t-2 font-normal max-md:flex-col max-md:gap-8 max-md:items-center max-md:py-10 max-md:ml-20 max-md:border-l-2">
      <div className="text-[10px]">© 2024 Shōden Ltd. All Rights Reserved.</div>
      <div className="flex flex-row gap-4 text-[12px]">
        <span>Terms & Condition</span>
        <span>Privacy Policy</span>
        <span>Content Policy</span>
      </div>
      <div className="flex flex-row gap-4">
        <Image src={twitter} alt="twitter" height={25} width={25} />
        <Image src={instagram} alt="instagram" height={25} width={25} />
        <Image src={linkedin} alt="linkedin" height={25} width={25} />
        <Image src={facebook} alt="facebook" height={25} width={25} />
      </div>
    </main>
  );
}

export default Footer;
