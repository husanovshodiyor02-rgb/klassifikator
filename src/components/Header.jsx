import React, { useState } from 'react'
import Logo from "../assets/img/logo.png";
import Ik1 from "../assets/img/ik1.png";
import Ik2 from "../assets/img/ik2.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false);
  return (
    <div>
      <header className="sticky top-0 z-50">
        <div className="bg-[#182041]">
          <div className="container1 hidden md:flex items-center justify-between">
            <div className="flex items-center gap-1 py-1.5">
              <FaLocationDot className="text-white" />
              <a href="#" className="font-normal text-sm text-white">
                Toshkent
              </a>
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.76688 7.74189L10.0002 10.9752L13.2335 7.74189C13.3107 7.66473 13.4023 7.60353 13.5031 7.56178C13.6039 7.52003 13.7119 7.49854 13.821 7.49854C13.9302 7.49854 14.0382 7.52003 14.139 7.56178C14.2398 7.60353 14.3314 7.66473 14.4085 7.74189C14.4857 7.81904 14.5469 7.91063 14.5887 8.01143C14.6304 8.11224 14.6519 8.22028 14.6519 8.32939C14.6519 8.43849 14.6304 8.54654 14.5887 8.64734C14.5469 8.74814 14.4857 8.83973 14.4085 8.91689L10.5835 12.7419C10.5065 12.8191 10.4149 12.8804 10.3141 12.9222C10.2133 12.9641 10.1052 12.9856 9.99605 12.9856C9.88691 12.9856 9.77884 12.9641 9.67803 12.9222C9.57722 12.8804 9.48564 12.8191 9.40855 12.7419L5.58355 8.91689C5.50629 8.83979 5.445 8.74822 5.40319 8.64741C5.36137 8.54659 5.33984 8.43853 5.33984 8.32939C5.33984 8.22025 5.36137 8.11218 5.40319 8.01137C5.445 7.91055 5.50629 7.81898 5.58355 7.74189C5.90855 7.42522 6.44188 7.41689 6.76688 7.74189Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <p className="font-normal text-sm text-white">Yo‘riqnoma</p>
              <select className="font-normal text-sm text-[#8e8e8e]">
                <option value="uz">Uz</option>
                <option value="ўз">ўз</option>
                <option value="ru">Ru</option>
                <option value="eng">Eng</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-[#202b57] py-2">
          <div className="container1 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a href="/">
                <img src={Logo} alt="" />
              </a>
              <h3 className="font-normal text-base text-white">
                Qurilishda texnik me’yorlash <br /> va standartlashtirish <br />
                ilmiy-tadqiqot instituti
              </h3>
            </div>
            <div className="hidden md:flex items-center gap-5">
              <FaSearch className="text-white size-5" />
              <img src={Ik1} alt="" className="w-9" />
              <img src={Ik2} alt="" className="w-9" />
              <div className="flex items-center">
                <CiUser className="text-white size-8" />
                <p className="font-normal text-base text-white">
                  Kirish <br /> Ro’yhatdan o’tish
                </p>
              </div>
            </div>
            <button
              className="md:hidden text-3xl text-white"
              onClick={() => setOpen(true)}
            >
              <HiOutlineMenuAlt3 />
            </button>
          </div>
        </div>

        <div className="hidden md:block bg-[#28366d] py-4">
          <nav className="container1">
            <ul className="flex items-center justify-between">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-white" : "text-[#8d97ad]"
                  }
                  to="/"
                >
                  Materiallar va buyumlar
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-white" : "text-[#8d97ad]"
                  }
                  to="/page2"
                >
                  Mashina mexanizmlar
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-white" : "text-[#8d97ad]"
                  }
                  to="/page3"
                >
                  Qurilish ishlari
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-white" : "text-[#8d97ad]"
                  }
                  to="/page4"
                >
                  Kichik mexanizatsiya
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-white" : "text-[#8d97ad]"
                  }
                  to="/page5"
                >
                  Uskuna va qurilmalar
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-white" : "text-[#8d97ad]"
                  }
                  to="/page6"
                >
                  Klassifikator
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-white" : "text-[#8d97ad]"
                  }
                  to="/page7"
                >
                  Bo'limlar
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div
          className={`fixed top-0 right-0 w-[70%] h-full bg-white shadow-lg z-50 transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-3">
              <a href="/" className="bg-black p-1.5 rounded-xl">
                <img src={Logo} alt="" />
              </a>
              <h3 className="hidden sm:block font-normal text-base">
                Qurilishda texnik me’yorlash <br /> va standartlashtirish <br />
                ilmiy-tadqiqot instituti
              </h3>
            </div>
            <button className="text-3xl" onClick={() => setOpen(false)}>
              <IoClose />
            </button>
          </div>

          <ul className="flex flex-col gap-2 text-lg font-medium mt-4 px-6 text-[#3d3d3d]">
            <li onClick={() => setOpen(false)}>
              <a href="/">Materiallar va buyumlar</a>
            </li>
            <li onClick={() => setOpen(false)}>
              <a href="page2">Mashina mexanizmlar</a>
            </li>
            <li onClick={() => setOpen(false)}>
              <a href="page3">Qurilish ishlari</a>
            </li>
            <li onClick={() => setOpen(false)}>
              <a href="page4">Kichik mexanizatsiya</a>
            </li>
            <li onClick={() => setOpen(false)}>
              <a href="page5">Uskuna va qurilmalar</a>
            </li>
            <li onClick={() => setOpen(false)}>
              <a href="page6">Klassifikator</a>
            </li>
            <li onClick={() => setOpen(false)}>
              <a href="page7">Bo’limlar</a>
            </li>
          </ul>
          <div className="flex flex-wrap items-center justify-center gap-3 bg-black p-2.5 rounded-xl m-5">
            <FaSearch className="text-white size-5" />
            <img src={Ik1} alt="" className="w-9" />
            <img src={Ik2} alt="" className="w-9" />
            <div className="flex items-center">
              <CiUser className="text-white size-8" />
              <p className="font-normal text-base text-white">
                Kirish <br /> Ro’yhatdan o’tish
              </p>
            </div>
          </div>
        </div>
        {open && (
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40"
          >
            hbhkk
          </div>
        )}
      </header>
    </div>
  );
}

export default Header