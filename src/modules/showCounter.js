const showCounter = async (showId) => {
  const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

  const commentsUrl = `${baseURL}/apps/CPii9JproaMtnGMvqcdi/comments?item_id=${showId}`;

  try {
    const commentContainer = document.querySelector('.counter');
    const response = await fetch(commentsUrl);
    const data = await response.json();
    commentContainer.innerHTML = `<h2 class="counter-heading">All Comments (${data.length})</h2>`;
  } catch (error) {
    const massage = document.createElement('h1');
    massage.innerHTML = `Error happend ${error}`;
  }
};

export default showCounter;