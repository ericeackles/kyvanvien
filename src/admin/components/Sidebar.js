import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";

// import "./style.css"

const Sidebar = (props) => {

    // const { user } = useContext(UserContext);
    const user = useSelector(state => state.user.account);

    return(
        <div id="sidebar" className="sidebar">

            <ul className="sidebar-nav" id="sidebar-nav">

                <li className="nav-item">
                    <Link to="/admin" className="nav-link ">
                    <i className="bi bi-house-door"></i>
                    <span>Dashboard</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="" className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse">
                        <i className="bi bi-menu-button-wide"></i><span>Quản lý Truyện</span><i className="bi bi-chevron-down ms-auto"></i>
                    </Link>
                    <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                    <li>
                        <Link to="/admin/liststory">
                        <i className="bx bxs-file"></i><span>Danh Sách Truyện</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/listgenre">
                        <i className="bi bi-grid "></i><span>Thể Loại</span>
                        </Link>
                    </li>
                    </ul>
                </li>

                <li className="nav-item">
                    <Link to="" className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse">
                        <i className="bi bi-journal-text"></i><span>Thành Viên </span><i className="bi bi-chevron-down ms-auto"></i>
                    </Link>
                    <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li>
                            <Link to="/admin/listuser">
                                <i className="bi bi-person-lines-fill"></i><span>Danh sách thành viên</span>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="nav-heading">Pages</li>

                <li className="nav-item">
                    <Link to="/admin/profile" className="nav-link collapsed">
                        <i className="bi bi-person"></i>
                        <span>Profile</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="pages-faq.html">
                    <i className="bi bi-question-circle"></i>
                    <span>F.A.Q</span>
                    </a>
                </li>

                <li className="nav-item">
                    <Link className="nav-link collapsed" to="">
                    <i className="bi bi-envelope"></i>
                    <span>Comments</span>
                    </Link>
                </li>
                
                <li className="nav-item">
                { user && user.auth === true
                ?   <Link className="nav-link collapsed">
                    <i className="bi bi-envelope"></i>
                    <span>Logout</span>
                    </Link>
                : 
                    <Link className="nav-link collapsed" to="/admin/login">
                    <i className="bi bi-envelope"></i>
                    <span>Login</span>
                    </Link>
                }
                    
                </li>

            </ul>

        </div>
    )
}
export default Sidebar