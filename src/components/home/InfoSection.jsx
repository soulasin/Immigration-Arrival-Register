import React from "react";
import { Check } from "lucide-react";

const infoData = [
  {
    id: 1,
    title: "ເງື່ອນໄຂທີ່ຕ້ອງການ",
    items: [
      "ໃບຜ່ານແດນທີ່ມີອາຍຸໃຊ້ງານຢ່າງນ້ອຍ 6 ເດືອນ",
      "ຮູບຖ່າຍສີຂະໜາດ 4x6 cm",
      "ເອກະສານຢັ້ງຢືນການຈ້າງງານ",
      "ເອກະສານຮັບຮອງຈາກບໍລິສັດໃນລາວ",
    ],
  },
  {
    id: 2,
    title: "ຂັ້ນຕອນການຂໍວີຊາ",
    items: [
      "ລົງທະບຽນບັນຊີໃນລະບົບວີຊາອອນລາຍ",
      "ເພີ່ມຂໍ້ມູນສ່ວນຕົວ ແລະ ຂໍ້ມູນໃບຜ່ານແດນ",
      "ອັບໂຫລດເອກະສານ",
      "ຊຳລະຄ່າທຳນຽມອອນລາຍ",
      "ລໍຖ້າການອະນຸມັດ",
    ],
  },
  {
    id: 3,
    title: "ເວລາດຳເນີນການ",
    items: [
      "ປົກກະຕິ: 3 ວັນທຳມະດາ",
      "ບໍລິການດ່ວນ: 1 ວັນທຳມະດາ",
      "ເວລາໃຫ້ບໍລິການ: ຈັນ - ສຸກ",
      "ພັກບໍລິການ: ວັນເສົາ ແລະ ອາທິດ",
    ],
  },
];

export default function InfoSection() {
  return (
    <section
      className="relative py-16 px-5 text-white bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')",
      }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-yellow-400 mb-2">
          ຂໍ້ມູນສຳຄັນກ່ຽວກັບການຂໍວີຊາ
        </h2>
        <p className="text-gray-200">
          ຮຽນຮູ້ຂໍ້ມູນ ແລະ ເງື່ອນໄຂກ່ອນການຂໍວີຊາ
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {infoData.map((card) => (
          <div
            key={card.id}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
          >
            <h3 className="text-2xl text-yellow-400 font-semibold mb-4">
              {card.title}
            </h3>
            <ul className="space-y-3">
              {card.items.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <Check className="w-5 h-5 text-yellow-400 mr-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
