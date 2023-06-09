const displayLike = async (id) => {
  const Url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CPii9JproaMtnGMvqcdi/likes';

  const likeUrl = `${Url}?item_id=${id}`;

  const response = await fetch(likeUrl);
  const data = await response.json();
  data.forEach((like) => {
    if (like.item_id === id) {
      console.log(`${like.likes} likes`);
    }
  });
}

export default displayLike;