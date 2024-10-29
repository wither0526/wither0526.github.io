var posts=["2024/10/22/rm_vision/","2024/10/22/myfirstblog/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };