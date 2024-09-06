import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/views";

export const addView = async (storyId) => {
  try {
    await axios.post(`${BASE_URL}/add-view`, null, {
      params: {
        storyId: storyId,
      },
    });
  } catch (error) {
    console.error("Error adding view:", error);
  }
};
