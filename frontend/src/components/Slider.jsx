import React, { useState, useEffect } from "react";
import "../css/Slider.css";

const initialItems = [
  {
    id: 0,
    image:
      "https://storage-ct.lrclib.net/file/cuutruyen/uploads/manga/156/panorama/processed-c92ee2d97f94e2010286751b24e613b1.jpg",
    name: "Kichiku Eiyuu",
    description: "AKHVAKJSHDAJSBVJKAS",
    link: "#",
  },
  {
    id: 1,
    image:
      "https://storage-ct.lrclib.net/file/cuutruyen/uploads/manga/156/panorama/processed-c92ee2d97f94e2010286751b24e613b1.jpg",
    name: "Dược Sư Tự Sự (FULL HD)",
    description:
      "Câu chuyện về cô gái trẻ Miêu Miêu trở thành nô tì ở trong cung và cách mà cô lần lượt giải quyết những vụ án.",
    link: "#",
  },
  {
    id: 2,
    image:
      "https://storage-ct.lrclib.net/file/cuutruyen/uploads/manga/481/panorama/processed_mobile-8a93468bce1465088d950f941267e98d.jpg",
    name: "Kichiku Eiyuu",
    description: "AKHVAKJSHDAJSBVJKAS",
    link: "#",
  },
];

function SliderBar() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (event, index) => {
    event.preventDefault();
    setActiveIndex(index);
    document.querySelector(`[data-index="${index}"]`).scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      setActiveIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : initialItems.length - 1
      );
    } else if (event.key === "ArrowRight") {
      setActiveIndex((prevIndex) =>
        prevIndex < initialItems.length - 1 ? prevIndex + 1 : 0
      );
    }
  };

  useEffect(() => {
    document.querySelector(`[data-index="${activeIndex}"]`).scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });
  }, [activeIndex]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <div className="relative mb-20 md:mb-40 flex justify-center box-content">
        <div className="snap-x snap-mandatory overflow-x-auto flex w-full translate-y-20 md:translate-y-28 relative z-10 gap-4 snap px-2 select-none scrollbar-hide">
          <div className="snap-align-none snap-none hidden md:block flex-none 2xl:w-[calc((100vw-1280px-2rem)/2)] xl:w-[calc((100vw-1024px-2rem)/2)] lg:w-[calc((100vw-768px-2rem)/2)] md:w-[calc((100vw-768px-2rem)/2)]" />
          {initialItems.map((item, index) => (
            <div
              key={item.id}
              className={`flex-none w-[83vw] rounded-lg overflow-hidden relative z-10 snap-center snap-always transition-opacity duration-500 ${
                activeIndex === index ? "opacity-100" : "opacity-50"
              }`}
              data-index={index}
            >
              <picture>
                <source srcSet={item.image} media="(max-width: 640px)" />
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute w-full h-full inset-0 object-cover object-center rounded-lg z-20 bg-hero"
                />
              </picture>
              <canvas
                width={16}
                height={9}
                className="md:hidden rounded-lg w-full transition duration-500"
                style={{
                  boxShadow: "rgba(173, 158, 151, 0.314) 0px 6px 20px 2px",
                  backgroundColor: "rgb(17, 24, 39)",
                }}
              />
              <canvas
                width={32}
                height={15}
                className="hidden md:block rounded-lg w-full transition duration-500"
                style={{
                  boxShadow: "rgba(173, 158, 151, 0.314) 0px 6px 20px 2px",
                  backgroundColor: "rgb(17, 24, 39)",
                }}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-hero z-10 rounded-lg" />
              <div className="absolute w-full bottom-0 left-0 flex justify-between items-center p-3 md:p-10 z-30">
                <div className="flex flex-col gap-1 xl:gap-2 w-full overflow-hidden">
                  <div className="max-w-[24rem] flex-0">
                    <a href={item.link}>
                      <h2 className="font-head font-bold overflow-ellipsis whitespace-nowrap overflow-hidden md:overflow-auto md:whitespace-normal break-words text-base md:text-lg xl:text-xl text-white text-opacity-75">
                        {item.name}
                      </h2>
                    </a>
                  </div>
                  <div className="flex-1 flex-grow max-w-[32rem]">
                    <p className="w-full overflow-ellipsis whitespace-nowrap overflow-hidden md:overflow-auto md:whitespace-normal break-words text-white text-opacity-80 text-sm xl:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="hidden md:block flex-0 whitespace-nowrap">
                  <a
                    href={item.link}
                    className="inline-block button bg-blue-600 hover:bg-blue-800 bg-opacity-50 hover:bg-opacity-50 text-white px-2 md:px-8 py-1 md:py-2 text-sm uppercase font-bold"
                  >
                    Xem thông tin
                  </a>
                </div>
              </div>
              <div
                className="absolute w-full h-full top-0 left-0 z-10 transition-all duration-1000 hidden md:block opacity-80"
                style={{ backgroundColor: "rgb(197, 185, 164)" }}
              />
            </div>
          ))}
          <div className="snap-align-none snap-none hidden md:block flex-none 2xl:w-[calc((100vw-1280px-2rem)/2)] xl:w-[calc((100vw-1024px-2rem)/2)] lg:w-[calc((100vw-768px-2rem)/2)] md:w-[calc((100vw-768px-2rem)/2)]" />
        </div>
        <div
          className="absolute w-full h-[calc(5rem+80%)] md:h-[calc(7rem+80%)] top-0 left-0 py-4"
          style={{
            background:
              "linear-gradient(132deg, rgb(197, 185, 164) 0%, rgb(12, 9, 9) 100%)",
          }}
        />
      </div>
      <div className="flex justify-center gap-2 mt-3 h-2.5 md:h-3">
        {initialItems.map((_, index) => (
          <button
            key={index}
            className={`flex-none rounded-full w-2.5 h-2.5 md:w-3 md:h-3 bg-gray-800 transition ${
              activeIndex === index ? "" : "bg-opacity-30"
            }`}
            onClick={(event) => handleButtonClick(event, index)}
          />
        ))}
      </div>
    </div>
  );
}

export default SliderBar;
