import showComments from './displayComment.js';
import commentCounter from './commentCounter.js';

const createComment = async (showId, username, comment) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CPii9JproaMtnGMvqcdi/comments';

  const requestBody = {
    item_id: showId,
    username,
    comment,
  };

  try {
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    await showComments(showId);
    await commentCounter(showId);
  } catch (error) {
    const massage = document.createElement('h1');
    massage.innerHTML = `Error happend ${error}`;
  }
};

export default createComment;