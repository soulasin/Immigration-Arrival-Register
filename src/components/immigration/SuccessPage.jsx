import React from "react";
import { FaCheck, FaPlane, FaReceipt } from "react-icons/fa";

export default function SuccessPage({ referenceId, onNavigate, onReset }) {
  return (
    <section className="bg-white max-w-3xl mx-auto p-10 rounded-2xl shadow-xl text-center">
      <div className="text-green-500 text-6xl mb-6">
        <FaCheck />
      </div>
      <h2 className="text-3xl font-bold text-green-600 mb-4">
        Payment Successful!
      </h2>
      <h3 className="text-2xl font-bold text-blue-900 mb-6">
        ການຊຳລະເງິນສຳເລັດແລ້ວ!
        </h3>
     
     <div className="bg-blue-50 p-6 rounded-lg mb-8">
       <h4 className="text-lg font-semibold text-blue-900 mb-4">
         Your Reference ID / ລະຫັດອ້າງອີງຂອງທ່ານ:
       </h4>
       <div className="text-2xl font-bold text-blue-900 bg-white p-4 rounded border-2 border-dashed border-blue-300">
         {referenceId}
       </div>
       <p className="text-sm text-gray-600 mt-4">
         Please save this reference ID for tracking your application
       </p>
       <p className="text-sm text-gray-600">
         ກະລຸນາເກັບຮັກສາລະຫັດນີ້ໄວ້ເພື່ອຕິດຕາມໃບສະຫມັກຂອງທ່ານ
       </p>
     </div>

     <div className="bg-gray-50 p-6 rounded-lg mb-8 text-left">
       <h4 className="font-semibold text-gray-800 mb-4">Next Steps:</h4>
       <ul className="space-y-2 text-gray-600">
         <li>• Your application has been submitted successfully</li>
         <li>• Processing time: 1-3 business days</li>
         <li>• You will receive email confirmation shortly</li>
         <li>• Use your reference ID to track application status</li>
       </ul>
       <h4 className="font-semibold text-gray-800 mb-2 mt-4">ຂັ້ນຕອນຕໍ່ໄປ:</h4>
       <ul className="space-y-2 text-gray-600">
         <li>• ໃບສະຫມັກຂອງທ່ານຖືກສົ່ງສຳເລັດແລ້ວ</li>
         <li>• ເວລາດຳເນີນການ: 1-3 ວັນທຳການ</li>
         <li>• ທ່ານຈະໄດ້ຮັບອີເມວຢືນຢັນໃນໄວໆນີ້</li>
         <li>• ໃຊ້ລະຫັດອ້າງອີງເພື່ອຕິດຕາມສະຖານະ</li>
       </ul>
     </div>

     <div className="flex gap-4 justify-center">
       <button
         onClick={() => {
           onReset();
           onNavigate("home");
         }}
         className="bg-blue-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
       >
         <FaPlane className="inline mr-2" />
         Submit Another Application
       </button>
       
       <button
         onClick={() => window.open(`/track?ref=${referenceId}`, '_blank')}
         className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition"
       >
         <FaReceipt className="inline mr-2" />
         Track Application
       </button>
     </div>

     <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
       <p className="text-sm text-gray-700">
         <strong>Important:</strong> Print or screenshot this page for your records. 
         You can also track your application status anytime using your reference ID.
       </p>
       <p className="text-sm text-gray-700 mt-2">
         <strong>ສຳຄັນ:</strong> ພິມ ຫຼື ຖ່າຍຮູບໜ້ານີ້ໄວ້ເປັນຫຼັກຖານ. 
         ທ່ານສາມາດຕິດຕາມສະຖານະໄດ້ທຸກເວລາດ້ວຍລະຫັດອ້າງອີງ.
       </p>
     </div>
   </section>
 );
}