import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';
import { getListStory } from '../../services/UserService';
import { DataTable } from 'simple-datatables';

const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
  };

const ListStoryUser = () => {
  const [stories, setStory] = useState([]);
  const tableRef = useRef(null);
  const token = localStorage.getItem('authToken'); // Lấy token từ Local Storage
  const userId = token ? jwtDecode(token).userId : null;

  useEffect(() => {
    getListStory(userId).then((response) => {
      setStory(response.data);
    }).catch(error => {
      console.error(error);
    });
  }, [userId]);


  useEffect(() => {
    if (tableRef.current && stories.length > 0) {
      new DataTable(tableRef.current, {
        perPage: 20,
        perPageSelect: [20, 30, 50, 100],
        labels: {
            placeholder: "Tìm kiếm...", // Placeholder text in the search input
            perPage: "Số mục mỗi trang", // Entries per page
            noRows: "Không tìm thấy mục nào", // Message shown when there are no matching entries
            info: "Hiển thị {start} đến {end} của {rows} mục", // Information text
          },
      });
    }
  }, [stories]);

  return (
      <main className='add-story'>
        <div className="pagetitle container" style={{paddingTop:'20px',background:'rgb(90, 90, 95)'}}>
          <h1>Danh Sách Truyện</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active">Truyện</li>
            </ol>
          </nav>
        </div>
        <section className="section container">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div style={{marginTop:'20px'}}>
                    <Link to={"/dang-truyen/them-truyen"}>
                      <button className="btn btn-primary">Thêm truyện</button>
                    </Link>
                    <table ref={tableRef} className="table datatable">
                      <thead>
                        <tr>
                          <th>Truyện</th>
                          <th>Tác giả</th>
                          <th>Thể loại</th>
                          <th>Trạng thái</th>
                          <th>Thời Gian</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {stories.length > 0 ? (
                          stories.map(story => (
                            <tr key={story.id}>
                              <td className='story-title'>{story.title}</td>
                              <td>{story.author}</td>
                              <td>{story.genreName}</td>
                              <td>{story.statusName}</td>
                              <td>{formatDate(story.createdAt)}</td>
                              <td>
                                {/* <Link to={`/admin/story/${story.id}`}>
                                  <button className="btn btn-info">Xem</button>
                                </Link>&nbsp;&nbsp; */}
                                <Link to={`/dang-truyen/sua-truyen/${story.id}`}>
                                  <button className="btn btn-warning">Sửa</button>
                                </Link>&nbsp;&nbsp;
                                <Link to={`/dang-truyen/sua-truyen/danh-sach-chuong/${story.id}`}>
                                  <button className="btn btn-success">Chương truyện</button>
                                </Link>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="7">Chưa đăng truyện nào</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}

export default ListStoryUser;
