new Vue({
    el: '#app',
    data: {
      name: '',
      commentText: '',
      comments: []
    },
    methods: {
      submitComment() {
        // Check if both the name and the comment text are filled
        if (this.name && this.commentText) {
          // Add the comment to the comments array
          this.comments.push({
            name: this.name,
            text: this.commentText
          });
          // Clear the input fields after submission
          this.name = '';
          this.commentText = '';
        } else {
          alert('Please provide both name and comment!');
        }
      }
    }
  });
  