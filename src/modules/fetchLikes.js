const involveApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5PnM9F8kxQbfuKnoLFnv';

const fetchLikes = async () => {
  const response = await fetch(`${involveApi}/likes`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  // const result = data.map((like) => like.likes)
  return data;
};

export default fetchLikes;