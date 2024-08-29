"use client";

import React from "react";
import logo from "@/app/assets/logo.svg";
import chat from "@/app/assets/chat.svg";
import campaign from "@/app/assets/campaign.svg";
import mail from "@/app/assets/mail.svg";
import leads from "@/app/assets/leads.svg";
import settings from "@/app/assets/settings.svg";
import slack from "@/app/assets/slack.svg";
import arrowcorner from "@/app/assets/arrowcorner.svg";
import profile from "@/app/assets/profile.svg";
import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/context";
import menu from "@/app/assets/menu.svg";

function Sidebar() {
  const { open, setOpen } = useAppContext();

  const handleopen = () => {
    setOpen(!open);
  };

  return (
    <div
      className={`flex flex-col justify-between px-4 py-20 border-x-2 border-t-2 bg-[#ffffff] h-full ${
        open ? "w-60" : "w-14"
      } duration-500 absolute z-10 max-md:h-dvh`}
    >
      <div className="flex flex-col items-start gap-6">
        <div className="flex flex-row justify-start">
          <Image
            src={logo}
            alt="logo"
            height={40}
            width={150}
            className={`${open ? null : "hidden"}`}
          />
          <Image
            src={menu}
            alt="menu"
            height={25}
            width={25}
            onClick={handleopen}
          />
        </div>
        <span className="bg-custom-radial h-[1px] w-full"></span>
        <span
          className={`font-sofia font-normal ${
            open ? "text-[14px]" : "hidden"
          }`}
        >
          Main
        </span>
        <button
          className={`flex items-center gap-2 ${
            open ? "rounded-3xl pt-2 pl-2" : "overflow-hidden"
          }`}
        >
          <Image
            src={chat}
            alt="chat"
            height={25}
            width={25}
            className="mr-4"
          />
          {!open ? null : (
            <span className="font-sofia text-[14px] font-normal">
              Chat with Nezumi
            </span>
          )}
        </button>
        <button
          className={`flex items-center gap-2 ${
            open ? "rounded-3xl pt-2 pl-2" : "overflow-hidden"
          }`}
        >
          <Image
            src={campaign}
            alt="campaign"
            height={25}
            width={25}
            className="mr-4"
          />
          {!open ? null : (
            <span className="font-sofia text-[14px] font-normal">Campaign</span>
          )}
        </button>
        <button
          className={`flex items-center gap-2 ${
            open ? "rounded-3xl pt-2 pl-2" : "overflow-hidden"
          }`}
        >
          <Image
            src={mail}
            alt="mail"
            height={25}
            width={25}
            className="mr-4"
          />
          {!open ? null : (
            <span className="font-sofia text-[14px] font-normal">Mail</span>
          )}
        </button>
        <Link
          href="/lead"
          className={`flex items-center gap-2 ${
            open
              ? "bg-[#f9f8fe] rounded-3xl py-2 pl-2 pr-20"
              : "overflow-hidden"
          }`}
        >
          <Image
            src={leads}
            alt="leads"
            height={25}
            width={25}
            className="mr-4"
          />
          {!open ? null : (
            <span className="font-sofia text-[14px] font-normal">Leads</span>
          )}
        </Link>
        <button
          className={`flex items-center gap-2 ${
            open ? "rounded-3xl pt-2 pl-2" : "overflow-hidden"
          }`}
        >
          <Image
            src={settings}
            alt="settings"
            height={25}
            width={25}
            className="mr-4"
          />
          {!open ? null : (
            <span className="font-sofia text-[14px] font-normal">Settings</span>
          )}
        </button>
      </div>

      <div className="flex flex-col">
        <span className="bg-custom-radial h-[1px] w-full mb-4"></span>
        <button className="flex flex-row items-center gap-4">
          <Image src={slack} alt="slack" height={25} width={25} />
          {!open ? null : (
            <span className="font-sofia text-[14px] font-normal">
              Join our community
            </span>
          )}
          <Image
            src={arrowcorner}
            alt="arrowcorner"
            height={18}
            width={18}
            className={`${open ? null : "hidden"}`}
          />
        </button>
        <span className="bg-custom-radial h-[1px] mt-4"></span>
        <button
          className={`flex flex-row items-center gap-2 py-2 mt-4 ${
            open ? "bg-[#fafbfc] border rounded-3xl pl-2" : null
          }`}
        >
          <Image src={profile} alt="profile" height={25} width={25} />
          {!open ? null : (
            <div className="flex flex-col items-start">
              <span className="font-sofia font-[14px] font-normal">
                John Doe
              </span>
              <span className="font-sofia font-[12px] font-light">
                johndoe@gmail.com
              </span>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
