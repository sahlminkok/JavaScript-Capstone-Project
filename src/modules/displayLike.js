const displayLike = async (id) => {
  const Url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CPii9JproaMtnGMvqcdi/likes';
  const likeUrl = `${Url}?item_id=${id}`;

  const response = await fetch(likeUrl);
  const data = await response.json();

  let likesCount = 0;
  data.forEach((like) => {
    if (like.item_id === id) {
      likesCount = like.likes;
    }
  });

  return likesCount.toString();
};

export default displayLike;
