
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { listGenre } from '../services/CategoryService';



const ClientHeader = () => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const genresResponse = await listGenre();
                setGenres(genresResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
  return (
      <>
        <header className="header d-none d-lg-block">
        <nav className="navbar navbar-expand-lg navbar-dark header__navbar p-md-0">
            <div className="container">
                <Link className="navbar-brand" to="/">
                <img src="/assets/img/logo_text.png" alt="Logo Suu Truyen" className="img-fluid" style={{ width: '200px' }} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Thể loại
                        </Link>
                            <ul className="dropdown-menu dropdown-menu-custom">
                                {genres.map(genre => (
                                <li key={genre.genreId}>
                                    
                                    <Link to={`/category/${genre.slug}`} className="dropdown-item" >
                                    {genre.genreName}
                                    </Link>
                                </li>
                                ))}
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Theo số chương
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-custom">
                            <li><Link className="dropdown-item" to="/chapter/under-100">Dưới 100</Link></li>
                            <li><Link className="dropdown-item" to="/chapter/100-500">100 - 500</Link></li>
                            <li><Link className="dropdown-item" to="/chapter/500-1000">500 - 1000</Link></li>
                            <li><Link className="dropdown-item" to="/chapter/over-1000">Trên 1000</Link></li>
                        </ul>
                        </li>
                    </ul>

                    <div className="form-check form-switch me-3 d-flex align-items-center">
                        <label className="form-check-label">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-brightness-high" viewBox="0 0 16 16" style={{ fill: '#fff' }}>
                            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
                        </svg>
                        </label>
                        <input className="form-check-input theme_mode" type="checkbox" style={{ transform: 'scale(1.3)', marginLeft: '12px', marginRight: '12px' }} />
                        <label className="form-check-label">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 384 512" style={{ fill: '#fff' }}>
                            <path d="M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0c-.1 0-.2 0-.3 0c-5.3 0-10.5-1.8-14.8-5.1c-2.4-2.1-4.5-4.5-6.2-7.2c-2.2-3.4-3.6-7.1-4.5-10.8c-4.7 1.3-9.5 1.8-14.3 1.8c-14.5 0-26.4-11.8-26.4-26.4c0-4.4 .9-8.8 2.7-12.7c-3.8-1.2-7.6-2.5-11.2-3.9c-5.7-2.3-10.5-5.5-14.5-9.3c-2.5-2.5-4.9-5.1-7.2-8c-1.5-1.6-2.8-3.2-4.1-4.8c-1.5-1.9-3-3.8-4.5-5.8c-3.3-4.8-5.5-9.9-6.7-15.3c-3.4 0-6.7 .6-10 .8c-5.6 0-10.4-4.7-10.4-10.4c0-5.3 4.4-9.6 9.6-9.6c1.7 0 3.3 .3 4.9 .6c3.1 .6 6.2 1.7 9.1 3.1c-2.2-5.1-5.8-9.5-10.3-13.3c-5.6-4.1-11.9-7.3-18.6-10.4c-5.3-2.6-10.6-4.9-16.3-6.6c-5.3-1.7-10.7-2.6-16.1-2.6c-18.6 0-33.8 15.1-33.8 33.8c0 18.6 15.1 33.8 33.8 33.8c2.2 0 4.3-.2 6.4-.6c4.8-1.6 9.5-4.1 13.7-7.2c3.5 6.8 7.4 13.1 12.2 19c4.4 5.6 9.2 11.1 14.5 16.1c-3.1 3.3-6.2 6.6-9.1 10.2c-3.8 4.6-7.1 9.7-9.8 15.1c-2.3 5.3-3.7 11-3.7 16.9c0 17.9 14.6 32.4 32.4 32.4c5.1 0 10.1-1.3 14.7-3.5c4.5 2.3 9.5 3.5 14.7 3.5c3.3 0 6.5-.7 9.5-2c5.5-2 10.6-5.1 15.1-8.9c4.5-3.7 8.4-8.1 11.5-12.9c3.2-4.7 5.7-9.9 7.5-15.3c1.8-5.3 2.8-10.8 2.8-16.4c0-20.6-16.7-37.4-37.4-37.4c-4.4 0-8.7 .7-12.8 2c-2.1 1.5-4.4 2.5-6.8 3c-1.7 .4-3.3 .7-5 .7c-6.1 0-11-4.9-11-11c0-6.1 4.9-11 11-11c1.1 0 2.3 .2 3.3 .5c3.3 .8 6.6 2.1 9.6 3.9c4.6 2.7 8.6 6.1 12.4 9.8c1.3 1.2 2.6 2.5 3.9 3.8c1.4 1.5 2.8 3.1 4.2 4.7c4.1 4.4 8.7 8.6 13.8 12.3c2.4 1.7 4.8 3.4 7.3 5.1c3.3 2.3 6.7 4.5 10.2 6.3c3.4 1.8 6.9 3.1 10.6 4.1c4.2 1 8.5 1.5 12.8 1.5c18.7 0 33.9-15.2 33.9-33.9s-15.2-33.9-33.9-33.9z"></path>
                        </svg>
                        </label>
                    </div>
                    <form className="d-flex header__form-search" action="" method="GET">
                            <input className="form-control search-story" type="text" placeholder="Tìm kiếm" name="key_word"
                                /> 
                                {/* value="" */}
                            <div className="col-12 search-result shadow no-result d-none">
                                <div className="card text-white bg-light">
                                    <div className="card-body p-0">
                                        <ul className="list-group list-group-flush d-none">
                                            <li className="list-group-item">
                                                <Link href="#" className="text-dark hover-title">Tự cẩm</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <button className="btn" type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                                    viewBox="0 0 512 512">
                                    <path
                                        d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z">
                                    </path>
                                </svg>

                            </button>
                    </form>
                </div>
            </div>
        </nav>
        </header>

        <div className="header-mobile d-sm-block d-lg-none">
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <img
                src="/assets/img/logo_text.png"
                alt="Logo Suu Truyen"
                className="img-fluid"
                style={{ width: '200px' }}
                />
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasDarkNavbar"
                aria-controls="offcanvasDarkNavbar"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div
                className="offcanvas offcanvas-end text-bg-dark w-75"
                tabIndex="-1"
                id="offcanvasDarkNavbar"
                aria-labelledby="offcanvasDarkNavbarLabel"
            >
                <div className="offcanvas-header">
                <img
                    src="/assets/img/logo_text.png"
                    alt="Logo Suu Truyen"
                    className="img-fluid"
                    style={{ width: '200px' }}
                />
                <button
                    type="button"
                    className="btn-close btn-close-white"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                ></button>
                </div>
                <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 mb-3">
                    <li className="nav-item dropdown">
                    <Link
                        className="nav-link dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Thể loại
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-custom">
                        <li>
                        <Link className="dropdown-item" to="#">
                            Mạt Thế
                        </Link>
                        </li>
                        <li>
                        <Link className="dropdown-item" to="#">
                            Xuyên Nhanh
                        </Link>
                        </li>
                        <li>
                        <Link className="dropdown-item" to="#">
                            Hệ Thống
                        </Link>
                        </li>
                        <li>
                        <Link className="dropdown-item" to="#">
                            Nữ Cường
                        </Link>
                        </li>
                    </ul>
                    </li>
                </ul>

                <div className="form-check form-switch d-flex align-items-center mb-3 p-0">
                    <label className="form-check-label">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-brightness-high"
                        viewBox="0 0 16 16"
                        style={{ fill: '#fff' }}
                    >
                        <path
                        d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
                        />
                    </svg>
                    </label>
                    <input
                    className="form-check-input theme_mode"
                    type="checkbox"
                    style={{
                        transform: 'scale(1.3)',
                        marginLeft: '12px',
                        marginRight: '12px'
                    }}
                    />
                    <label className="form-check-label">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 384 512"
                        style={{ fill: '#fff' }}
                    >

                    </svg>
                    </label>
                </div>

                <form className="d-flex header__form-search" action="" method="GET">
                    <input
                    className="form-control search-story"
                    type="text"
                    placeholder="Tìm kiếm"
                    name="key_word"
                    
                    />
                    {/* value="" */}
                    <div className="col-12 search-result shadow no-result d-none">
                    <div className="card text-white bg-light">
                        <div className="card-body p-0">
                        <ul className="list-group list-group-flush d-none">
                            <li className="list-group-item">
                            <Link className="text-dark hover-title" to="#">
                                Tự cẩm
                            </Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>

                    <button className="btn" type="submit">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 512 512"
                    >
                        <path
                        d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                        />
                    </svg>
                    </button>
                </form>
                </div>
            </div>
            </div>
        </nav>
        </div>

        <div className="bg-light header-bottom">
        <div className="container py-1">
            <p className="mb-0">Đọc truyện online, đọc truyện chữ, truyện full, truyện hay. Tổng hợp đầy đủ và cập nhật liên
                tục.</p>
        </div>
        </div>
      </>
  );
};

export default ClientHeader;
