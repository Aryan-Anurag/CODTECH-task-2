function addPost() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (title && content) {
        const posts = document.getElementById('posts');
        const post = document.createElement('div');
        post.className = 'post';

        const postTitle = document.createElement('h3');
        postTitle.textContent = title;

        const postContent = document.createElement('p');
        postContent.textContent = content;

        post.appendChild(postTitle);
        post.appendChild(postContent);

        posts.appendChild(post);

        // Clear inputs
        document.getElementById('title').value = '';
        document.getElementById('content').value = '';
    } else {
        alert('Please enter both a title and content');
    }
}
