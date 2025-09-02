import React from "react";

export default function AboutHistory() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">ປະຫວັດຄວາມເປັນມາ</h2>
        </div>

        {/* History Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className="space-y-4 text-gray-700">
            <p>
              ບໍລິສັດ BPH Service CO.,LTD ກໍ່ຕັ້ງຂຶ້ນໂດຍກຸ່ມຜູ້ຊ່ຽວຊານດ້ານການທ່ອງທ່ຽວ ແລະ ການເມືອງທີ່ມີປະສົບການຍາວນານ. ພວກເຮົາເລີ່ມຕົ້ນຈາກການໃຫ້ບໍລິການທີ່ປຶກສາດ້ານການຂໍວີຊາເຂົ້າເມືອງລາວແກ່ນັກທ່ອງທ່ຽວຕ່າງປະເທດ.
            </p>
            <p>
              ໃນປີ 2015, ພວກເຮົາໄດ້ພັດທະນາລະບົບອອນລາຍສຳລັບການສະໝັກວີຊາເພື່ອຄວາມສະດວກ ແລະ ວ່ອງໄວຂຶ້ນ. ປັດຈຸບັນ, ພວກເຮົາເປັນໜຶ່ງໃນບໍລິສັດຊັ້ນນຳທີ່ໃຫ້ບໍລິການດ້ານວີຊາເຂົ້າເມືອງລາວ.
            </p>
            <p>
              ພວກເຮົາມີຄວາມພາກພູມໃຈທີ່ໄດ້ຊ່ວຍເຫຼືອນັກທ່ອງທ່ຽວຫຼາຍກວ່າ 50,000 ຄົນ ຈາກທົ່ວໂລກ ໃນການໄດ້ຮັບວີຊາເຂົ້າເມືອງລາວຢ່າງສຳເລັດຜົນ.
            </p>
          </div>

          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
              alt="ປະຫວັດຄວາມເປັນມາຂອງບໍລິສັດ"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
