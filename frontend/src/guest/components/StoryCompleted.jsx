import React from 'react';
import { Link } from 'react-router-dom';

const StoryCompleted = () => (
    <div className="section-stories-full mb-3 mt-3">
        <div className="container">
            <div className="row">
                <div className="head-title-global d-flex justify-content-between mb-2">
                    <div className="col-12 col-md-4 head-title-global__left d-flex">
                        <h2 className="me-2 mb-0 border-bottom border-secondary pb-1">
                            <span className="d-block text-decoration-none text-dark fs-4 title-head-name"
                                title="Truyện đã hoàn thành">Truyện đã hoàn thành</span>
                        </h2>
                        {/* <i className="fa-solid fa-fire-flame-curved"></i> */}
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="section-stories-full__list">
                        <div className="story-item-full text-center">
                            <Link to="#" className="d-block story-item-full__image">
                                <img src="/assets/img/tu_cam.jpg" alt="Tự Cẩm" className="img-fluid w-100"
                                    width="150" height="230" loading="lazy" />
                            </Link>
                            <h3 className="fs-6 story-item-full__name fw-bold text-center mb-0">
                                <Link to="#" className="text-decoration-none text-one-row story-name">
                                    Tự Cẩm
                                </Link>
                            </h3>
                            <span className="story-item-full__badge badge text-bg-success">Full - 836 chương</span>
                        </div>
                        <div className="story-item-full text-center">
                            <Link to="#" className="d-block story-item-full__image">
                                <img src="/assets/img/ngao_the_dan_than.jpg" alt="Ngạo Thế Đan Thần"
                                    className="img-fluid w-100" width="150" height="230" loading="lazy" />
                            </Link>
                            <h3 className="fs-6 story-item-full__name fw-bold text-center mb-0">
                                <Link to="#" className="text-decoration-none text-one-row story-name">
                                    Ngạo Thế Đan Thần
                                </Link>
                            </h3>
                            <span className="story-item-full__badge badge text-bg-success">Full - 3808 chương</span>
                        </div>
                        <div className="story-item-full text-center">
                            <Link to="#" className="d-block story-item-full__image">
                                <img src="/assets/img/nang_khong_muon_lam_hoang_hau.jpg"
                                    alt="Nàng Không Muốn Làm Hoàng Hậu" className="img-fluid w-100" width="150"
                                    height="230" loading="lazy" />
                            </Link>
                            <h3 className="fs-6 story-item-full__name fw-bold text-center mb-0">
                                <Link to="#" className="text-decoration-none text-one-row story-name">
                                    Nàng Không Muốn Làm Hoàng Hậu
                                </Link>
                            </h3>
                            <span className="story-item-full__badge badge text-bg-success">Full - 80 chương</span>
                        </div>
                        <div className="story-item-full text-center">
                            <Link to="#" className="d-block story-item-full__image">
                                <img src="/assets/img/kieu_sung_vi_thuong.jpg" alt="Kiều Sủng Vi Thượng"
                                    className="img-fluid w-100" width="150" height="230" loading="lazy" />
                            </Link>
                            <h3 className="fs-6 story-item-full__name fw-bold text-center mb-0">
                                <Link to="#" className="text-decoration-none text-one-row story-name">
                                    Kiều Sủng Vi Thượng
                                </Link>
                            </h3>
                            <span className="story-item-full__badge badge text-bg-success">Full - 81 chương</span>
                        </div>
                        <div className="story-item-full text-center">
                            <Link to="#" className="d-block story-item-full__image">
                                <img src="/assets/img/linh_vu_thien_ha.jpg" alt="Linh Vũ Thiên Hạ"
                                    className="img-fluid w-100" width="150" height="230" loading="lazy" />
                            </Link>
                            <h3 className="fs-6 story-item-full__name fw-bold text-center mb-0">
                                <Link to="#" className="text-decoration-none text-one-row story-name">
                                    Linh Vũ Thiên Hạ
                                </Link>
                            </h3>
                            <span className="story-item-full__badge badge text-bg-success">Full - 5024 chương</span>
                        </div>
                        <div className="story-item-full text-center">
                            <Link to="#" className="d-block story-item-full__image">
                                <img src="/assets/img/anh_dao_ho_phach.jpg" alt="Anh Đào Hổ Phách"
                                    className="img-fluid w-100" width="150" height="230" loading="lazy" />
                            </Link>
                            <h3 className="fs-6 story-item-full__name fw-bold text-center mb-0">
                                <Link to="#" className="text-decoration-none text-one-row story-name">
                                    Anh Đào Hổ Phách
                                </Link>
                            </h3>
                            <span className="story-item-full__badge badge text-bg-success">Full - 93 chương</span>
                        </div>
                        <div className="story-item-full text-center">
                            <Link to="#" className="d-block story-item-full__image">
                                <img src="/assets/img/cuoi_truoc_yeu_sau_mong_tieu_nhi.jpg"
                                    alt="Cưới Trước Yêu Sau - Mộng Tiêu Nhị" className="img-fluid w-100" width="150"
                                    height="230" loading="lazy" />
                            </Link>
                            <h3 className="fs-6 story-item-full__name fw-bold text-center mb-0">
                                <Link to="#" className="text-decoration-none text-one-row story-name">
                                    Cưới Trước Yêu Sau - Mộng Tiêu Nhị
                                </Link>
                            </h3>
                            <span className="story-item-full__badge badge text-bg-success">Full - 96 chương</span>
                        </div>
                        <div className="story-item-full text-center">
                            <Link to="#" className="d-block story-item-full__image">
                                <img src="/assets/img/me_dam.jpg" alt="Mê Đắm" className="img-fluid w-100"
                                    width="150" height="230" loading="lazy" />
                            </Link>
                            <h3 className="fs-6 story-item-full__name fw-bold text-center mb-0">
                                <Link to="#" className="text-decoration-none text-one-row story-name">
                                    Mê Đắm
                                </Link>
                            </h3>
                            <span className="story-item-full__badge badge text-bg-success">Full - 118 chương</span>
                        </div>
                        <div className="story-item-full text-center">
                            <Link to="#" className="d-block story-item-full__image">
                                <img src="/assets/img/khong_phu_the_duyen.jpg" alt="Không Phụ Thê Duyên"
                                    className="img-fluid w-100" width="150" height="230" loading="lazy" />
                            </Link>
                            <h3 className="fs-6 story-item-full__name fw-bold text-center mb-0">
                                <Link to="#" className="text-decoration-none text-one-row story-name">
                                    Không Phụ Thê Duyên
                                </Link>
                            </h3>
                            <span className="story-item-full__badge badge text-bg-success">Full - 177 chương</span>
                        </div>
                        <div className="story-item-full text-center">
                            <Link to="#" className="d-block story-item-full__image">
                                <img src="/assets/img/diu_dang_tan_xuong.jpg" alt="Dịu Dàng Tận Xương"
                                    className="img-fluid w-100" width="150" height="230" loading="lazy" />
                            </Link>
                            <h3 className="fs-6 story-item-full__name fw-bold text-center mb-0">
                                <Link to="#" className="text-decoration-none text-one-row story-name">
                                    Dịu Dàng Tận Xương
                                </Link>
                            </h3>
                            <span className="story-item-full__badge badge text-bg-success">Full - 108 chương</span>
                        </div>
                        <div className="story-item-full text-center">
                            <Link to="#" className="d-block story-item-full__image">
                                <img src="/assets/img/vo_chong_sieu_sao_hoi_ngot.jpg"
                                    alt="Vợ Chồng Siêu Sao Hơi Ngọt" className="img-fluid w-100" width="150"
                                    height="230" loading="lazy" />
                            </Link>
                            <h3 className="fs-6 story-item-full__name fw-bold text-center mb-0">
                                <Link to="#" className="text-decoration-none text-one-row story-name">
                                    Vợ Chồng Siêu Sao Hơi Ngọt
                                </Link>
                            </h3>
                            <span className="story-item-full__badge badge text-bg-success">Full - 100 chương</span>
                        </div>
                        <div className="story-item-full text-center">
                            <Link to="#" className="d-block story-item-full__image">
                                <img src="/assets/img/that_u_that_u_phai_la_hong_phai_xanh_tham.jpg"
                                    alt="Thật Ư? Thật Ư? Phải Là Hồng Phai Xanh Thắm" className="img-fluid w-100"
                                    width="150" height="230" loading="lazy" />
                            </Link>
                            <h3 className="fs-6 story-item-full__name fw-bold text-center mb-0">
                                <Link to="#" className="text-decoration-none text-one-row story-name">
                                    Thật Ư? Thật Ư? Phải Là Hồng Phai Xanh Thắm
                                </Link>
                            </h3>
                            <span className="story-item-full__badge badge text-bg-success">Full - 229 chương</span>
                        </div>
                        <div className="story-item-full text-center">
                            <Link to="#" className="d-block story-item-full__image">
                                <img src="/assets/img/thien_huong_nguoi_mu_liec_mat_dua_tinh.jpg"
                                    alt="Thiên Hướng Người Mù, Liếc Mắt Đưa Tình" className="img-fluid w-100"
                                    width="150" height="230" loading="lazy" />
                            </Link>
                            <h3 className="fs-6 story-item-full__name fw-bold text-center mb-0">
                                <Link to="#" className="text-decoration-none text-one-row story-name">
                                    Thiên Hướng Người Mù, Liếc Mắt Đưa Tình
                                </Link>
                            </h3>
                            <span className="story-item-full__badge badge text-bg-success">Full - 70 chương</span>
                        </div>
                        <div className="story-item-full text-center">
                            <Link to="#" className="d-block story-item-full__image">
                                <img src="/assets/img/hat_de_va_chanel.jpg" alt="Hạt Dẻ Và Chanel"
                                    className="img-fluid w-100" width="150" height="230" loading="lazy" />
                            </Link>
                            <h3 className="fs-6 story-item-full__name fw-bold text-center mb-0">
                                <Link to="#" className="text-decoration-none text-one-row story-name">
                                    Hạt Dẻ Và Chanel
                                </Link>
                            </h3>
                            <span className="story-item-full__badge badge text-bg-success">Full - 6 chương</span>
                        </div>
                        <div className="story-item-full text-center">
                            <Link to="#" className="d-block story-item-full__image">
                                <img src="/assets/img/em_anh_va_chung_ta.jpg" alt="Em, Anh Và Chúng Ta"
                                    className="img-fluid w-100" width="150" height="230" loading="lazy" />
                            </Link>
                            <h3 className="fs-6 story-item-full__name fw-bold text-center mb-0">
                                <Link to="#" className="text-decoration-none text-one-row story-name">
                                    Em, Anh Và Chúng Ta
                                </Link>
                            </h3>
                            <span className="story-item-full__badge badge text-bg-success">Full - 105 chương</span>
                        </div>
                        <div className="story-item-full text-center">
                            <Link to="#" className="d-block story-item-full__image">
                                <img src="/assets/img/me_vo_khong_loi_ve.jpg" alt="Mê Vợ Không Lối Về"
                                    className="img-fluid w-100" width="150" height="230" loading="lazy" />
                            </Link>
                            <h3 className="fs-6 story-item-full__name fw-bold text-center mb-0">
                                <Link to="#" className="text-decoration-none text-one-row story-name">
                                    Mê Vợ Không Lối Về
                                </Link>
                            </h3>
                            <span className="story-item-full__badge badge text-bg-success">Full - 1845 chương</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default StoryCompleted;
