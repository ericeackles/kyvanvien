import { useState, useEffect, useCallback } from 'react';
import { getStoryBySlug } from '../services/HomeStoryService';
import { addView } from '../services/ViewService';
import {rateStory} from '../services/RatingService'
import { getUserProgressByStory, saveOrUpdateUserProgress, getUserFollow, followStory, unfollowStory, likeStory, unlikeStory, checkIfLiked } from '../services/UserService';
import {jwtDecode} from 'jwt-decode';
import { toast } from "react-toastify";

export const useStoryDetail = (slug) => {
    const [story, setStory] = useState(null);
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem('authToken');
    const userId = token ? jwtDecode(token).userId : null;
    const [userProgress, setUserProgress] = useState(null);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    const [lastRatingTime, setLastRatingTime] = useState(0); // Thời gian gửi đánh giá gần nhất
    const ratingCooldown = 60 * 1000; // 1 phút trong mili giây


    useEffect(() => {
        const fetchStory = async () => {
            try {
                const response = await getStoryBySlug(slug);
                setStory(response.data);

                if (userId) {
                    const { id: storyId } = response.data;

                    const progressResponse = await getUserProgressByStory(userId, storyId);
                    setUserProgress(progressResponse.data);

                    const followResponse = await getUserFollow(userId, storyId, null);
                    setIsBookmarked(followResponse.data);

                    const likeResponse = await checkIfLiked(userId, storyId);
                    setIsLiked(likeResponse.data);

                    // const ratingResponse = await getRating(userId, storyId);
                    // setUserRating(ratingResponse.data);
                }
            } catch (error) {
                console.error('Error fetching story:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStory();
    }, [slug, userId]);

    const handleBookmarkClick = async () => {
        if (userId && story) {
            try {
                if (isBookmarked) {
                    await unfollowStory(userId, story.id, null);
                    setIsBookmarked(false);
                } else {
                    await followStory(userId, story.id, null);
                    setIsBookmarked(true);
                }
            } catch (error) {
                console.error('Error updating bookmark:', error);
            }
        }else{
            toast.error("Bạn phải đăng nhập để sử dụng tính năng này!");
          }
    };

    const handleLikeClick = async () => {
        if (userId && story) {
            try {
                if (isLiked) {
                    await unlikeStory(userId, story.id);
                    setIsLiked(false);
                } else {
                    await likeStory(userId, story.id);
                    setIsLiked(true);
                }
            } catch (error) {
                console.error('Error updating like:', error);
            }
        }else{
            toast.error("Bạn phải đăng nhập để sử dụng tính năng này!");
          }
    };

    

    const handleButtonClick = async () => {
         // Tăng số lượt xem ngay cả khi người dùng không đăng nhập
         await addView(story.id);
        if (userId && story) {
            const nextChapterNumber = userProgress ? userProgress.chapterNumber : 1;
            await saveOrUpdateUserProgress(userId, story.slug, nextChapterNumber);
        }
    };

    const handleRatingSubmit = useCallback(async (newRating) => {
        const currentTime = Date.now();
        // Kiểm tra xem thời gian hiện tại có cách thời gian gửi đánh giá gần nhất ít hơn 1 phút không
        if (currentTime - lastRatingTime < ratingCooldown) {
            toast.info("Bạn hãy đợi một phút trước khi gửi đánh giá tiếp theo.");
            return;
        }

        if (userId && story) {
            try {
                await rateStory(userId, story.id, newRating); // Gửi điểm đánh giá mới lên server
                setLastRatingTime(currentTime); // Cập nhật thời gian gửi đánh giá gần nhất
                toast.success("Đánh giá của bạn đã được gửi!");
            } catch (error) {
                console.error('Error submitting rating:', error);
                toast.error("Đã xảy ra lỗi khi gửi đánh giá.");
            }
        } else {
            toast.error("Bạn phải đăng nhập để đánh giá!");
        }
    }, [userId, story, lastRatingTime,ratingCooldown]);

    return {
        story,
        loading,
        userProgress,
        isBookmarked,
        isLiked,
        handleBookmarkClick,
        handleLikeClick,
        handleButtonClick,
        handleRatingSubmit
    };
};
