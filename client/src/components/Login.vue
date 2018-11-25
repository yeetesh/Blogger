<template>
<div>
    <v-alert :value="error" class="text-xs-center">
      Could not login
    </v-alert>
    <v-layout row wrap>
    <v-flex xs6 offset-sm3>
      <center><p style="font-size : 35px;">Login</p></center>
    </v-flex>
    <v-flex xs6 offset-sm3>
      <div style="border : solid 1px; border-radius : 3px;" class="pa-4">
      <v-form >
        <v-text-field
        v-model="username"
        label="Name"
        required
        ></v-text-field>
      <v-text-field
        v-model="password"
        label="Password"
        type = "password"
        required
      ></v-text-field>
      <v-btn @click="login">Submit</v-btn>
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
      username: "",
      password: "",
      error: false
    };
  },
  methods: {
    login() {
      retrieve
        .postData(`http://localhost:5000/users/login/`, {
          username: this.username,
          password: this.password
        })
        .then(res => {
          console.log("Logged in");
          this.$router.isLoggedOut = false;
          this.$router.push("/");
        })
        .catch(err => {
          console.log(err);
          this.error = true;
          console.log(this.$router.isLoggedOut);
        });
    }
  }
};
</script>
