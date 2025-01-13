new Vue({
    el: '#app',
    data: {
      name: '',
      commentText: '',
      comments: []
    },
    methods: {
      submitComment() {
        if (this.name && this.commentText) {
          this.comments.push({
            name: this.name,
            text: this.commentText
          });
          this.name = '';
          this.commentText = '';
        }
      }
    }
  });
  