import React from "react";
import { MapPin, Phone, Mail } from "lucide-react"; 

// Mockup data
const footerData = {
  company: "BPH Service CO.,LTD",
  address: "ບ້ານຈອມແຈ້ງ, ເມືອງຈັນທະບູລີ, ນະຄອນຫຼວງວຽງຈັນ",
  phone: "+856 20 999 6987",
  email: "info@laovisa.com",
  menu: [
    { label: "ໜ້າຫຼັກ", href: "/" },
    { label: "ກ່ຽວກັບພວກເຮົາ", href: "/about" },
    // { label: "ລົງທະບຽນວີຊາ", href: "/register" },
    { label: "ກົດໝາຍ ແລະ ຂໍ້ກຳນົດ", href: "/legislation" },
    { label: "ຕິດຕໍ່ພວກເຮົາ", href: "/contact" },
  ],
  newsletter: {
    title: "ຈອງຂໍ້ມູນ",
    description: "ສະໝັກຮັບຂໍ້ມູນຈາກພວກເຮົາ ເພື່ອຮັບຂໍ້ມູນກ່ຽວກັບວີຊາລ່າສຸດ",
  },
  copyright: "© 2025 LAO VISA - BPH Service CO.,LTD. ສະຫງວນລິຂະສິດທັງໝົດ.",
};

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            {footerData.company}
          </h2>
          <p className="flex items-center mb-3">
            <MapPin className="w-5 h-5 text-yellow-400 mr-2" />
            {footerData.address}
          </p>
          <p className="flex items-center mb-3">
            <Phone className="w-5 h-5 text-yellow-400 mr-2" />
            {footerData.phone}
          </p>
          <p className="flex items-center mb-3">
            <Mail className="w-5 h-5 text-yellow-400 mr-2" />
            {footerData.email}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">
            ເມນູໄວ້ໃຊ້
          </h3>
          <ul>
            {footerData.menu.map((item, index) => (
              <li key={index} className="mb-2">
                <a
                  href={item.href}
                  className="hover:text-yellow-400 transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">
            {footerData.newsletter.title}
          </h3>
          <p className="mb-4">{footerData.newsletter.description}</p>
          <form className="flex" >
            <input
              type="email"
              placeholder="ອີເມວຂອງທ່ານ"
              className="flex-grow p-2 bg-amber-50 rounded-l-md text-black"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-blue-900 px-4 rounded-r-md font-bold hover:bg-yellow-300 transition"
            >
              ສະໝັກ
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 border-t border-blue-700 pt-6 text-sm">
        {footerData.copyright}
      </div>
    </footer>
  );
}
