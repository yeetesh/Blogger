<template>
<div>
  <v-alert :value="error" class="text-xs-center">
     Could not Register
    </v-alert>
    <v-layout row wrap>
    <v-flex xs6 offset-sm3>
      <center><p style="font-size : 35px;">Register</p></center>
    </v-flex>
    <v-flex xs6 offset-sm3>
      <div style="border : solid 1px; border-radius : 3px;" class="pa-4">
      <v-form>
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
      <v-btn @click="register">Submit</v-btn>
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
    register() {
      retrieve
        .postData(`http://localhost:5000/users/create/`, {
          username: this.username,
          password: this.password
        })
        .then(res => {
          console.log("Registered");
          this.$router.isLoggedOut = false;
          this.$router.push("/");
        })
        .catch(err => {
          console.log("could not regiser" + err);
          this.error = true;
        });
    }
  }
};
</script>