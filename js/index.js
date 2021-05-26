const API_URL = "https://vetriblogapi.herokuapp.com/api/posts";
const API_BASE_URL = "https://vetriblogapi.herokuapp.com/";

window.onload = () => {
  getPosts();
};

const getPosts = () => {
  fetch(API_URL, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      buildPosts(data);
    });
};

const buildPosts = (blogPosts) => {
  let blogPostContent = "";

  for (blogPost of blogPosts) {
    const postDate = new Date(parseInt(blogPost.added_date)).toDateString();
    const postImage = `${API_BASE_URL}${blogPost.post_image}`;
    const postLink = `/post.html?id=${blogPost.id}`;
    blogPostContent += `
      <a href="${postLink}" class="post_link">
          <div class="post">
              <div class="post_image" style="background-image: url(${postImage});"></div>
              <div class="post_content">
                  <div class="post_date">${postDate}</div>
                  <div class="post_title"><h4>${blogPost.title}</h4></div>
                  <div class="post_text">${blogPost.content}</div>
              </div>
          </div> 
       </a> 
    `;
  }
  document.querySelector(".blog-posts").innerHTML = blogPostContent;
};
