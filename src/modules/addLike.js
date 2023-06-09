const involveApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5PnM9F8kxQbfuKnoLFnv';

const addLike = (id) => {
  fetch(`${involveApi}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  })
    .then(() => fetch(`${involveApi}/likes`))
    .then((response) => response.json())
    .then((data) => {
      let newId = id;
      newId -= 1;
      const likeBtn = document.querySelectorAll('.like-count')[newId];
      data.forEach((like) => {
        if (like.item_id === id) {
          likeBtn.innerHTML = `${like.likes} likes`;
        }
      });
    });
};

export default addLike;