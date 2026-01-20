import React from "react";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";

const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <span className="font-bold text-2xl text-indigo-600 mb-6 tracking-tight">TECHCONNECT</span>
          <p className="mb-4">
            <strong className="font-medium text-indigo-600">TechConnect</strong> adalah penyedia solusi IT terpercaya untuk pembuatan platform digital dan infrastruktur jaringan internet.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md cursor-pointer hover:bg-indigo-600 transition-all">
              <Facebook className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md cursor-pointer hover:bg-indigo-600 transition-all">
              <Twitter className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md cursor-pointer hover:bg-indigo-600 transition-all">
              <Instagram className="h-6 w-6" />
            </div>
          </div>
          <p className="text-gray-400">©{new Date().getFullYear()} - TechConnect Indonesia</p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Layanan</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-indigo-600 cursor-pointer transition-all">Web Bisnis</li>
            <li className="my-2 hover:text-indigo-600 cursor-pointer transition-all">Landing Page</li>
            <li className="my-2 hover:text-indigo-600 cursor-pointer transition-all">WiFi Kantor</li>
            <li className="my-2 hover:text-indigo-600 cursor-pointer transition-all">WiFi Hotspot</li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Perusahaan</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-indigo-600 cursor-pointer transition-all">Tentang Kami</li>
            <li className="my-2 hover:text-indigo-600 cursor-pointer transition-all">FAQ</li>
            <li className="my-2 hover:text-indigo-600 cursor-pointer transition-all">Karir</li>
            <li className="my-2 hover:text-indigo-600 cursor-pointer transition-all">Kontak</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;