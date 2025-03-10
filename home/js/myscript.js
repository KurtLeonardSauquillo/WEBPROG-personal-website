function toggleSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.style.display = section.style.display === 'none' ? 'block' : 'none';
}

new Vue({
  el: '#app',
  data: {
      newComment: '',
      comments: []
  },
  methods: {
      addComment() {
          if (this.newComment.trim() !== '') {
              this.comments.push(this.newComment);
              this.newComment = '';
          }
      }
  }
});