import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { listHistory, updateUserProgressStatusToDeleted,saveOrUpdateUserProgress  } from '../services/UserService';
import { timeSince } from '../../utils/timeUtils';
import { getStoryById } from '../services/HomeStoryService';
import { Link } from 'react-router-dom';


const ReadingHistory = () => {
  const [history, setHistory] = useState([]);
  const [storyDetails, setStoryDetails] = useState([]);
  const token = localStorage.getItem('authToken'); // Lấy token từ Local Storage
  const userId = token ? jwtDecode(token).userId : null; // Giải mã token để lấy userId
  const LIMIT = 5;

  useEffect(() => {
    const fetchHistory = async () => {
      if (!userId) return; // Nếu không có userId, không thực hiện gọi API
      try {
        const response = await listHistory(userId);
        setHistory(response.data.slice(0, LIMIT));

         // Initialize an array to store chapterCount and slug for each story
         const details = [];

         for (let item of response.data) {
           const storyId = item.storyId;
           const res = await getStoryById(storyId);
           details.push({
             storyId: storyId,
             chapterCount: res.data.chapterCount,
             slug: res.data.slug
           });
         }
 
         setStoryDetails(details);
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    };

    fetchHistory();
  }, [userId]);

  const handleDeleteProgress = async (storyId, slug, chapterNumber) => {
    try {
      await updateUserProgressStatusToDeleted(userId, slug, chapterNumber);
      setHistory((prevHistory) => prevHistory.filter(item => item.storyId !== storyId));
    } catch (error) {
      console.error("Error updating progress status:", error);
    }
  };

  const handleUpdateProgress = async (storyId, slug, chapterNumber) => {
    try {
      await saveOrUpdateUserProgress(userId, slug, chapterNumber);
      setHistory(prevHistory => prevHistory.map(item =>
        item.storyId === storyId ? { ...item, chapterNumber } : item
      ));
    } catch (error) {
      console.error("Error updating progress:", error);
    }
  };

  // Kiểm tra nếu không có token (người dùng chưa đăng nhập), không hiển thị component
  if (!token) {
    return null;
  }

  return (
    <div className="home-reading-list">
      <div className="home-header story-name">
        <h2 >TRUYỆN VỪA ĐỌC</h2>
        <span className="home-arrow">»</span>
      </div>
      <div className=''>
      {history.map((item, index) => {
        const details = storyDetails.find(detail => detail.storyId === item.storyId) || {};

        return (
          <div key={index} className="home-story grid grid-cols-12 gap-1 py-2 px-3">
            <div className='yy hidden md:grid md:col-span-1 story-name'>
              <span className="text-decoration-none text-dark fs-6 hover-title text-one-row story-name">
                {timeSince(new Date(item.lastRead))}
              </span>
            </div>
            <div className='hh col-span-12 sm:col-span-9 md:col-span-8 sm:truncate story-name text-dark'>
              <Link to={`/truyen/${details.slug}/chuong/${item.chapterNumber}`} className='text-dark'
              
              onClick={() => handleUpdateProgress(item.storyId, details.slug, item.chapterNumber)}
              >
                <span className="home-title font-semibold text text-dark text-decoration-none text-dark fs-6 hover-title text-one-row story-name">
                  {item.storyTitle}
                </span>
              </Link>
            </div>
            <div className='col-span-11 sm:col-span-2' style={{width:'10%'}}>
              <span className="home-status text-gray-500 sm:text-xs truncate story-name">
                Đã đọc: {item.chapterNumber}/{details.chapterCount}
              </span>
            </div>
            <div className='col-span-1 justify-self-end'>
                <button 
                  className="outline outline-1 px-2 text-primary disabled:bg-gray-500 rounded" 
                  onClick={() => handleDeleteProgress(item.storyId, details.slug, item.chapterNumber)}
                >
                <span className="text-xs">x</span>
              </button>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  )
}

export default ReadingHistory;
