var posts=["2024/10/22/hello-world/","2024/10/28/myfirstblog/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };