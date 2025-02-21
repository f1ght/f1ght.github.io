var posts=["2025/02/20/hello-world/","2025/02/21/对象的定义与使用(AI)/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };