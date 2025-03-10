function toggleSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section.style.display === "none" || section.style.display === "") {
      section.style.display = "block";
  } else {
      section.style.display = "none";
  }
}

new Vue({
  el: "#app",
  data: {
      newComment: "",
      comments: []
  },
  methods: {
      addComment() {
          if (this.newComment.trim() !== "") {
              this.comments.push(this.newComment);
              this.newComment = "";
          }
      }
  }
});
