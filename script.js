// Handle all comment forms
document.querySelectorAll('.comment-form').forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const name = this.querySelector('input').value.trim();
      const message = this.querySelector('textarea').value.trim();
      const postId = this.getAttribute('data-post');
      const commentSection = document.getElementById('comments' + postId);
  
      if (name && message) {
        const comment = document.createElement('p');
        comment.innerHTML = `<strong>${name}:</strong> ${message}`;
        commentSection.appendChild(comment);
  
        this.reset(); // Clear form
      }
    });
  });
  