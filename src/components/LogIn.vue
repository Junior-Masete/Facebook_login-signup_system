<template>
    <h1>facebook</h1>
    <div class="login">
        <input type="text" v-model="email" placeholder="Mobile number or email address" />
        <input type="password" v-model="password" placeholder="Password"/>
        <button v-on:click="login">Log In</button>

        <p>
           <a href="#">forgotten password?</a> 
        </p>
        <br/>
        <p>
            or
        </p>
        
        <button id="sign" v-on:click="signup">Create new account</button>
    
    </div>
</template>

<script>
import axios from 'axios'
export default{
    name: 'LogIn',
    data() {
        return {
            email: '',
            password: ''
        }
    }, 
    methods:{
        async login(){
            let details = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);
            
            if(details.status == 200 && details.data.length > 0){
                localStorage.setItem("user-info", JSON.stringify(details.data[0]))
                this.$router.push({name: 'Home'});
                console.warn("it is working")
            }
        },
        signup(){
            this.$router.push({name: 'SignUp'})
        }
    },
    mounted(){
        let user = localStorage.getItem('user-info');
        if(user){
            this.$router.push({name: 'Home'})
        }
    }
}

</script>

<style>
h1 {
    font-family: klavika;
    color: rgb(13, 104, 195);
    font-size: 50px;
    margin-bottom: 50px;
}

.login input{
    display: block;
    width: 400px;
    min-height: 40px;
    margin-right: auto;
    margin-left: auto;
    font-size: 12px;
    border: none;
    border-radius: 3px;
    background-color: #d4d3d3d9;
    box-shadow: 1px 1px 5px #737373;
    margin-bottom: 20px;
}

.login button {
    margin: auto;
    width: 400px;
    min-height: 40px;
    background-color: rgb(13, 104, 195);
    color: #fff;
    border: none;
    font-size: 20px;
    font-weight: 550;
    border-radius: 6px;
    margin-bottom: 30px;
    cursor: pointer;
}

#signup{
    border: 1px solid red;
    width: 400px;
    min-height: 40px;
    margin: auto;
}

button#sign{
    width: 300px;
    min-height: 35px;
    background-color: transparent;
    color: #333;
    border: 1px solid #908f8f;
    margin-top: 30px;
    font-size: 15px;

}

</style>