import React from "react";
import List from "./List";

const BestManga = () => {
  const mangas = [
    {
      id: 1,
      title: "Naruto Full Color Edition",
      chapter: "C. 416",
      timeAgo: "14 giờ trước",
      imageUrl:
        "https://storage-ct.lrclib.net/file/cuutruyen/uploads/manga/703/cover/processed-ab058f6857ab15d12d2b47d955f2ed85.jpg",
      link: "#",
      chapterLink: "#",
    },
    {
      id: 2,
      title: "One Piece",
      chapter: "C. 1001",
      timeAgo: "2 ngày trước",
      imageUrl:
        "https://storage-ct.lrclib.net/file/cuutruyen/uploads/manga/703/cover/processed-ab058f6857ab15d12d2b47d955f2ed85.jpg",
      link: "#",
      chapterLink: "#",
    },
    {
      id: 3,
      title: "One Piece",
      chapter: "C. 1001",
      timeAgo: "2 ngày trước",
      imageUrl:
        "https://storage-ct.lrclib.net/file/cuutruyen/uploads/manga/703/cover/processed-ab058f6857ab15d12d2b47d955f2ed85.jpg",
      link: "#",
      chapterLink: "#",
    },
    {
      id: 4,
      title: "One Piece",
      chapter: "C. 1001",
      timeAgo: "2 ngày trước",
      imageUrl:
        "https://storage-ct.lrclib.net/file/cuutruyen/uploads/manga/703/cover/processed-ab058f6857ab15d12d2b47d955f2ed85.jpg",
      link: "#",
      chapterLink: "#",
    },
    {
      id: 5,
      title: "One Piece",
      chapter: "C. 1001",
      timeAgo: "2 ngày trước",
      imageUrl:
        "https://storage-ct.lrclib.net/file/cuutruyen/uploads/manga/703/cover/processed-ab058f6857ab15d12d2b47d955f2ed85.jpg",
      link: "#",
      chapterLink: "#",
    },
    {
      id: 6,
      title: "One Piece",
      chapter: "C. 1001",
      timeAgo: "2 ngày trước",
      imageUrl:
        "https://storage-ct.lrclib.net/file/cuutruyen/uploads/manga/703/cover/processed-ab058f6857ab15d12d2b47d955f2ed85.jpg",
      link: "#",
      chapterLink: "#",
    },
    {
      id: 7,
      title: "One Piece",
      chapter: "C. 1001",
      timeAgo: "2 ngày trước",
      imageUrl:
        "https://storage-ct.lrclib.net/file/cuutruyen/uploads/manga/703/cover/processed-ab058f6857ab15d12d2b47d955f2ed85.jpg",
      link: "#",
      chapterLink: "#",
    },
    {
      id: 8,
      title: "One Piece",
      chapter: "C. 1001",
      timeAgo: "2 ngày trước",
      imageUrl:
        "https://storage-ct.lrclib.net/file/cuutruyen/uploads/manga/703/cover/processed-ab058f6857ab15d12d2b47d955f2ed85.jpg",
      link: "#",
      chapterLink: "#",
    },
    {
      id: 9,
      title: "One Piece",
      chapter: "C. 1001",
      timeAgo: "2 ngày trước",
      imageUrl:
        "https://storage-ct.lrclib.net/file/cuutruyen/uploads/manga/703/cover/processed-ab058f6857ab15d12d2b47d955f2ed85.jpg",
      link: "#",
      chapterLink: "#",
    },
    {
      id: 10,
      title: "One Piece",
      chapter: "C. 1001",
      timeAgo: "2 ngày trước",
      imageUrl:
        "https://storage-ct.lrclib.net/file/cuutruyen/uploads/manga/703/cover/processed-ab058f6857ab15d12d2b47d955f2ed85.jpg",
      link: "#",
      chapterLink: "#",
    },
    {
      id: 11,
      title: "One Piece",
      chapter: "C. 1001",
      timeAgo: "2 ngày trước",
      imageUrl:
        "https://storage-ct.lrclib.net/file/cuutruyen/uploads/manga/703/cover/processed-ab058f6857ab15d12d2b47d955f2ed85.jpg",
      link: "#",
      chapterLink: "#",
    },
    {
      id: 12,
      title: "One Piece",
      chapter: "C. 1001",
      timeAgo: "2 ngày trước",
      imageUrl:
        "https://storage-ct.lrclib.net/file/cuutruyen/uploads/manga/703/cover/processed-ab058f6857ab15d12d2b47d955f2ed85.jpg",
      link: "#",
      chapterLink: "#",
    },
    {
      id: 13,
      title: "One Piece",
      chapter: "C. 1001",
      timeAgo: "2 ngày trước",
      imageUrl:
        "https://storage-ct.lrclib.net/file/cuutruyen/uploads/manga/703/cover/processed-ab058f6857ab15d12d2b47d955f2ed85.jpg",
      link: "#",
      chapterLink: "#",
    },
    {
      id: 14,
      title: "One Piece",
      chapter: "C. 1001",
      timeAgo: "2 ngày trước",
      imageUrl:
        "https://storage-ct.lrclib.net/file/cuutruyen/uploads/manga/703/cover/processed-ab058f6857ab15d12d2b47d955f2ed85.jpg",
      link: "#",
      chapterLink: "#",
    },
    {
      id: 15,
      title: "One Piece",
      chapter: "C. 1001",
      timeAgo: "2 ngày trước",
      imageUrl:
        "https://storage-ct.lrclib.net/file/cuutruyen/uploads/manga/703/cover/processed-ab058f6857ab15d12d2b47d955f2ed85.jpg",
      link: "#",
      chapterLink: "#",
    },
    {
      id: 16,
      title: "One Piece",
      chapter: "C. 1001",
      timeAgo: "2 ngày trước",
      imageUrl:
        "https://storage-ct.lrclib.net/file/cuutruyen/uploads/manga/703/cover/processed-ab058f6857ab15d12d2b47d955f2ed85.jpg",
      link: "#",
      chapterLink: "#",
    },
  ];

  return (
    <section id="best-mangas" className="py-16 lg:py-24 px-2 bg-red-700">
      <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <div className="common-container mb-8 lg:mb-12">
          <div className="uppercase font-bold text-xl text-gray-700 text-blue-100">
            Truyện nổi bật
          </div>
        </div>
        <List updates={mangas} />
      </div>
    </section>
  );
};

export default BestManga;
