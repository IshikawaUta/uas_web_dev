import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Testimoni = ({
  listTestimoni = [
    {
      name: "Andi Saputra",
      image: "/assets/people-3.png",
      city: "Jakarta",
      country: "Indonesia",
      rating: "5.0",
      testimoni: "Website kafe saya jadi jauh lebih profesional dan pemasangan WiFi-nya sangat rapi. Pelanggan sekarang puas dengan koneksinya!",
    },
    {
      name: "Siska Amelia",
      image: "/assets/people-3.png",
      city: "Bandung",
      country: "Indonesia",
      rating: "4.8",
      testimoni: "Sangat responsif! Tim TechConnect membantu setting jaringan kantor kami yang awalnya lambat jadi kencang kembali.",
    },
    {
      name: "Budi Santoso",
      image: "/assets/people-3.png",
      city: "Surabaya",
      country: "Indonesia",
      rating: "4.9",
      testimoni: "Jasa pembuatan landing page terbaik dengan harga terjangkau. SEO-nya benar-benar bekerja, toko saya makin ramai.",
    }
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: (i) => <a className=""><span className="mx-2 rounded-full h-4 w-4 block cursor-pointer transition-all bg-indigo-200 active:bg-indigo-600"></span></a>,
    dotsClass: "slick-dots w-max absolute mt-20",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 770, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider {...settings} arrows={false} ref={setSliderRef} className="flex items-stretch justify-items-stretch">
        {listTestimoni.map((item, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-indigo-500 transition-all rounded-lg p-8 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <Image src={item.image} height={50} width={50} alt="User" />
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-black-600 capitalize font-medium">{item.name}</p>
                    <p className="text-sm text-black-500 capitalize">{item.city}, {item.country}</p>
                  </div>
                </div>
                <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  <p className="text-sm">{item.rating}</p>
                  <span className="flex ml-4"><Stars className="h-4 w-4" /></span>
                </div>
              </div>
              <p className="mt-5 text-left italic">“{item.testimoni}”</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-indigo-600 border hover:bg-indigo-600 hover:text-white-500 transition-all text-indigo-600 cursor-pointer" onClick={sliderRef?.slickPrev}>
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-indigo-600 border hover:bg-indigo-600 hover:text-white-500 transition-all text-indigo-600 cursor-pointer" onClick={sliderRef?.slickNext}>
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;