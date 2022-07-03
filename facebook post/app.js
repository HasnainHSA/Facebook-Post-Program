function likebtn(){
  alert("Post Liked")
}
    
    function postsubmition() {
      let username = document.getElementById("name")
      let posttitle = document.getElementById("post-title")
      let img = document.getElementById("img")
      let postdescription = document.getElementById("post-value");
      let main = document.getElementById("main");
      
      main.innerHTML += `
      <div class="post">
      <h2 class="username">Username: ${username.value}</h2><br>
      <h3 class="posttitle" >Post Title: ${posttitle.value}</h3><br>
      <p>Post Description:<br><br>${postdescription.value}</p><br>
      <img class="hello" src='${img.value}'>
    
    <div>
    <button id="like-btn" class="button" onclick='likebtn()'>LIKE</button>
  </div>
      `
    }









