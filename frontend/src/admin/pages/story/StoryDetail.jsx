import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getStoryById } from '../../services/StoryService';

const StoryDetail = () => {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const response = await getStoryById(id);
        setStory(response.data);
      } catch (error) {
        console.error('Error fetching story details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStory();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  if (!story) return <div>Story not found.</div>;

  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Chi tiết Truyện</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/admin">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/admin/liststory">Truyện</Link></li>
            <li className="breadcrumb-item active">Chi Tiết</li>
          </ol>
        </nav>
      </div>

      <section className="section">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Chi tiết truyện : {story.title}</h5>
                <div className='row mb-3' style={{ display: 'flex', alignItems: 'center' }}>
                  <div className='col-sm-8'>
                    <p><strong>Tên Truyện:</strong> {story.title}</p>
                    <p><strong>Tác giả:</strong> {story.author}</p>
                    <p><strong>Người Đăng:</strong> {story.userName}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                      <p style={{ margin: 0 }}><strong>Loại:</strong> {story.typeName}</p>
                      <p style={{ margin: 0 }}><strong>Thể Loại:</strong> {story.genreName}</p>
                      <p style={{ margin: 0 }}><strong>Trạng Thái:</strong> {story.statusName}</p>
                    </div>
                  </div>

                  <div className='col-sm-4'>
                    <img
                      src={story.storyImg}
                      alt={story.title}
                      style={{ width: '50%', height: 'auto', borderRadius: '8px' }}
                    />
                  </div>
                </div>
                <p><strong>Description:</strong></p>
                <div style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '4px' }} dangerouslySetInnerHTML={{ __html: story.description }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default StoryDetail;
