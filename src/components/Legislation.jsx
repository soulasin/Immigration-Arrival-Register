import React from "react";
import { FaGavel, FaPassport, FaFileAlt, FaTasks, FaDownload, FaExclamationCircle } from "react-icons/fa";

const legislationData = [
  {
    id: 1,
    icon: <FaGavel className="text-blue-900 text-2xl mr-3" />,
    title: "ກົດໝາຍກ່ຽວກັບວີຊາ",
    texts: [
      "ການຂໍວີຊາເຂົ້າເມືອງລາວຖືກຄວບຄຸມໂດຍກົດໝາຍວ່າດ້ວຍການຄວບຄຸມການເຂົ້າເມືອງ ແລະ ການອອກເມືອງຂອງຄົນຕ່າງປະເທດ ໃນ ສປປ ລາວ.",
      "Visa applications for entry into Laos are governed by the Law on Immigration Control of Foreigners in the Lao PDR. This law specifies the conditions and procedures for visa applications clearly."
    ],
    list: [
      "ກົດໝາຍວ່າດ້ວຍການຄວບຄຸມການເຂົ້າເມືອງ ແລະ ການອອກເມືອງຂອງຄົນຕ່າງປະເທດ (ສະບັບປັບປຸງ 2019)",
      "ດໍາລັດກ່ຽວກັບວີຊາ ແລະ ການເຂົ້າເມືອງຂອງຄົນຕ່າງປະເທດ (2015)",
      "ຂໍ້ຕັ້ງລາຍການກ່ຽວກັບການບໍລິການວີຊາອອນລາຍ (2020)"
    ]
  },
  {
    id: 2,
    icon: <FaPassport className="text-blue-900 text-2xl mr-3" />,
    title: "ປະເພດວີຊາ",
    texts: [
      "ລັດຖະບານລາວໄດ້ກໍານົດປະເພດວີຊາໃຫ້ແກ່ຄົນຕ່າງປະເທດຕາມຈຸດປະສົງການເຂົ້າເມືອງ"
    ],
    list: [
      {
        title: "ວີຊາທ່ອງທ່ຽວ (Tourist Visa - T-B3)",
        desc: "ສໍາລັບຜູ້ມາທ່ອງທ່ຽວ ມີອາຍຸຢູ່ໄດ້ 30 ວັນ ແລະ ສາມາດຂໍຕໍ່ໄດ້ 2 ເທື່ອ"
      },
      {
        title: "ວີຊາທຸລະກິດ (Business Visa - B-B3)",
        desc: "ສໍາລັບຜູ້ມາດໍາເນີນທຸລະກິດ ມີອາຍຸ30 ວັນ ແລະ ສາມາດຂໍຕໍ່ໄດ້"
      }
    ]
  },
  {
    id: 3,
    icon: <FaFileAlt className="text-blue-900 text-2xl mr-3" />,
    title: "ເງື່ອນໄຂ ແລະ ເອກະສານທີ່ຕ້ອງການ",
    texts: [
      "ການຂໍວີຊາອີເລັກໂຕຣນິກຕ້ອງປະຕິບັດຕາມເງື່ອນໄຂ ແລະ ເອກະສານດັ່ງລຸ່ມນີ້:"
    ],
    list: [
      "ໃບອະນຸຍາດເດີນທາງ (Passport) ທີ່ມີอายุໃຊ້ງານຢ່າງນ້ອຍ 6 ເດືອນ",
      "ຮູບຖ່າຍສີ 4x6 cm ພິມດ້ວຍເຈົ້າຫນ້າທີ່ທີ່ຊັດເຈນ",
      "ເອກະສານຢັ້ງຢືນການຈ້າງງານ (ສໍາລັບວີຊາທຸລະກິດ)"
    ],
    note: {
      title: "ຂໍ້ຄວນລະວັງ",
      icon: <FaExclamationCircle className="text-blue-900 mr-2" />,
      text: "ການໃຫ້ຂໍ້ມູນທີ່ບໍ່ຖືກຕ້ອง..."
    }
  },
  {
    id: 4,
    icon: <FaTasks className="text-blue-900 text-2xl mr-3" />,
    title: "ຂັ້ນຕອນການຂໍວີຊາ",
    texts: [
      "ຂັ້ນຕອນການຂໍວີຊາອີເລັກໂຕຣນິກມີດັ່ງນີ້:"
    ],
    list: [
      "ລົງທະບຽນບັນຊີໃນລະບົບວີຊາອອນລາຍ",
      "ເພີ່ມຂໍ້ມູນສ່ວນຕົວ ແລະ ຂໍ້ມູນໃບອະນຸຍາດເດີນທາງ",
      "ອັບໂຫລດເອກະສານທີ່ກ່ຽວຂ້ອງ (ຮູບຖ່າຍ, ເອກະສານຢັ້ງຢືນ)",
      "ຊໍາລະຄ່າທໍານຽມຜ່ານລະບົບ",
      "ລໍຖ້າການກວດສອບ ແລະ ອະນຸມັດຈາກກົມຕ້ານການຄຸມການເຂົ້າເມືອງ",
      "ເອົາວີຊາທີ່ອະນຸມັດແລ້ວຜ່ານອີເມວ ແລະ ພິມເພື່ອນໍາໄປສະແດງ"
    ]
  },
  {
    id: 5,
    icon: <FaDownload className="text-blue-900 text-2xl mr-3" />,
    title: "ເອກະສານສໍາຄັນ",
    texts: ["ສາມາດດາວໂຫລດເອກະສານກ່ຽວກັບກົດໝາຍ ແລະ ຂໍ້ກໍານົດການໃຫ້ບໍລິການວີຊາອີເລັກໂຕຣນິກໄດ້: "],
    documents: [
      "ກົດໝາຍວ່າດ້ວຍການຄວບຄຸມການເຂົ້າເມືອງ ແລະ ການອອກເມືອງຂອງຄົນຕ່າງປະເທດ",
      "ຄູ່ມືການຂໍວີຊາອີເລັກໂຕຣນິກ",
      "ເງື່ອນໄຂ ແລະ ຂໍ້ກໍານົດການໃຫ້ບໍລິການ"
    ]
  }
];

const Legislation = () => {
  return (
    <div className="bg-url('/https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/34/00/fb/vang-vieng.jpg?') bg-cover bg-center">
      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-10 px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-900">ກົດໝາຍ ແລະ ຂໍ້ກໍານົດການຂໍວີຊາ</h1>
          <p className="mt-2 text-gray-700">ຂໍ້ມູນທີ່ຈຳເປັນເພື່ອຜູ້ຂໍວີຊາທີ່ມາທ່ອງທ່ຽວ ຫຼື ທຸລະກິດ ໃນ ສປປ ລາວ</p>
        </div>

        {legislationData.map((section) => (
          <section key={section.id} className="mb-10 bg-white rounded-xl shadow p-6">
            <div className="flex items-center mb-4">{section.icon}<h2 className="text-2xl font-semibold text-blue-900">{section.title}</h2></div>

            {section.texts.map((text, idx) => (
              <p key={idx} className="mb-2 text-gray-700">{text}</p>
            ))}

            {section.list && (
              <ul className="list-disc list-inside ml-6 text-gray-700 mb-2">
                {section.list.map((item, idx) =>
                  typeof item === "string" ? (
                    <li key={idx}>{item}</li>
                  ) : (
                    <li key={idx}><strong>{item.title}:</strong> {item.desc}</li>
                  )
                )}
              </ul>
            )}

            {section.documents && (
              <ul className="list-disc list-inside ml-6 text-gray-700">
                {section.documents.map((doc, idx) => (
                  <li key={idx}>{doc}</li>
                ))}
              </ul>
            )}

            {section.note && (
              <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 mt-4 flex items-center">
                {section.note.icon}
                <p className="text-gray-800">{section.note.text}</p>
              </div>
            )}
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6 mt-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© 2025 BPH Service CO.,LTD. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Legislation;
