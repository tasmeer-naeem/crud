<template>
  <div class="register">
    <h2>  Sign Up </h2>
      <form @submit.prevent="handleSubmit">
      <label>First Name</label>
      <input type="text" v-model="first_name" ><br/>
      <label>Last Name</label>
      <input type="text" v-model="last_name"><br/>
      <label>Email</label>
      <input type="email" v-model="email"><br/>
      <label>Password</label>
      <input type="password" v-model="password"><br/>
      <label>Confirm Password</label>
      <input type="password" v-model="confirm_password"><br/>
      <button>Sign Up</button>
      </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
        name:"RegisterPage",
        data(){
            return{
                first_name:'',
                last_name:'',
                email:'',
                password:'',
                confirm_password:'',
            }
        },
        methods:{
          async  handleSubmit(){
                   // e.preventDefault()
                    console.log('res')
                   const data = {
                     first_name : this.first_name,
                     last_name : this.last_name,
                     email : this.email,
                     password : this.password,
                     confirm_password : this.confirm_password
                   }
                   // console.log("submitted",data)

               const res = await axios.post("/register",data)
               console.log('res',res)
               this.first_name = ''
               this.last_name = ''
               this.email = ''
               this.password = ''
               this.confirm_password = '' 

                this.$router.push('/login')   // to redirect to login page

              // axios.post("http://localhost:3000/register",data) .then((res)=>{
              //        console.log(res)
              //      }).catch((err)=>{
              //        console.log(err)
              //      })
            }
        }
}
</script>

<style scoped>
.register{
  display: flex;
  flex-direction: column; 
  align-items: center;
}
</style>