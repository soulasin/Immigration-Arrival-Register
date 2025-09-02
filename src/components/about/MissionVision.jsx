import React from "react";
import { FaBullseye, FaEye } from "react-icons/fa";

export default function MissionVision() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            ພາລະກິດ ແລະ ວິໄສທັດ
          </h2>
          <p className="text-gray-600 text-lg">
            ຈຸດປະສົງຂອງພວກເຮົາໃນການໃຫ້ບໍລິການ
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Mission */}
          <div className="bg-white p-10 rounded-lg shadow-md text-center">
            <FaBullseye className="text-5xl text-blue-900 mx-auto mb-5" />
            <h3 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4">
              ພາລະກິດ
            </h3>
            <p className="text-gray-700">
              ໃຫ້ບໍລິການດ້ານວີຊາເຂົ້າເມືອງລາວທີ່ມີຄຸນນະພາບ ແລະ
              ໄວທີ່ສຸດ ໂດຍຜ່ານລະບົບອອນລາຍທີ່ສະດວກສະບາຍ ເພື່ອສະໜັບສະໜູນການທ່ອງທ່ຽວ ແລະ
              ທຸລະກິດໃນປະເທດລາວ.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-10 rounded-lg shadow-md text-center">
            <FaEye className="text-5xl text-blue-900 mx-auto mb-5" />
            <h3 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4">
              ວິໄສທັດ
            </h3>
            <p className="text-gray-700">
              ເປັນໜຶ່ງໃນບໍລິສັດນຳໜ້າດ້ານການບໍລິການວີຊາເຂົ້າເມືອງລາວທີ່ມີປະສິດທິພາບສູງສຸດ ໃນພາກພື້ນອາຊີຕາເວັນອອກສຽງໃຕ້ ໂດຍການນຳໃຊ້ເທັກໂນໂລຊີທີ່ທັນສະໄໝ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
