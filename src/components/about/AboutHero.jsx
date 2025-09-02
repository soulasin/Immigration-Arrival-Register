import React from "react";

export default function AboutHero() {
  return (
    <section className="relative bg-[url('https://laotiantimes.com/wp-content/uploads/2021/10/Vientiane-in-Laos-by-night-Photo-Hotels-1068x558.jpg')] bg-cover bg-center text-white py-24 px-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/80"></div>

      {/* Content */}
      <div className="relative max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-5">ກ່ຽວກັບພວກເຮົາ</h1>
        <p className="text-lg md:text-xl mb-8">
          ບໍລິສັດ BPH Service CO.,LTD ຜູ້ໃຫ້ບໍລິການວີຊາເຂົ້າເມືອງລາວທີ່ເຊື່ອຖືໄດ້
        </p>
      </div>
    </section>
  );
}
  