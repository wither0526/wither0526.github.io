var posts=["2024/10/30/learning-lauguage-c/","2024/10/22/myfirstblog/","2024/10/22/rm_vision/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };