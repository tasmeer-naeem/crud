<template>
  <div class="login">
    <h2>  Login </h2>
    <form @submit.prevent="handleSubmit">
       <label>Email</label>
      <input type="email" v-model="email"  @change="email" ><br/>
      <label>Password</label>
      <input type="password" v-model="password" ><br/>
      <button>Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LoginPage',

  data(){
    return{
      email : '',
      password : ''
    }
  },

  methods:{
   async handleSubmit(){
      console.log("login")
      const data={
        email:this.email,
        password:this.password
      }

      const res = await axios.post('login',data)
      console.log(res)
    }
  }
 
}
</script>


<style >
.login{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
