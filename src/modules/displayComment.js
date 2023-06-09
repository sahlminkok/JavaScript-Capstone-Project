
const showComments = async (showId) => {
  const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

  const commentsUrl = `${baseURL}/apps/CPii9JproaMtnGMvqcdi/comments?item_id=${showId}`;

  try {
    const allCommentContainer = document.querySelector('.show-comment');
    allCommentContainer.innerHTML = '';
    const response = await fetch(commentsUrl);
    const data = await response.json();
    data.forEach((comment) => {
      const p = document.createElement('p');
      p.classList.add('comment-paragraph');
      p.innerHTML = `
        <span>Date: ${comment.creation_date}</span> - Name: <span>${comment.username}</span> -  <span>${comment.comment}</span>
        `;
      allCommentContainer.appendChild(p);
    })
  } catch (error) {
    console.error('Error fetching comments:', error);
    // Handle error here
  }
};

export default showComments;