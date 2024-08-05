import React from "react";

function Footer() {
  return (
    <footer className="px-2 bg-gray-800 border-t-2 border-gray-800 py-16 font-roboto">
      <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center text-sm text-gray-500 w-full">
          <div className="mb-6 text-center">
            <div className="text-green-200">
              Contact for work, copyright and more:
            </div>
            <div>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                ad.kyvantruyen@mail.com
              </a>
            </div>
          </div>
          <div className="mb-6 text-center">
            <div className="mb-1">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                Điều khoản dịch vụ
              </a>
            </div>
            <div className="mb-1">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                Chính sách bảo mật
              </a>
            </div>
          </div>
          <div className="mb-6 text-center">
            <div className="flex gap-5 justify-center"></div>
          </div>
          <div>© 2024 - kyvantruyen</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
