/**
 * TODO: Finish submitNewPost function to submit form data to the API
 */

const API_URL = "http://localhost:3000/api/posts";

const submitNewPost = () => {
  // HINT: Use FormData to store data to send over
  // HINT: Redirect the user to home page after successful submission

  const title = document.getElementById("form-post-title").value;
  const content = document.getElementById("form-post-content").value;
  const imageInput = document.getElementById("form-post-image");
  // Send the data throught api by using multipart FormData()
  const data = new FormData();
  // Now append the elements to the data one by one.

  data.append("title", title);
  data.append("content", content);
  data.append("post_image", imageInput.files[0]);

  fetch(API_URL, {
    method: "POST",
    body: data,
  }).then(() => {
    setTimeout(() => {
      console.log("Data Saved : We are good😊");
      window.location.href = "index.html";
    }, 1000);
  });
};
