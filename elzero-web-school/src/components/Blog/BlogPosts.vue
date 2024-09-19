<template>
  <div class="post-box">
      <span class="post-views">{{views}}</span>
      <h3 class="post-title">{{title}}</h3>
      <span class="post-date">{{date}}</span>
      <p class="post-content">{{shorten(content)}}</p>
        <div class="row">
          <div class="col-sm-6">
            <span class="post-author">{{author}}</span>
          </div>
          <div class="col-sm-6 text-right">
            <span class="post-category" >{{ category }}</span>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  props: ["views", "title", "date", "content", "author", "category"],
  name: `Post`,
  methods: {
    uppercase(v) {
      return v.toUpperCase();
    },
    swap(v) {
      return v.split("").reverse().join("");
    },
    shorten(v) {
      return v.substring(0, 100) + ' ...';
    },
  }
};
</script>

<style scoped>
  .post-box {
    padding: 20px;
    background-color: #FFFFFF;
    box-shadow: 0 0 10px #ddd;
    position: relative;
    text-align: left;
    border-radius: 10px;
    margin-bottom: 20px;
    .post-views {
      position: absolute;
      top: 5px;
      right: 5px;
      background-color: #4CAF50;
      border-radius: 4px;
      padding: 1px 5px;
      color: #FFFFFF;
      text-align: center;
      font-weight: bold;
    }
    .post-date {
      display: block;
      padding: 0 0 5px;
      color: #888;
      font-size: 14px;
    }
    .post-content {
      line-height: 1.8;
      color: #666;
    }
    .post-author {
      color: palegreen;
      font-weight: bold;
      background-color: gray;
      padding: 5px 20px;
      border-radius: 5px;
    }
    .post-category {
      color: palegreen;
      font-weight: bold;
      background-color: gray;
      padding: 5px 20px;
      border-radius: 5px;
    }
  }
</style>