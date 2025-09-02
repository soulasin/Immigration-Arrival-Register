import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "ໜ້າຫຼັກ", href: "/", current: true },
  { name: "ກ່ຽວກັບບໍລິສັດ", href: "about", current: false },
  // { name: "ລົງທະບຽນ", href: "register", current: false },
  { name: "ກົດໝາຍ", href: "legislation", current: false },
  { name: "ຕິດຕາມຂໍ້ມູນຂອງທ່ານ", href: "referenceID", current: false },
  { name: "ຕິດຕໍ່", href: "contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-[#004D9F] sticky top-0 z-50 shadow-md">
      {({ open }) => (
        <>
          <div className="max-w-[1200px] mx-auto px-5 flex justify-between items-center h-16">
            {/* Logo */}
            <a href="index.html" className="flex items-center text-yellow-400 font-bold text-xl">
              <img
                src="https://scontent.fvte1-1.fna.fbcdn.net/v/t39.30808-6/357527933_242476735217525_2855010430150353117_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG5XQ-IlAFtNelxcphz9h0O83_Hcpbzr0rzf8dylvOvSlaWCIXzT-q3sDeI73Yb9zblUg2PXdfuYecT_1E3gsCX&_nc_ohc=nPRc0UjaiUcQ7kNvwGWpXIK&_nc_oc=AdlLKhOphN6tfheXzuI1H4u5X0CWEaDt2ksyL1QnhrfIYEhXXRQx85hACrXt08RUGIw&_nc_zt=23&_nc_ht=scontent.fvte1-1.fna&_nc_gid=WoJ63ZvXK0q3S8Ajp15E1A&oh=00_AfVAMahdY-ytYYVMgCVdW8MOL8976_awAe5ZP03u_6-LXA&oe=68AF36A8"
                alt="LAO VISA"
                className="w-10 h-10 mr-2 rounded-full"
              />
              BPH Service CO.,LTD
            </a>

            {/* Desktop Menu */}
            <div className="hidden sm:flex space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? "text-yellow-400" : "text-white",
                    "font-medium hover:text-yellow-400 transition-colors duration-300"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="sm:hidden">
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-400 hover:bg-blue-700">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" />
                )}
              </Disclosure.Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel className="sm:hidden bg-[#004D9F]">
            <div className="px-5 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? "text-yellow-400" : "text-white",
                    "block px-3 py-2 rounded-md font-medium hover:text-yellow-400 transition-colors duration-300"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
