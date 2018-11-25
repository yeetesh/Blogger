<template>
<div>
  <center><p style="font-size : 55px;">Top Blogs</p></center>
  <hr>
  <v-timeline>
    <v-timeline-item
      v-for="blog in blogs"
      :key="blog._id"
      color="red lighten-2"
      large
    >
      <span slot="opposite"><router-link tag="span" style="cursor : pointer" :to="{ name: 'User', params: { username : blog.username }}">
        <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75"
        ></v-img>
        <v-card-title primary-title>
          <div>   
            <p style="font-size : 20px;">-{{blog.username}}</p> 
          </div>
        </v-card-title>
        </v-card></router-link></span>
      <v-card class="elevation-2">
        <v-card-title class="headline"><router-link tag="span" style="cursor : pointer" :to="{ name: 'Blog', params: { id : blog._id }}">{{ blog.title }}</router-link></v-card-title>
        <v-card-text>
          {{ blog.body }}
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
  </div>
</template>


<script>
const retrieve = require("../helper/retrieve");
export default {
  data() {
    return {
      blogs: {}
    };
  },
  mounted() {
    retrieve
      .getData(`http://localhost:5000/`)
      .then(res => {
        this.blogs = res.data.blogs;
        this.blogs.map((blog, index) => {
          var temp = "";
          temp = blog.username.charAt(0).toUpperCase() + blog.username.slice(1);
          blog.username = temp;
          return blog;
        });
      })
      .catch(err => {
        console.log("Error in blogs" + err);
      });
  }
};
</script>
