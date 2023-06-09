import showComments from './displayComment.js';

const createComment = async (showId, username, comment) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CPii9JproaMtnGMvqcdi/comments';

  const requestBody = {
    item_id: showId,
    username,
    comment
  };

  try {
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    await showComments(showId);
  } catch (error) {
    console.error('Error creating comment:', error);
    // Handle error here
  }
};

export default createComment;