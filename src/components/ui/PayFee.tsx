"use client";

import Image from "next/image";
import Link from "next/link";

const PayFee = () => {
  return (
    <section className="py-10 lg:py-12">
      <div className="container bg-white rounded-2xl">
        <div className="flex flex-wrap max-w-4xl mx-auto items-center justify-between">
        {/* Left side - Donation Info */}
          <div className="w-full md:w-1/2">
            <div className="text-gray-700 space-y-3 text-lg">
              <p>
                <strong>ACCOUNT NUMBER :</strong> 246105000559
              </p>
              <p>
                <strong>IFSC CODE :</strong> ICIC0002461
              </p>
              <p>
                <strong>ACCOUNT NAME :</strong> Modish Services Private Limited
              </p>
              <p>
                <strong>BANK :</strong> ICICI Bank
              </p>
            </div>
         
          </div>
          {/* Right side - QR Code */}
          <div className="w-full md:w-1/2 flex justify-center mt-4 md:mt-0">
            <div className="p-4 border-4 border-blue-300 rounded-xl shadow-lg bg-white max-w-xs">
              <Image
              height={400}
              width={400}
                src={"/images/scanner.jpg"}
                alt="SBI QR Code"
                className="w-full h-auto rounded-md"
              />
              <p className="text-center text-sm text-gray-600 mt-3 font-medium">
                Scan & Pay using any UPI App
              </p>
            </div>
          </div>
        </div>
            <p className="mt-4 sm:text-base text-sm text-center font-semibold">
  Note :- After completing the payment, please send a screenshot on WhatsApp:
  <Link href="https://wa.me/918930300615" className="text-blue-600 hover:underline">
    +91 8930300615
  </Link>
</p>
      </div>
    </section>
  );
};

export default PayFee;
