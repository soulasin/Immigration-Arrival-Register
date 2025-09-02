import React from "react";

// Mockup data
const newsData = [
  {
    id: 1,
    date: "20 ພຶດສະພາ 2025",
    title: "ການປ່ຽນແປງຂັ້ນຕອນການຂໍວີຊາໃໝ່",
    description:
      "ລັດຖະບານລາວໄດ້ປັບປຸງຂັ້ນຕອນການຂໍວີຊາເຂົ້າເມືອງໃໝ່ ເພື່ອຄວາມສະດວກ ແລະ ວ່ອງໄວຂຶ້ນ.",
    image:
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    link: "#",
  },
  {
    id: 2,
    date: "15 ພຶດສະພາ 2025",
    title: "ການເພີ່ມປະເພດວີຊາໃໝ່",
    description:
      "ເພີ່ມປະເພດວີຊາໃໝ່ສຳລັບນັກທ່ອງທ່ຽວທີ່ຕ້ອງການຢູ່ໃນລາວນານກວ່າ 30 ວັນ.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    link: "#",
  },
  {
    id: 3,
    date: "10 ພຶດສະພາ 2025",
    title: "ການປິດບໍລິການຊົ່ວຄາວ",
    description:
      "ບໍລິການວີຊາຈະປິດໃຫ້ບໍລິການຊົ່ວຄາວໃນວັນສຳຄັນຂອງຊາດ ແລະ ສາກົນ.",
    image:
      "https://images.unsplash.com/photo-1591822059941-5d973391c99b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    link: "#",
  },
];

export default function NewsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-2">
          ຂ່າວສານ ແລະ ປະກາດເຕືອນ
        </h2>
        <p className="text-gray-600">
          ຕິດຕາມຂໍ້ມູນລ່າສຸດກ່ຽວກັບການຂໍວີຊາ
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {newsData.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
          >
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">{item.date}</div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <a
                href={item.link}
                className="inline-block bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition"
              >
                ອ່ານເພີ່ມເຕີມ
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
