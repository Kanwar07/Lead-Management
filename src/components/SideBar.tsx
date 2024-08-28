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

export default function SideBar() {
  return (
    <section className="flex flex-col justify-between px-6 py-8 border-x-2 border-t-2 bg-[#ffffff]">
      <div className="flex flex-col items-start gap-4">
        <Image src={logo} alt="logo" height={200} width={200} />
        <span className="bg-custom-radial h-[1px] w-full"></span>
        <span className="font-sofia text-[11px] font-normal">Main</span>
        <button className="flex flex-row items-center gap-4 py-2 px-4">
          <Image src={chat} alt="chat" height={25} width={25} />
          <span className="font-sofia text-[14px] font-normal">
            Chat with Nezumi
          </span>
        </button>
        <button className="flex flex-row items-center gap-4 py-2 px-4">
          <Image src={campaign} alt="campaign" height={25} width={25} />
          <span className="font-sofia text-[14px] font-normal">Campaign</span>
        </button>
        <button className="flex flex-row items-center gap-4 py-2 px-4">
          <Image src={mail} alt="mail" height={25} width={25} />
          <span className="font-sofia text-[14px] font-normal">Mail</span>
        </button>
        <Link
          href="/lead"
          className="flex flex-row items-center gap-4 bg-[#f9f9fe] w-full py-2 rounded-3xl px-4"
        >
          <Image src={leads} alt="leads" height={25} width={25} />
          <span className="font-sofia text-[14px] font-normal text-[#5570E8]">
            Leads
          </span>
        </Link>
        <button className="flex flex-row items-center gap-4 py-2 px-4">
          <Image src={settings} alt="settings" height={25} width={25} />
          <span className="font-sofia text-[14px] font-normal">Settings</span>
        </button>
      </div>
      <div className="flex flex-col">
        <span className="bg-custom-radial h-[1px] w-full mb-4"></span>
        <button className="flex flex-row items-center gap-4 px-4">
          <Image src={slack} alt="slack" height={24} width={24} />
          <span>Join our community</span>
          <Image src={arrowcorner} alt="arrowcorner" height={18} width={18} />
        </button>
        <span className="bg-custom-radial h-[1px] mt-4"></span>
        <button className="flex flex-row items-center gap-2 bg-[#fafbfc] border rounded-3xl py-2 px-2 mt-4">
          <Image src={profile} alt="profile" height={35} width={35} />
          <div className="flex flex-col items-start">
            <span className="font-sofia font-[14px] font-normal">John Doe</span>
            <span className="font-sofia font-[12px] font-light pr-10">
              johndoe@gmail.com
            </span>
          </div>
        </button>
      </div>
    </section>
  );
}
