<template>
  <v-layout row wrap>
    <v-flex xs12 sm8 offset-sm2>
      <h1 class="mb-3" style="font-size : 45px;"><center><i>{{ title}}</i></center></h1>
    </v-flex>
    <v-flex xs12 sm8 offset-sm2>
      <v-card>
        <v-img
          src="https://images.unsplash.com/photo-1536599018102-9f803c140fc1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a8501e8a6283a395c6926dc051c12455&auto=format&fit=crop&w=2000&q=80"
           aspect-ratio="2"
        ></v-img>
        <v-card-title primary-title>
          <div>   
            <div class="pt-3" style="font-size : 15px;">{{body}}</div>
            <span style="float : right; display : block; font-size : 20px;"><cite>-{{author}}</cite></span>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
    <v-flex sm6 offset-sm3>
      <hr class="ma-3" >
      <center class="ma-3"><i style="font-size : 25px;">Further Reading</i></center>
      <hr class="ma-3">
    </v-flex>
    <v-flex xs4 v-for="blog in recommended" :key="blog._id" class="pa-3">
      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline ">{{ blog.title }}</h3>
            <div class="ma-1">{{blog.body.slice(0,150)}}...</div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
const retrieve = require("../helper/retrieve");
export default {
  data() {
    return {
      recommended: {},
      id: "",
      title: "",
      body: "",
      author: "",
      image: ""
    };
  },
  mounted() {
    console.log(this.$route.params.id);
    this.id = this.$route.params.id;
    retrieve.getData(`http://localhost:5000/blogs/${this.id}`).then(res => {
      this.title = res.data.title;
      this.body = res.data.body;
      var temp = res.data.username;
      this.author = temp.charAt(0).toUpperCase() + temp.slice(1);
      this.image = res.data.image;
      console.log(res.data);
    });
    retrieve.getData(`http://localhost:5000/blogs/`).then(res => {
      var temp = res.data.blogs;
      this.recommended = temp.filter(blog => blog._id !== this.id);
      this.recommended = this.recommended.slice(0, 3);
      console.log("");
    });
  }
};
</script>
