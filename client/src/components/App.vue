
<template>
  <v-app>
    <v-toolbar dark color="black">

    <v-toolbar-title class="white--text"><router-link to="/" tag="span" style="cursor : pointer">Blogger</router-link></v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn v-if="isLoggedOut" to="/users/login" flat>Login</v-btn>
    <v-btn v-if="isLoggedOut" to="/users/create" flat>Register</v-btn>
    <v-btn v-if="!isLoggedOut" to="" @click="logout">Logout</v-btn>
    <v-btn v-if="!isLoggedOut" to="/blogs/create" flat>Write</v-btn>
  </v-toolbar>
  <v-container>
    <main><router-view></router-view></main>
    
  </v-container>
  <v-footer class="pa-3" dark fixed>
    <v-spacer></v-spacer>
    <div>&copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
    
</v-app>

</template>
<script>
const retrieve = require("../helper/retrieve");
export default {
  data() {
    return {
      isLoggedOut: true
    };
  },

  methods: {
    logout() {
      this.isLoggedOut = true;
      this.$router.isLoggedOut = true;
      retrieve.getData(`http://localhost:5000/users/logout`).then(res => {});
    }
  },

  updated() {
    if (this.$router.isLoggedOut != undefined)
      this.isLoggedOut = this.$router.isLoggedOut;
    console.log("In updated " + this.$router.isLoggedOut);
  }
};
</script>

