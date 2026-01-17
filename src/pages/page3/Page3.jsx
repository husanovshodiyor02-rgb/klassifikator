import React from "react";
import {
  BrickWall,
  Cable,
  Layers,
  Hammer,
  TreePine,
  Box,
  Grid3X3,
  Thermometer,
  Home,
  PaintRoller,
  LayoutList,
  LayoutGrid,
  Bookmark,
} from "lucide-react";
import Img1 from "../../assets/img/img1.png";
import Img2 from "../../assets/img/img2.png";
import Img3 from "../../assets/img/img3.png";
import Img4 from "../../assets/img/img4.png";
import Img5 from "../../assets/img/img5.png";
import Img6 from "../../assets/img/img6.png";
import Img7 from "../../assets/img/img7.png";
import Img8 from "../../assets/img/img8.png";
import Img9 from "../../assets/img/img9.png";
import Img10 from "../../assets/img/img10.png";


const categories = [
  {
    id: 1,
    title: "Beton va qorishmalar",
    icon: <img src={Img1} alt="" className="w-8 h-8 object-contain" />,
  },
  {
    id: 2,
    title: "Kabel mahsulotlari",
    icon: <img src={Img2} alt="" className="w-8 h-8 object-contain" />,
  },
  {
    id: 3,
    title: "To'ldiruvchilar",
    icon: <img src={Img3} alt="" className="w-8 h-8 object-contain" />,
  },
  {
    id: 4,
    title: "Metall prokat va metall buyumlar",
    icon: <img src={Img4} alt="" className="w-8 h-8 object-contain" />,
  },
  {
    id: 5,
    title: "Yog'och material va buyumlar",
    icon: <img src={Img5} alt="" className="w-8 h-8 object-contain" />,
  },
  {
    id: 6,
    title: "Plastmassalar",
    icon: <img src={Img6} alt="" className="w-8 h-8 object-contain" />,
  },
  {
    id: 7,
    title: "Keramika materiallari va buyumlar",
    icon: <img src={Img7} alt="" className="w-8 h-8 object-contain" />,
  },
  {
    id: 8,
    title: "Issiqlik izolyatsiyasi va akustik materiallar",
    icon: <img src={Img8} alt="" className="w-8 h-8 object-contain" />,
  },
  {
    id: 9,
    title: "Tom yopish va gidroizolyatsiya materiallari",
    icon: <img src={Img9} alt="" className="w-8 h-8 object-contain" />,
  },
  {
    id: 10,
    title: "Qoplamali va yopishtiruvchi materiallar va buyumlar",
    icon: <img src={Img10} alt="" className="w-8 h-8 object-contain" />,
  },
];


const products = [
  {
    id: 1,
    code: "#02.02.02.01-1000",
    title:
      "Удаляемый герметизирующий компаунд для повторного сращивания кабеля",
  },
  {
    id: 2,
    code: "#02.02.02.01-1000",
    title:
      "Изделия с армирующими материалами на основе стеклоткани, пришитыми к стеклоизоляционному слою марки",
  },
  {
    id: 3,
    code: "#02.02.02.01-1000",
    title:
      "Изделия с армирующими материалами на основе стеклоткани, пришитыми к стеклоизоляционному слою марки",
  },
  {
    id: 4,
    code: "#02.02.02.01-1000",
    title:
      "Удаляемый герметизирующий компаунд для повторного сращивания кабеля",
  },
  {
    id: 5,
    code: "#02.02.02.01-1000",
    title:
      "Удаляемый герметизирующий компаунд для повторного сращивания кабеля",
  },
  {
    id: 6,
    code: "#02.02.02.01-1000",
    title:
      "Изделия с армирующими материалами на основе стеклоткани, пришитыми к стеклоизоляционному слою марки",
  },
  {
    id: 7,
    code: "#02.02.02.01-1000",
    title:
      "Изделия с армирующими материалами на основе стеклоткани, пришитыми к стеклоизоляционному слою марки",
  },
  {
    id: 8,
    code: "#02.02.02.01-1000",
    title:
      "Удаляемый герметизирующий компаунд для повторного сращивания кабеля",
  },
  {
    id: 9,
    code: "#02.02.02.01-1000",
    title:
      "Изделия с армирующими материалами на основе стеклоткани, пришитыми к стеклоизоляционному слою марки",
  },
  {
    id: 10,
    code: "#02.02.02.01-1000",
    title:
      "Удаляемый герметизирующий компаунд для повторного сращивания кабеля",
  },
  {
    id: 11,
    code: "#02.02.02.01-1000",
    title:
      "Удаляемый герметизирующий компаунд для повторного сращивания кабеля",
  },
  {
    id: 12,
    code: "#02.02.02.01-1000",
    title:
      "Изделия с армирующими материалами на основе стеклоткани, пришитыми к стеклоизоляционному слою марки",
  },
  {
    id: 13,
    code: "#02.02.02.01-1000",
    title:
      "Изделия с армирующими материалами на основе стеклоткани, пришитыми к стеклоизоляционному слою марки",
  },
  {
    id: 14,
    code: "#02.02.02.01-1000",
    title:
      "Удаляемый герметизирующий компаунд для повторного сращивания кабеля",
  },
  {
    id: 15,
    code: "#02.02.02.01-1000",
    title:
      "Удаляемый герметизирующий компаунд для повторного сращивания кабеля",
  },
  {
    id: 16,
    code: "#02.02.02.01-1000",
    title:
      "Изделия с армирующими материалами на основе стеклоткани, пришитыми к стеклоизоляционному слою марки",
  },
  {
    id: 17,
    code: "#02.02.02.01-1000",
    title:
      "Изделия с армирующими материалами на основе стеклоткани, пришитыми к стеклоизоляционному слою марки",
  },
  {
    id: 18,
    code: "#02.02.02.01-1000",
    title:
      "Удаляемый герметизирующий компаунд для повторного сращивания кабеля",
  },
  {
    id: 19,
    code: "#02.02.02.01-1000",
    title:
      "Изделия с армирующими материалами на основе стеклоткани, пришитыми к стеклоизоляционному слою марки",
  },
  {
    id: 20,
    code: "#02.02.02.01-1000",
    title:
      "Удаляемый герметизирующий компаунд для повторного сращивания кабеля",
  },
  {
    id: 21,
    code: "#02.02.02.01-1000",
    title:
      "Удаляемый герметизирующий компаунд для повторного сращивания кабеля",
  },
  {
    id: 22,
    code: "#02.02.02.01-1000",
    title:
      "Изделия с армирующими материалами на основе стеклоткани, пришитыми к стеклоизоляционному слою марки",
  },
  {
    id: 23,
    code: "#02.02.02.01-1000",
    title:
      "Изделия с армирующими материалами на основе стеклоткани, пришитыми к стеклоизоляционному слою марки",
  },
  {
    id: 24,
    code: "#02.02.02.01-1000",
    title:
      "Удаляемый герметизирующий компаунд для повторного сращивания кабеля",
  },
  {
    id: 25,
    code: "#02.02.02.01-1000",
    title:
      "Удаляемый герметизирующий компаунд для повторного сращивания кабеля",
  },
  {
    id: 26,
    code: "#02.02.02.01-1000",
    title:
      "Изделия с армирующими материалами на основе стеклоткани, пришитыми к стеклоизоляционному слою марки",
  },
  {
    id: 27,
    code: "#02.02.02.01-1000",
    title:
      "Изделия с армирующими материалами на основе стеклоткани, пришитыми к стеклоизоляционному слою марки",
  },
  {
    id: 28,
    code: "#02.02.02.01-1000",
    title:
      "Удаляемый герметизирующий компаунд для повторного сращивания кабеля",
  },
  {
    id: 29,
    code: "#02.02.02.01-1000",
    title:
      "Изделия с армирующими материалами на основе стеклоткани, пришитыми к стеклоизоляционному слою марки",
  },
  {
    id: 30,
    code: "#02.02.02.01-1000",
    title:
      "Удаляемый герметизирующий компаунд для повторного сращивания кабеля",
  },
  {
    id: 31,
    code: "#02.02.02.01-1000",
    title:
      "Изделия с армирующими материалами на основе стеклоткани, пришитыми к стеклоизоляционному слою марки",
  },
  {
    id: 32,
    code: "#02.02.02.01-1000",
    title:
      "Удаляемый герметизирующий компаунд для повторного сращивания кабеля",
  },
];

export default function ConstructionCatalog() {
  return (
    <div className="min-h-screen bg-[#F4F7F9] relative font-sans text-slate-800 pb-16">
      
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 hidden sm:block">
        <button
          className="bg-blue-600 text-white py-4 px-1 rounded-l-md font-medium text-sm shadow-lg hover:bg-blue-700 transition"
          style={{ writingMode: "vertical-rl" }}
        >
          Tizim bo'yicha qo'llanma
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer flex items-center gap-4 border border-transparent hover:border-blue-100"
            >
              <div className="flex-shrink-0 opacity-70">{cat.icon}</div>
              <span className="text-sm font-medium text-slate-700 leading-tight">
                {cat.title}
              </span>
            </div>
          ))}
        </div>

        
        <div className="mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 uppercase relative inline-block">
              Ko‘p ko‘rilganlar
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-blue-500 rounded-full"></span>
            </h2>
          </div>

          <div className="flex gap-2 mt-10 mb-6">
            <button className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-200 rounded transition">
              <LayoutList size={24} />
            </button>
            <button className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-200 rounded transition">
              <LayoutGrid size={24} />
            </button>
            <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
              <Grid3X3 size={24} />
            </button>
          </div>
        </div>

    
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white p-5 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition border border-transparent hover:border-blue-100 flex flex-col justify-between"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="bg-blue-100 text-slate-700 text-xs font-bold px-2 py-1 rounded">
                  {item.code}
                </span>
                <button className="text-slate-400 hover:text-blue-600 transition">
                  <Bookmark size={20} />
                </button>
              </div>
              <h3 className="text-sm font-semibold text-slate-700 leading-snug">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        
        <div className="flex justify-center pb-8">
          <a
            href="#"
            className="text-slate-500 font-medium text-sm sm:text-base border-b border-slate-400 pb-0.5 hover:text-blue-600 hover:border-blue-600 transition-colors"
          >
            Barcha mahsulotlarni ko‘rish
          </a>
        </div>
      </div>
    </div>
  );
}
