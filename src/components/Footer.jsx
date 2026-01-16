import React from 'react'
import Logo from "../assets/img/logo.png";
import Ft1 from "../assets/img/ft1.png";
import Ft2 from '../assets/img/ft2.png'
import Ft3 from '../assets/img/ft3.png'
import Ft4 from "../assets/img/ft4.png";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#28366d] py-5">
        <div className="container1 flex flex-col lg:flex-row items-center justify-between">
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <div className="flex items-center gap-3">
                <a href="/">
                  <img src={Logo} alt="" />
                </a>
                <h3 className="font-normal text-base text-white">
                  Qurilishda texnik me’yorlash <br /> va standartlashtirish{" "}
                  <br />
                  ilmiy-tadqiqot instituti
                </h3>
              </div>
              <h2 className="font-normal text-base text-white mt-3">
                Qurilish materiallari, mashina va mexanizmlari, ish <br />{" "}
                turlari elektron portali
              </h2>
              <br />
              <h2 className="font-medium text-base text-white">
                Bizni ijtimoiy tarmoqlarda kuzating:
              </h2>
              <div className="flex items-center gap-5 my-3">
                <a href="#">
                  <img src={Ft1} alt="" />
                </a>
                <a href="#">
                  <img src={Ft2} alt="" />
                </a>
                <a href="#">
                  <img src={Ft3} alt="" />
                </a>
                <a href="#">
                  <img src={Ft4} alt="" />
                </a>
              </div>
              <p className="font-normal text-xs text-white">
                All rights reserved © 2022
              </p>
            </div>
            <div>
              <h1 className="font-bold text-xl text-white">Menu</h1>
              <p className="font-normal text-base text-white hover:text-[#1890ff] py-1">
                Qurilish materiallari
              </p>
              <p className="font-normal text-base text-white hover:text-[#1890ff]">
                Mashina mexanizmlar
              </p>
              <p className="font-normal text-base text-white hover:text-[#1890ff] py-1">
                Qurilish ishlari
              </p>
              <p className="font-normal text-base text-white hover:text-[#1890ff]">
                Korxonalar
              </p>
              <p className="font-normal text-base text-white hover:text-[#1890ff] py-1">
                Klassifikator
              </p>
              <p className="font-normal text-base text-white hover:text-[#1890ff]">
                Yangiliklar
              </p>
              <p className="font-normal text-base text-white hover:text-[#1890ff] py-1">
                Aloqa
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-normal text-base text-center text-white pb-1.5">
              Yangiliklarga obuna bo‘ling!
            </h3>
            <p className="font-normal text-xs text-center text-white">
              Tezkor yangiliklar e-mail orqali
            </p>
            <div className="w-67.5 h-10 rounded-[5px] bg-white font-normal text-base text-center text-[rgba(40,54,109,0.8)] py-1.5 mb-2 mt-4">
              Email kiriting
            </div>
            <div className="w-67.5 h-10 rounded-[5px] bg-[#1890ff] font-normal text-base text-center text-white py-1.5">
              Obuna bo‘lish
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer