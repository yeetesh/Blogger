<template>
<div>
  <v-alert :value="error" class="text-xs-center">
     Could not create blog
    </v-alert>
    <v-layout row wrap>
    <v-flex xs6 offset-sm3>
      <center><p style="font-size : 35px;">Create Blog</p></center>
    </v-flex>
    <v-flex xs6 offset-sm3>
      <div style="border : solid 1px; border-radius : 3px;" class="pa-4">
      <v-form>
        <v-text-field
        v-model="title"
        label="Title"
        required
        ></v-text-field>
      <v-text-field
        v-model="body"
        label="Body"
        required
      ></v-text-field>
      <v-btn @click="create">Submit</v-btn>
    </v-form>
    </div>
    </v-flex>
  </v-layout>  

</div>
 
</template>

<script>
const retrieve = require("../helper/retrieve");
export default {
  data() {
    return {
      body: "",
      title: "",
      error: false
    };
  },
  methods: {
    create() {
      retrieve
        .postData(`http://localhost:5000/blogs/create`, {
          title: this.title,
          body: this.body
        })
        .then(res => {
          console.log("Blog created");
          /* this.$router.isLoggedOut = false;
          this.$router.push("/"); */
        })
        .catch(err => {
          console.log("could not create bog" + err.message);
          this.error = true;
        });
    }
  }
};
</script>