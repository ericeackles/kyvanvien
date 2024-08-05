import React, { useRef } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function List({ updates }) {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: direction * 200,
        behavior: "smooth",
      });
    }
  };

  const renderUpdate = (update) => (
    <div key={update.id} className="snap-start snap-stop-always">
      <div className="flex md:hidden flex-none w-[14vw]">
        <a
          href={update.link}
          className="flex-none rounded-lg overflow-hidden shadow hover:shadow-lg fine-transition w-[3.5rem] h-[5.25rem] hover-gradient"
        >
          <img
            src={update.imageUrl}
            alt={update.title}
            loading="lazy"
            width="320"
            height="480"
            className="w-full h-auto object-cover"
          />
        </a>
        <div className="px-2 py-2 w-full flex flex-col items-start justify-start md:justify-between overflow-hidden">
          <a href={update.link} className="overflow-hidden">
            <h3 className="text-gray-800 font-bold text-sm mb-1 line-clamp-2">
              {update.title}
            </h3>
          </a>
          <h4 className="text-xs uppercase tracking-wide text-gray-700 line-clamp-1">
            <a href={update.chapterLink}>
              <span className="font-semibold">{update.chapter}</span> -{" "}
              <span>{update.timeAgo}</span>
            </a>
          </h4>
        </div>
      </div>
      <div className="hidden md:flex w-full flex-none flex-col justify-between items-stretch rounded-lg snap-start">
        <a
          href={update.link}
          className="block flex-none w-[8rem] lg:w-[10rem] h-[12rem] lg:h-[15rem] rounded-lg shadow hover:shadow-lg fine-transition overflow-hidden hover-gradient"
        >
          <img
            src={update.imageUrl}
            alt={update.title}
            loading="lazy"
            width="320"
            height="480"
            className="w-full h-auto object-cover"
          />
        </a>
        <div className="mt-2 w-[8rem] lg:w-[10rem] h-[4.5rem] flex flex-col items-start justify-start overflow-hidden">
          <a href={update.link} className="overflow-hidden">
            <h3 className="text-gray-800 font-bold text-sm mb-1 line-clamp-1 md:line-clamp-2">
              {update.title}
            </h3>
          </a>
          <h4 className="text-xs uppercase tracking-wide text-gray-700 line-clamp-1">
            <a href={update.chapterLink}>
              <span className="font-semibold">{update.chapter}</span> -{" "}
              <span>{update.timeAgo}</span>
            </a>
          </h4>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative">
      <button
        className="hidden md:flex absolute h-full top-0 left-0 w-6 lg:w-11 z-10 justify-center items-center focus:outline-none fine-transition opacity-90 hover:opacity-100"
        onClick={() => scroll(-1)}
      >
        <MdChevronLeft
          className="text-gray-400 bg-gray-300 rounded-full shadow-lg p-1 fine-transition"
          size={24}
        />
      </button>

      <div
        ref={containerRef}
        className="snap-container overflow-x-hidden grid grid-flow-col grid-rows-5 md:grid-rows-2 gap-2 md:gap-4 h-full py-2"
        style={{ scrollBehavior: "smooth" }}
      >
        {updates.map(renderUpdate)}
      </div>

      <button
        className="hidden md:flex absolute h-full top-0 right-0 w-6 lg:w-11 z-10 justify-center items-center focus:outline-none fine-transition opacity-90 hover:opacity-100"
        onClick={() => scroll(1)}
      >
        <MdChevronRight
          className="text-gray-700 bg-gray-200 rounded-full shadow-lg p-1 fine-transition"
          size={24}
        />
      </button>
    </div>
  );
}

export default List;
