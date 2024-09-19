<template>
  <div class="our-help">
    <h1> {{ pageName }}</h1>
    <p> {{pageDescription }}</p>
    <div class="container">
        <div class="row">
          <div class="col-md-8">
              <div class="posts-area">
                <BlogPosts v-for="post in posts" :key="post.id" :views="post.views" :title="post.title" :date="post.date" :content="post.content" :author="post.author" :category="post.category"/>
              </div>
          </div>
          <div class="col-md-4">
              <div class="sidebar">
                <BlogSidebar />
              </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import JsonPosts from "@/json/Blog_posts.json"
import BlogPosts from "@/components/Blog/BlogPosts.vue";
import BlogSidebar from "@/components/Blog/BlogSidebar.vue";
export default {
  data: function ()
  {
    return {
      pageName: "Blog",
      pageDescription: "This is Blog Article page",
      posts: JsonPosts
    };
  },
  name: `Blog`,
  components: {
    BlogPosts,
    BlogSidebar
  }

};
</script>