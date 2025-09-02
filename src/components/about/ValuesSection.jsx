import React from "react";
import { FaMedal, FaShieldAlt, FaHandHoldingHeart } from "react-icons/fa";

// Mock data 
const valuesData = [
  {
    icon: <FaMedal />,
    title: "ຄຸນນະພາບ",
    description:
      "ພວກເຮົາມີຄວາມຮັບຜິດຊອບສູງ ໃນການໃຫ້ບໍລິການທີ່ມີຄຸນນະພາບ ແລະ ໄວທີ່ສຸດແກ່ລູກຄ້າ.",
  },
  {
    icon: <FaShieldAlt />,
    title: "ຄວາມປອດໄພ",
    description:
      "ຂໍ້ມູນຂອງລູກຄ້າເປັນສິ່ງສຳຄັນ ພວກເຮົາຮັກສາຄວາມປອດໄພຂອງຂໍ້ມູນຢ່າງເຂັ້ມງວດ.",
  },
  {
    icon: <FaHandHoldingHeart />,
    title: "ຄວາມເຊື່ອຖືໄດ້",
    description:
      "ພວກເຮົາສ້າງຄວາມໝັ້ນໃຈແກ່ລູກຄ້າ ດ້ວຍການໃຫ້ບໍລິການທີ່ມີປະສິດທິຜົນ ແລະ ເຊື່ອຖືໄດ້.",
  },
];

export default function ValuesSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            ຄ່ານິຍົມຂອງບໍລິສັດ
          </h2>
          <p className="text-gray-600 text-lg">
            ຫຼັກການໃນການໃຫ້ບໍລິການຂອງພວກເຮົາ
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {valuesData.map((value, index) => (
            <div
              key={index}
              className="bg-white p-12 rounded-lg shadow-md text-center "
            >
              <div className="text-blue-900 text-5xl mb-5 flex justify-center ">{value.icon}</div>
              <h3 className="text-blue-900 text-xl font-semibold mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
