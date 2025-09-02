import React from "react";

// Mock data 
const teamMembers = [
  {
    name: "ທ່ານ .......",
    role: "ຜູ້ອຳນວຍການບໍລິສັດ",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=634&q=80",
    facebook: "#",
    linkedin: "#",
    email: "#",
  },
  {
    name: "ນາງ ...",
    role: "ຫົວໜ້າພະແນກວີຊາ",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=634&q=80",
    facebook: "#",
    linkedin: "#",
    email: "#",
  },
  {
    name: "ທ່ານ ...",
    role: "ຜູ້ຊ່ຽວຊານດ້ານກົດໝາຍ",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=634&q=80",
    facebook: "#",
    linkedin: "#",
    email: "#",
  },
  {
    name: "ນາງ ...",
    role: "ຜູ້ຊ່ຽວຊານດ້ານລູກຄ້າສາກົນ",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=634&q=80",
    facebook: "#",
    linkedin: "#",
    email: "#",
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            ທີມງານຂອງພວກເຮົາ
          </h2>
          <p className="text-gray-600 text-lg">
            ພະນັກງານຜູ້ມີຄວາມຊ່ຽວຊານ ແລະ ປະສົບການ
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:translate-y-[-5px] transition-transform"
            >
              <div
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${member.image})` }}
              ></div>
              <div className="p-6 text-center">
                <h3 className="text-blue-900 text-xl font-semibold mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <div className="flex justify-center gap-4">
                  <a href={member.facebook} className="text-blue-900 hover:text-yellow-400">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href={member.linkedin} className="text-blue-900 hover:text-yellow-400">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href={member.email} className="text-blue-900 hover:text-yellow-400">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
