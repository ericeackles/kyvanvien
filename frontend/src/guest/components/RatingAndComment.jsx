import React, { useState } from 'react';
import Slider from 'react-slider'; // Thư viện slider

const RatingAndComment = ({ onSubmitRating, onSubmitComment }) => {
  const [activeTab, setActiveTab] = useState('rating'); // Tab hiện tại: 'rating' hoặc 'comment'
  const [rating, setRating] = useState(3); // Mặc định là 3 điểm
  const [comment, setComment] = useState('');

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleRatingSubmit = () => {
    if (onSubmitRating) {
      console.log('Submitting rating:', rating);
      onSubmitRating(rating);
    }
    setRating(3); // Reset điểm sau khi gửi
  };

  const handleCommentSubmit = () => {
    if (onSubmitComment) {
      console.log('Submitting comment:', comment);
      onSubmitComment(comment);
    }
    setComment(''); // Reset bình luận sau khi gửi
  };

  return (
    <div className="container">
      <div className="row top-ratings"> 
        <div className="col-12 top-ratings__tab mb-2">
          <div className="list-group d-flex flex-row" id="list-tab" role="tablist">
            <button
              className={`list-group-item list-group-item-action ${activeTab === 'rating' ? 'active' : ''}`}
              onClick={() => setActiveTab('rating')}
              role="tab"
            >
              Đánh Giá
            </button>
            <button
              className={`list-group-item list-group-item-action ${activeTab === 'comment' ? 'active' : ''}`}
              onClick={() => setActiveTab('comment')}
              role="tab"
            >
              Bình Luận
            </button>
          </div>
        </div>
      </div>

      <div className="tab-content">
        {activeTab === 'rating' && (
          <div className="tab-pane fade show active">
            <div className="rating-section">
              <h4>Chấm điểm nội dung: {rating}</h4>
              <Slider
                min={3}
                max={5}
                step={0.1}
                value={rating}
                onChange={handleRatingChange}
                className="slider"
              />
              <div className="button-container">
                <button onClick={handleRatingSubmit} className="submit-button">
                    Gửi Đánh Giá
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'comment' && (
          <div className="tab-pane fade show active">
            <div className="comment-section">
              <h3>Your Comment:</h3>
              <textarea
                placeholder="Add your comment..."
                value={comment}
                onChange={handleCommentChange}
                rows={4}
                cols={50}
              />
              <div className="button-container">
                <button onClick={handleCommentSubmit} className="submit-button">
                Gửi Bình Luận
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RatingAndComment;
