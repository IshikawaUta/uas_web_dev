import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14" id="pricing">
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3 variants={scrollAnimation} className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
              Pilih Paket Layanan
            </motion.h3>
            <motion.p variants={scrollAnimation} className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center">
              Solusi fleksibel yang dirancang untuk kebutuhan bisnis maupun personal Anda.
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            
            {/* Paket 1: Website */}
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div variants={scrollAnimation} className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20" whileHover={{ scale : 1.05 }}>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">Web Landing Page</p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">Desain Responsif</li>
                  <li className="relative check custom-list my-2">Gratis Domain 1 Thn</li>
                  <li className="relative check custom-list my-2">SEO Dasar</li>
                  <li className="relative check custom-list my-2">Integrasi WhatsApp</li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-black-600 text-center mb-4 ">Rp 1.5jt</p>
                  <ButtonOutline>Pilih Paket</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>

            {/* Paket 2: WiFi */}
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div variants={scrollAnimation} className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20" whileHover={{ scale : 1.05 }}>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">Instalasi WiFi</p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">Setting Router/AP</li>
                  <li className="relative check custom-list my-2">Managemen Bandwidth</li>
                  <li className="relative check custom-list my-2">Hotspot Voucher</li>
                  <li className="relative check custom-list my-2">Remote Support</li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-black-600 text-center mb-4 ">Rp 2.0jt</p>
                  <ButtonOutline>Pilih Paket</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>

            {/* Paket 3: Bundle */}
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div variants={scrollAnimation} className="flex flex-col justify-center items-center border-2 border-indigo-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20" whileHover={{ scale : 1.05 }}>
                <p className="text-lg text-indigo-600 font-bold capitalize my-2 sm:my-7">Digital Pro Bundle</p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">Company Profile Web</li>
                  <li className="relative check custom-list my-2">Setup WiFi Kantor</li>
                  <li className="relative check custom-list my-2">Keamanan Jaringan</li>
                  <li className="relative check custom-list my-2">Prioritas Support</li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-black-600 text-center mb-4 ">Custom Price</p>
                  <ButtonPrimary>Hubungi Kami</ButtonPrimary>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>

        {/* Testimoni Section */}
        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3 variants={scrollAnimation} className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
              Dipercaya Oleh Berbagai Bisnis
            </motion.h3>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{duration: 3}}>
              <div className="absolute rounded-xl py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Siap Mengembangkan <br /> Bisnis Anda Secara Digital?
                  </h5>
                  <p>Hubungi kami sekarang untuk penawaran spesial!</p>
                </div>
                <ButtonPrimary>Mulai Sekarang</ButtonPrimary>
              </div>
              <div className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0" style={{ filter: "blur(114px)" }}></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Pricing;