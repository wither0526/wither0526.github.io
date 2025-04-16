var posts=["2024/10/22/myfirstblog/","2025/04/10/sentry_embedded_2025/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };