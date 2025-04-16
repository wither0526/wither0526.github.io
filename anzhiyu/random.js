var posts=["2024/10/30/learning-lauguage-c/","2024/10/22/myfirstblog/","2024/10/22/rm_vision/","2025/01/01/summary_of_2024/","2025/04/10/sentry_embedded_2025/","2024/10/30/machine-learning/","2025/01/23/winter_vacation_plan/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };