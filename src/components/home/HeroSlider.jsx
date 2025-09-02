import { useState, useEffect } from "react";

const slides = [
  {
    title: "ບໍລິການວີຊາເຂົ້າເມືອງລາວ",
    description: "ສະດວກ ແລະ ວ່ອງໄວດ້ວຍລະບົບອອນລາຍ",
    image: "https://www.asiakingtravel.com/cuploads/files/Laos/Vang%20Vieng/0927-0357_vangvieng.jpg",
    link: "register.html",
    btnText: "ຂໍວີຊາດຽວນີ້",
  },
  {
    title: "ວີຊາທ່ອງທ່ຽວລາວ",
    description: "ສຳລັບຜູ່ທີ່ຕ້ອງການເດີນທາງທ່ອງທ່ຽວໃນປະເທດລາວ",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/34/00/fb/vang-vieng.jpg?",
    link: "about.html",
    btnText: "ລາຍລະອຽດເພີ່ມເຕີມ",
  },
  {
    title: "ວີຊາທຸລະກິດລາວ",
    description: "ສຳລັບນັກທຸລະກິດທີ່ຕ້ອງການດຳເນີນທຸລະກິດໃນລາວ",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Kuang_Si_Falls_and_a_turquoise_water_pool_in_Luang_Prabang_province_Laos.jpg/1200px-Kuang_Si_Falls_and_a_turquoise_water_pool_in_Luang_Prabang_province_Laos.jpg",
    link: "register.html",
    btnText: "ເລີ່ມຕົ້ນດຽວນີ້",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative h-[500px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full flex items-center justify-center bg-center bg-cover transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="text-center text-white max-w-3xl px-5">
            <h2 className="text-4xl md:text-5xl mb-5 drop-shadow-lg">{slide.title}</h2>
            <p className="text-xl md:text-2xl mb-6 drop-shadow-lg">{slide.description}</p>
            <a
              href={slide.link}
              className="inline-block bg-[#004D9F] hover:bg-[#003875] text-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              {slide.btnText}
            </a>
          </div>
        </div>
      ))}

      {/* Prev/Next Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 text-white text-3xl font-bold bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full p-2"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 text-white text-3xl font-bold bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full p-2"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              idx === current ? "bg-yellow-400" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
