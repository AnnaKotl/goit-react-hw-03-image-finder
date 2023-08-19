import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38045960-ef970a60611d776386f7db4c1';

export const fetchImages = async (query, page) => {
  const response = await axios.get(BASE_URL, {
    params: {
      q: query,
      page: page,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
  return response.data.hits;
};

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
// Your API key: 38045960-ef970a60611d776386f7db4c1
// axios.defaults.baseURL = 'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12';
// export const fetchQuizzes = async () => {
//   const response = await axios.get('/quizzes');
//   return response.data;
// };
// export const deleteQuiz = async quizId => {
//   const response = await axios.delete(`/quizzes/${quizId}`);
//   return response.data;
// };
// export const createQuiz = async quiz => {
//   const response = await axios.post('/quizzes', quiz);
//   return response.data;
// };
