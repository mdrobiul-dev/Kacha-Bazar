"use client";

import { FaLocationDot, FaEnvelope, FaPhone } from "react-icons/fa6";

export default function ContactInfo() {
  return (
    <div className="border rounded-2xl shadow-md p-10 space-y-10 text-center bg-white">
      {/* ====== address ============= */}
      <div>
        <FaLocationDot className="text-primary_color text-4xl mx-auto mb-3" />
        <p className="text-gray-700 leading-relaxed">
          army society, Uttara dhaka
        </p>
      </div>

      <hr />

      {/* ====== email ============= */}
      <div>
        <FaEnvelope className="text-primary_color text-3xl mx-auto mb-3" />
        <p className="text-gray-700">robiulhassanrobi17@gmail.com</p>
        <p className="text-gray-700">help@robiulhassanrobi.com</p>
      </div>

      <hr />

      {/* ====== phone ============= */}
      <div>
        <FaPhone className="text-primary_color text-4xl mx-auto mb-3" />
        <p className="text-gray-700">(+880) 1916269626</p>
        <p className="text-gray-700">(+880) 1605645544</p>
      </div>
    </div>
  );
}
