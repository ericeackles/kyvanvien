import React from 'react';
import { Link } from 'react-router-dom';

const StoryNew = () => {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md-8 col-lg-9">
          <div className="section-stories-new mb-3">
            <div className="row">
              <div className="head-title-global d-flex justify-content-between mb-2">
                <div className="col-6 col-md-4 col-lg-4 head-title-global__left d-flex align-items-center">
                  <h2 className="me-2 mb-0 border-bottom border-secondary pb-1">
                    <Link
                      to="https://suustore.com//" // Thay vì href, dùng to cho Link
                      className="d-block text-decoration-none text-dark fs-4 story-name"
                      title="Truyện Mới"
                    >
                      Truyện Mới
                    </Link>
                  </h2>
                </div>
              </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="section-stories-new__list">

                        <div className="story-item-no-image">
                            <div className="story-item-no-image__name d-flex align-items-center">
                                <h3 className="me-1 mb-0 d-flex align-items-center">
                                <svg
                                    style={{ width: '10px', marginRight: '5px' }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 320 512"
                                >
                                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                                </svg>
                                <Link
                                    to="/"
                                    className="text-decoration-none text-dark fs-6 hover-title text-one-row story-name"
                                >
                                    Kiếm Động Cửu Thiên
                                </Link>
                                </h3>
                                <span className="badge text-bg-info text-light me-1">New</span>
                                <span className="badge text-bg-success text-light me-1">Full</span>
                                <span className="badge text-bg-danger text-light">Hot</span>
                            </div>

                            <div className="story-item-no-image__categories ms-2 d-none d-lg-block">
                                <p className="mb-0">
                                <Link
                                    to="/"
                                    className="hover-title text-decoration-none text-dark category-name"
                                >
                                    Tiên Hiệp,
                                </Link>
                                <Link
                                    to="/"
                                    className="hover-title text-decoration-none text-dark category-name"
                                >
                                    Kiếm Hiệp,
                                </Link>
                                <Link
                                    to="/"
                                    className="hover-title text-decoration-none text-dark category-name"
                                >
                                    Dị Giới,
                                </Link>
                                </p>
                            </div>

                            <div className="story-item-no-image__chapters ms-2">
                                <Link to="/" className="hover-title text-decoration-none text-info">
                                Chương 1149
                                </Link>
                            </div>
                        </div>

                        <div className="story-item-no-image">
                        <div className="story-item-no-image__name d-flex align-items-center">
                            <h3 className="me-1 mb-0 d-flex align-items-center">
                            <svg
                                style={{ width: '10px', marginRight: '5px' }}
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 320 512"
                            >
                                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                            </svg>
                            <Link
                                to="/"
                                className="text-decoration-none text-dark fs-6 hover-title text-one-row story-name"
                            >
                                Tinh Thần Biến
                            </Link>
                            </h3>
                            <span className="badge text-bg-info text-light me-1">New</span>
                            <span className="badge text-bg-success text-light me-1">Full</span>
                            <span className="badge text-bg-danger text-light">Hot</span>
                        </div>

                        <div className="story-item-no-image__categories ms-2 d-none d-lg-block">
                            <p className="mb-0">
                            <Link
                                to="/"
                                className="hover-title text-decoration-none text-dark category-name"
                            >
                                Tiên Hiệp,
                            </Link>
                            <Link
                                to="/"
                                className="hover-title text-decoration-none text-dark category-name"
                            >
                                Kiếm Hiệp
                            </Link>
                            </p>
                        </div>

                        <div className="story-item-no-image__chapters ms-2">
                            <Link to="/" className="hover-title text-decoration-none text-info">
                            Chương 671
                            </Link>
                        </div>
                        </div>

                        <div className="story-item-no-image">
                        <div className="story-item-no-image__name d-flex align-items-center">
                            <h3 className="me-1 mb-0 d-flex align-items-center">
                            <svg
                                style={{ width: '10px', marginRight: '5px' }}
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 320 512"
                            >
                                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                            </svg>
                            <Link
                                to="/"
                                className="text-decoration-none text-dark fs-6 hover-title text-one-row story-name"
                            >
                                Linh Vũ Thiên Hạ
                            </Link>
                            </h3>
                            <span className="badge text-bg-info text-light me-1">New</span>
                            <span className="badge text-bg-success text-light me-1">Full</span>
                            <span className="badge text-bg-danger text-light">Hot</span>
                        </div>

                        <div className="story-item-no-image__categories ms-2 d-none d-lg-block">
                            <p className="mb-0">
                            <Link
                                to="/"
                                className="hover-title text-decoration-none text-dark category-name"
                            >
                                Tiên Hiệp,
                            </Link>
                            <Link
                                to="/"
                                className="hover-title text-decoration-none text-dark category-name"
                            >
                                Dị Giới,
                            </Link>
                            <Link
                                to="/"
                                className="hover-title text-decoration-none text-dark category-name"
                            >
                                Huyền Huyễn,
                            </Link>
                            </p>
                        </div>

                        <div className="story-item-no-image__chapters ms-2">
                            <Link to="/" className="hover-title text-decoration-none text-info">
                            Chương 5024
                            </Link>
                        </div>
                        </div>

                        <div className="story-item-no-image">
                            <div className="story-item-no-image__name d-flex align-items-center">
                                <h3 className="me-1 mb-0 d-flex align-items-center">
                                <svg
                                    style={{ width: '10px', marginRight: '5px' }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 320 512"
                                >
                                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                                </svg>
                                <Link
                                    to="/"
                                    className="text-decoration-none text-dark fs-6 hover-title text-one-row story-name"
                                >
                                    Kiếm Động Cửu Thiên
                                </Link>
                                </h3>
                                <span className="badge text-bg-info text-light me-1">New</span>
                                <span className="badge text-bg-success text-light me-1">Full</span>
                                <span className="badge text-bg-danger text-light">Hot</span>
                            </div>

                            <div className="story-item-no-image__categories ms-2 d-none d-lg-block">
                                <p className="mb-0">
                                <Link
                                    to="/"
                                    className="hover-title text-decoration-none text-dark category-name"
                                >
                                    Tiên Hiệp,
                                </Link>
                                <Link
                                    to="/"
                                    className="hover-title text-decoration-none text-dark category-name"
                                >
                                    Kiếm Hiệp,
                                </Link>
                                <Link
                                    to="/"
                                    className="hover-title text-decoration-none text-dark category-name"
                                >
                                    Dị Giới,
                                </Link>
                                </p>
                            </div>

                            <div className="story-item-no-image__chapters ms-2">
                                <Link to="/" className="hover-title text-decoration-none text-info">
                                Chương 1149
                                </Link>
                            </div>
                        </div>

                        <div className="story-item-no-image">
                        <div className="story-item-no-image__name d-flex align-items-center">
                            <h3 className="me-1 mb-0 d-flex align-items-center">
                            <svg
                                style={{ width: '10px', marginRight: '5px' }}
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 320 512"
                            >
                                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                            </svg>
                            <Link
                                to="/"
                                className="text-decoration-none text-dark fs-6 hover-title text-one-row story-name"
                            >
                                Tinh Thần Biến
                            </Link>
                            </h3>
                            <span className="badge text-bg-info text-light me-1">New</span>
                            <span className="badge text-bg-success text-light me-1">Full</span>
                            <span className="badge text-bg-danger text-light">Hot</span>
                        </div>

                        <div className="story-item-no-image__categories ms-2 d-none d-lg-block">
                            <p className="mb-0">
                            <Link
                                to="/"
                                className="hover-title text-decoration-none text-dark category-name"
                            >
                                Tiên Hiệp,
                            </Link>
                            <Link
                                to="/"
                                className="hover-title text-decoration-none text-dark category-name"
                            >
                                Kiếm Hiệp
                            </Link>
                            </p>
                        </div>

                        <div className="story-item-no-image__chapters ms-2">
                            <Link to="/" className="hover-title text-decoration-none text-info">
                            Chương 671
                            </Link>
                        </div>
                        </div>

                        <div className="story-item-no-image">
                        <div className="story-item-no-image__name d-flex align-items-center">
                            <h3 className="me-1 mb-0 d-flex align-items-center">
                            <svg
                                style={{ width: '10px', marginRight: '5px' }}
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 320 512"
                            >
                                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                            </svg>
                            <Link
                                to="/"
                                className="text-decoration-none text-dark fs-6 hover-title text-one-row story-name"
                            >
                                Linh Vũ Thiên Hạ
                            </Link>
                            </h3>
                            <span className="badge text-bg-info text-light me-1">New</span>
                            <span className="badge text-bg-success text-light me-1">Full</span>
                            <span className="badge text-bg-danger text-light">Hot</span>
                        </div>

                        <div className="story-item-no-image__categories ms-2 d-none d-lg-block">
                            <p className="mb-0">
                            <Link
                                to="/"
                                className="hover-title text-decoration-none text-dark category-name"
                            >
                                Tiên Hiệp,
                            </Link>
                            <Link
                                to="/"
                                className="hover-title text-decoration-none text-dark category-name"
                            >
                                Dị Giới,
                            </Link>
                            <Link
                                to="/"
                                className="hover-title text-decoration-none text-dark category-name"
                            >
                                Huyền Huyễn,
                            </Link>
                            </p>
                        </div>

                        <div className="story-item-no-image__chapters ms-2">
                            <Link to="/" className="hover-title text-decoration-none text-info">
                            Chương 5024
                            </Link>
                        </div>
                        </div>

                        <div className="story-item-no-image">
                            <div className="story-item-no-image__name d-flex align-items-center">
                                <h3 className="me-1 mb-0 d-flex align-items-center">
                                <svg
                                    style={{ width: '10px', marginRight: '5px' }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 320 512"
                                >
                                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                                </svg>
                                <Link
                                    to="/"
                                    className="text-decoration-none text-dark fs-6 hover-title text-one-row story-name"
                                >
                                    Kiếm Động Cửu Thiên
                                </Link>
                                </h3>
                                <span className="badge text-bg-info text-light me-1">New</span>
                                <span className="badge text-bg-success text-light me-1">Full</span>
                                <span className="badge text-bg-danger text-light">Hot</span>
                            </div>

                            <div className="story-item-no-image__categories ms-2 d-none d-lg-block">
                                <p className="mb-0">
                                <Link
                                    to="/"
                                    className="hover-title text-decoration-none text-dark category-name"
                                >
                                    Tiên Hiệp,
                                </Link>
                                <Link
                                    to="/"
                                    className="hover-title text-decoration-none text-dark category-name"
                                >
                                    Kiếm Hiệp,
                                </Link>
                                <Link
                                    to="/"
                                    className="hover-title text-decoration-none text-dark category-name"
                                >
                                    Dị Giới,
                                </Link>
                                </p>
                            </div>

                            <div className="story-item-no-image__chapters ms-2">
                                <Link to="/" className="hover-title text-decoration-none text-info">
                                Chương 1149
                                </Link>
                            </div>
                        </div>

                        <div className="story-item-no-image">
                        <div className="story-item-no-image__name d-flex align-items-center">
                            <h3 className="me-1 mb-0 d-flex align-items-center">
                            <svg
                                style={{ width: '10px', marginRight: '5px' }}
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 320 512"
                            >
                                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                            </svg>
                            <Link
                                to="/"
                                className="text-decoration-none text-dark fs-6 hover-title text-one-row story-name"
                            >
                                Tinh Thần Biến
                            </Link>
                            </h3>
                            <span className="badge text-bg-info text-light me-1">New</span>
                            <span className="badge text-bg-success text-light me-1">Full</span>
                            <span className="badge text-bg-danger text-light">Hot</span>
                        </div>

                        <div className="story-item-no-image__categories ms-2 d-none d-lg-block">
                            <p className="mb-0">
                            <Link
                                to="/"
                                className="hover-title text-decoration-none text-dark category-name"
                            >
                                Tiên Hiệp,
                            </Link>
                            <Link
                                to="/"
                                className="hover-title text-decoration-none text-dark category-name"
                            >
                                Kiếm Hiệp
                            </Link>
                            </p>
                        </div>

                        <div className="story-item-no-image__chapters ms-2">
                            <Link to="/" className="hover-title text-decoration-none text-info">
                            Chương 671
                            </Link>
                        </div>
                        </div>

                        <div className="story-item-no-image">
                        <div className="story-item-no-image__name d-flex align-items-center">
                            <h3 className="me-1 mb-0 d-flex align-items-center">
                            <svg
                                style={{ width: '10px', marginRight: '5px' }}
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 320 512"
                            >
                                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                            </svg>
                            <Link
                                to="/"
                                className="text-decoration-none text-dark fs-6 hover-title text-one-row story-name"
                            >
                                Linh Vũ Thiên Hạ
                            </Link>
                            </h3>
                            <span className="badge text-bg-info text-light me-1">New</span>
                            <span className="badge text-bg-success text-light me-1">Full</span>
                            <span className="badge text-bg-danger text-light">Hot</span>
                        </div>

                        <div className="story-item-no-image__categories ms-2 d-none d-lg-block">
                            <p className="mb-0">
                            <Link
                                to="/"
                                className="hover-title text-decoration-none text-dark category-name"
                            >
                                Tiên Hiệp,
                            </Link>
                            <Link
                                to="/"
                                className="hover-title text-decoration-none text-dark category-name"
                            >
                                Dị Giới,
                            </Link>
                            <Link
                                to="/"
                                className="hover-title text-decoration-none text-dark category-name"
                            >
                                Huyền Huyễn,
                            </Link>
                            </p>
                        </div>

                        <div className="story-item-no-image__chapters ms-2">
                            <Link to="/" className="hover-title text-decoration-none text-info">
                            Chương 5024
                            </Link>
                        </div>
                        </div>

                        <div className="story-item-no-image">
                            <div className="story-item-no-image__name d-flex align-items-center">
                                <h3 className="me-1 mb-0 d-flex align-items-center">
                                <svg
                                    style={{ width: '10px', marginRight: '5px' }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 320 512"
                                >
                                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                                </svg>
                                <Link
                                    to="/"
                                    className="text-decoration-none text-dark fs-6 hover-title text-one-row story-name"
                                >
                                    Kiếm Động Cửu Thiên
                                </Link>
                                </h3>
                                <span className="badge text-bg-info text-light me-1">New</span>
                                <span className="badge text-bg-success text-light me-1">Full</span>
                                <span className="badge text-bg-danger text-light">Hot</span>
                            </div>

                            <div className="story-item-no-image__categories ms-2 d-none d-lg-block">
                                <p className="mb-0">
                                <Link
                                    to="/"
                                    className="hover-title text-decoration-none text-dark category-name"
                                >
                                    Tiên Hiệp,
                                </Link>
                                <Link
                                    to="/"
                                    className="hover-title text-decoration-none text-dark category-name"
                                >
                                    Kiếm Hiệp,
                                </Link>
                                <Link
                                    to="/"
                                    className="hover-title text-decoration-none text-dark category-name"
                                >
                                    Dị Giới,
                                </Link>
                                </p>
                            </div>

                            <div className="story-item-no-image__chapters ms-2">
                                <Link to="/" className="hover-title text-decoration-none text-info">
                                Chương 1149
                                </Link>
                            </div>
                        </div>

                        <div className="story-item-no-image">
                        <div className="story-item-no-image__name d-flex align-items-center">
                            <h3 className="me-1 mb-0 d-flex align-items-center">
                            <svg
                                style={{ width: '10px', marginRight: '5px' }}
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 320 512"
                            >
                                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                            </svg>
                            <Link
                                to="/"
                                className="text-decoration-none text-dark fs-6 hover-title text-one-row story-name"
                            >
                                Tinh Thần Biến
                            </Link>
                            </h3>
                            <span className="badge text-bg-info text-light me-1">New</span>
                            <span className="badge text-bg-success text-light me-1">Full</span>
                            <span className="badge text-bg-danger text-light">Hot</span>
                        </div>

                        <div className="story-item-no-image__categories ms-2 d-none d-lg-block">
                            <p className="mb-0">
                            <Link
                                to="/"
                                className="hover-title text-decoration-none text-dark category-name"
                            >
                                Tiên Hiệp,
                            </Link>
                            <Link
                                to="/"
                                className="hover-title text-decoration-none text-dark category-name"
                            >
                                Kiếm Hiệp
                            </Link>
                            </p>
                        </div>

                        <div className="story-item-no-image__chapters ms-2">
                            <Link to="/" className="hover-title text-decoration-none text-info">
                            Chương 671
                            </Link>
                        </div>
                        </div>

                        <div className="story-item-no-image">
                        <div className="story-item-no-image__name d-flex align-items-center">
                            <h3 className="me-1 mb-0 d-flex align-items-center">
                            <svg
                                style={{ width: '10px', marginRight: '5px' }}
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 320 512"
                            >
                                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                            </svg>
                            <Link
                                to="/"
                                className="text-decoration-none text-dark fs-6 hover-title text-one-row story-name"
                            >
                                Linh Vũ Thiên Hạ
                            </Link>
                            </h3>
                            <span className="badge text-bg-info text-light me-1">New</span>
                            <span className="badge text-bg-success text-light me-1">Full</span>
                            <span className="badge text-bg-danger text-light">Hot</span>
                        </div>

                        <div className="story-item-no-image__categories ms-2 d-none d-lg-block">
                            <p className="mb-0">
                            <Link
                                to="/"
                                className="hover-title text-decoration-none text-dark category-name"
                            >
                                Tiên Hiệp,
                            </Link>
                            <Link
                                to="/"
                                className="hover-title text-decoration-none text-dark category-name"
                            >
                                Dị Giới,
                            </Link>
                            <Link
                                to="/"
                                className="hover-title text-decoration-none text-dark category-name"
                            >
                                Huyền Huyễn,
                            </Link>
                            </p>
                        </div>

                        <div className="story-item-no-image__chapters ms-2">
                            <Link to="/" className="hover-title text-decoration-none text-info">
                            Chương 5024
                            </Link>
                        </div>
                        </div>

                        <div className="story-item-no-image">
                            <div className="story-item-no-image__name d-flex align-items-center">
                                <h3 className="me-1 mb-0 d-flex align-items-center">
                                <svg
                                    style={{ width: '10px', marginRight: '5px' }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 320 512"
                                >
                                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                                </svg>
                                <Link
                                    to="/"
                                    className="text-decoration-none text-dark fs-6 hover-title text-one-row story-name"
                                >
                                    Kiếm Động Cửu Thiên
                                </Link>
                                </h3>
                                <span className="badge text-bg-info text-light me-1">New</span>
                                <span className="badge text-bg-success text-light me-1">Full</span>
                                <span className="badge text-bg-danger text-light">Hot</span>
                            </div>

                            <div className="story-item-no-image__categories ms-2 d-none d-lg-block">
                                <p className="mb-0">
                                <Link
                                    to="/"
                                    className="hover-title text-decoration-none text-dark category-name"
                                >
                                    Tiên Hiệp,
                                </Link>
                                <Link
                                    to="/"
                                    className="hover-title text-decoration-none text-dark category-name"
                                >
                                    Kiếm Hiệp,
                                </Link>
                                <Link
                                    to="/"
                                    className="hover-title text-decoration-none text-dark category-name"
                                >
                                    Dị Giới,
                                </Link>
                                </p>
                            </div>

                            <div className="story-item-no-image__chapters ms-2">
                                <Link to="/" className="hover-title text-decoration-none text-info">
                                Chương 1149
                                </Link>
                            </div>
                        </div>

                        <div className="story-item-no-image">
                        <div className="story-item-no-image__name d-flex align-items-center">
                            <h3 className="me-1 mb-0 d-flex align-items-center">
                            <svg
                                style={{ width: '10px', marginRight: '5px' }}
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 320 512"
                            >
                                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                            </svg>
                            <Link
                                to="/"
                                className="text-decoration-none text-dark fs-6 hover-title text-one-row story-name"
                            >
                                Tinh Thần Biến
                            </Link>
                            </h3>
                            <span className="badge text-bg-info text-light me-1">New</span>
                            <span className="badge text-bg-success text-light me-1">Full</span>
                            <span className="badge text-bg-danger text-light">Hot</span>
                        </div>

                        <div className="story-item-no-image__categories ms-2 d-none d-lg-block">
                            <p className="mb-0">
                            <Link
                                to="/"
                                className="hover-title text-decoration-none text-dark category-name"
                            >
                                Tiên Hiệp,
                            </Link>
                            <Link
                                to="/"
                                className="hover-title text-decoration-none text-dark category-name"
                            >
                                Kiếm Hiệp
                            </Link>
                            </p>
                        </div>

                        <div className="story-item-no-image__chapters ms-2">
                            <Link to="/" className="hover-title text-decoration-none text-info">
                            Chương 671
                            </Link>
                        </div>
                        </div>

                        <div className="story-item-no-image">
                        <div className="story-item-no-image__name d-flex align-items-center">
                            <h3 className="me-1 mb-0 d-flex align-items-center">
                            <svg
                                style={{ width: '10px', marginRight: '5px' }}
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 320 512"
                            >
                                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                            </svg>
                            <Link
                                to="/"
                                className="text-decoration-none text-dark fs-6 hover-title text-one-row story-name"
                            >
                                Linh Vũ Thiên Hạ
                            </Link>
                            </h3>
                            <span className="badge text-bg-info text-light me-1">New</span>
                            <span className="badge text-bg-success text-light me-1">Full</span>
                            <span className="badge text-bg-danger text-light">Hot</span>
                        </div>

                        <div className="story-item-no-image__categories ms-2 d-none d-lg-block">
                            <p className="mb-0">
                            <Link
                                to="/"
                                className="hover-title text-decoration-none text-dark category-name"
                            >
                                Tiên Hiệp,
                            </Link>
                            <Link
                                to="/"
                                className="hover-title text-decoration-none text-dark category-name"
                            >
                                Dị Giới,
                            </Link>
                            <Link
                                to="/"
                                className="hover-title text-decoration-none text-dark category-name"
                            >
                                Huyền Huyễn,
                            </Link>
                            </p>
                        </div>

                        <div className="story-item-no-image__chapters ms-2">
                            <Link to="/" className="hover-title text-decoration-none text-info">
                            Chương 5024
                            </Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
</div>
        </div>

        <div className="col-12 col-md-4 col-lg-3 sticky-md-top">
          <div className="row">
            <div className="col-12">
              <div className="section-list-category bg-light p-2 rounded card-custom">
                <div className="head-title-global mb-2">
                  <div className="col-12 col-md-12 head-title-global__left">
                    <h2 className="mb-0 border-bottom border-secondary pb-1">
                      <span
                        className="d-block text-decoration-none text-dark fs-4"
                        title="Thể loại truyện">
                        Thể loại truyện
                      </span>
                    </h2>
                  </div>
                </div>
                <div className="row">
                  <ul className="list-category">
                    <li>
                      <Link to="/" className="text-decoration-none text-dark hover-title">
                        Ngôn Tình
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-decoration-none text-dark hover-title">
                        Trọng Sinh
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-decoration-none text-dark hover-title">
                        Cổ Đại
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-decoration-none text-dark hover-title">
                        Tiên Hiệp
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-decoration-none text-dark hover-title">
                        Ngược
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-decoration-none text-dark hover-title">
                        Khác
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-decoration-none text-dark hover-title">
                        Dị Giới
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-decoration-none text-dark hover-title">
                        Huyền Huyễn
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-decoration-none text-dark hover-title">
                        Xuyên Không
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-decoration-none text-dark hover-title">
                        Sủng
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-decoration-none text-dark hover-title">
                        Cung Đấu
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-decoration-none text-dark hover-title">
                        Gia Đấu
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-decoration-none text-dark hover-title">
                        Điền Văn
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-decoration-none text-dark hover-title">
                        Đô Thị
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-decoration-none text-dark hover-title">
                        Truyện Teen
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-decoration-none text-dark hover-title">
                        Hài Hước
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-decoration-none text-dark hover-title">
                        Kiếm Hiệp
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-decoration-none text-dark hover-title">
                        Đông Phương
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-decoration-none text-dark hover-title">
                        Trinh Thám
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-decoration-none text-dark hover-title">
                        Quan Trường
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-decoration-none text-dark hover-title">
                        Linh Dị
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-decoration-none text-dark hover-title">
                        Đam Mỹ
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-decoration-none text-dark hover-title">
                        Quân Sự
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-decoration-none text-dark hover-title">
                        Khoa Huyễn
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-decoration-none text-dark hover-title">
                        Mạt Thế
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-decoration-none text-dark hover-title">
                        Xuyên Nhanh
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-decoration-none text-dark hover-title">
                        Hệ Thống
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-decoration-none text-dark hover-title">
                        Nữ Cường
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryNew;
