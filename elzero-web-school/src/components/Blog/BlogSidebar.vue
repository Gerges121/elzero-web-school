<template>
  <div class="sidebar-widgets">
    <p>Popular Articles</p>
    <div class="blogs">
        <div class="views">
          <p> 123</p>
        </div>
        <div class="title">
          <p>sdfsdfsdfsdfsdfsdfsdfasdsdfsd</p>
        </div>
        <div class="date">

        </div>
        <div class="author">

        </div>
        <div class="category">

        </div>
    </div>
  </div>
</template>
/**/
<script>
export default {
  name: `blog_sidebar`,
};
</script>

<style>
.sidebar-widgets{
  height: 1000px;
  left: 30%;
  width: 150%;
  top: 0%;
  background-color: #4CAF50;
  position: relative;
}

.blogs{
  background-color: red;
  position: absolute;
  right: 2%;
  width: 95%;
  height: 20%;
  border-radius: 10px;
}
.views{
  border-radius: 20px;
  margin: 10px;

}
.views p{
  position: absolute;
  height: 20px;
  width: 40px;
  right: 1%;
  border-radius: 20px;
  background-color: #ccf6cc;
}

.title{
position: absolute;
  left: 1%  ;
  background-color: #3C72FC;
  font-size: 23px;
  border-radius: 10px;
}
</style>