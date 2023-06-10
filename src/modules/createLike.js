import displayLike from './displayLike.js';

const createLike = async (id) => {
  const Url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CPii9JproaMtnGMvqcdi/likes/';

  const obj = {
    item_id: id,
  };

  await fetch(Url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });

  const likeCount = await displayLike(id);
  return likeCount;
};

export default createLike;
