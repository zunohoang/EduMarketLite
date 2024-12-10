const commentForm = document.getElementById('commentForm');
const chapterButts = document.querySelectorAll('.chapter-button')

chapterButts.forEach((chapterButt,idx) => {
    chapterButt.addEventListener("click",(e) => {
        document.getElementById(`${idx +1}`).classList.toggle('active');
        console.log(document.getElementById(`${idx +1}`))
    })
})

commentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value.trim();
    
    if (commentText) {
        const author = 'Nguyễn Văn Hoàng'; 
        const timestamp = formatDate(new Date());
        
        const commentElement = createCommentElement(author, commentText, timestamp);
        
        const commentsList = document.getElementById('commentsList');
        commentsList.insertBefore(commentElement, commentsList.firstChild);
        
        commentInput.value = '';
    }
});

function formatDate(date) {
    return `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')} ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

function createCommentElement(author, text, timestamp) {
    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment';
    commentDiv.innerHTML = `
        <div class="avatar">
            <svg viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
        </div>
        <div class="comment-content">
            <div class="comment-header">
                <span class="comment-author">${author}</span>
            </div>
            <div class="comment-text">${text}</div>
            <div class="comment-timestamp">${timestamp}</div>
        </div>
    `;
    return commentDiv;
}


window.onload = function() {
    const initialComments = [
    ];

    const commentsList = document.getElementById('commentsList');
    initialComments.forEach(comment => {
        const commentElement = createCommentElement(
            comment.author,
            comment.text,
            comment.timestamp
        );
        commentsList.appendChild(commentElement);
    });
};