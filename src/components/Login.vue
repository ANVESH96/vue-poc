<template>
    <div id="login">
        <h1>Login</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
        <p> {{info}}</p>
    </div>

</template>

<script>
import axios from 'axios'
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "integrationcarrier@truckstop.com",
                    password: "r6cQZ7p33QcJHbaQDs9u"
                }
            }
        },
        methods: {
            login() {
                const options = {
                 headers: {"Content-Type":"application/json",
                 "DeviceID":"WebPortal"}
                };
      axios
      .post('https://pangeasvcqa.truckstop.com/Account/Login',{
        //   "username":"anvesh"
        "UserName":this.input.username,
        "Password":this.input.password
      },options)
      .then(response => {
          this.info = response
          this.$router.push('/LoadSearch')
          window.localStorage.setItem("token", response.data.Body.Data.AuthToken);
          })
            }
        }
    }
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>