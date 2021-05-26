/**
 * TODO (Together): Create getPostIdParam to get the id of the post to use in the request later
 * TODO: Complete getPost function to get post data from API
 * TODO: Complete buildPost function to fill in the post data in the post.html file using ids
 */

const API_URL = "https://vetriblogapi.herokuapp.com/api/posts/";
const API_BASE_URL = "https://vetriblogapi.herokuapp.com/";

window.onload = () => {
  getPost();
};

const getPostIdParam = () => {
  // select the complete string from the URL
  const queryString = window.location.search;
  //   From the selected URL separating only the URLParams
  const urlParams = new URLSearchParams(queryString);
  // Got the specific value of a parameter from the URLParamas by using their parameter name.
  return urlParams.get("id");
};

const getPost = () => {
  // CODE GOES HERE
  const postId = getPostIdParam();
  fetch(`${API_URL}${postId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      buildPost(data);
    });
};

const buildPost = (data) => {
  // HINT: Convert the date number to a Date string
  let blogPostContent = "";
  const postDate = new Date(parseInt(data.added_date)).toDateString();
  const postImage = `${API_BASE_URL}${data.post_image}`;
  blogPostContent += `
  <div id="individual-post-title">${data.title}</div>
  <div id="individual-post-date">Published On : ${postDate}</div>
  <div id="individual-post-content">${data.content}</div>
  `;
  document.querySelector(".single_post").innerHTML = blogPostContent;
  document.getElementById("header").style.backgroundImage = `URL(${postImage})`;
};
