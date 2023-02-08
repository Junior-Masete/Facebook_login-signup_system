<template>
    <h2>Sign Up</h2>
    <br/>
    <div class="register">
        <input type="text" v-model="name" placeholder="Name" />
        <input type="text" v-model="surname" placeholder="Surname"/>
        <input type="text" v-model="email" placeholder="Email"/>
        <input type="text" v-model="contact" placeholder="Contact"/>
        <input type="password" v-model="password" placeholder="Password"/>
        
        <button v-on:click="signup">Sign Up</button>
        <button v-on:click="login">Log In</button>
    </div>
</template>

<script>
import axios from 'axios'

export default{
    name: 'SignUp',
    data(){
        return {
            name: '',
            surname: '',
            email: '',
            contact: '',
            password: ''
        }
    },
    methods: {
        async signup(){
            let details = await axios.post("http://localhost:3000/users",{
                name: this.name,
                surname: this.surname,
                email: this.email,
                contact: this.contact,
                password: this.password
            });

            if(details.status == 201){
                localStorage.setItem("user-info", JSON.stringify(details.data))
                this.$router.push({name: 'Home'});
            }
        },
        login(){
            console.log("login from sign up");
            this.$router.push({name: 'LogIn'})
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
    h2{
        color: rgb(13, 104, 195);
        font-family: klavika;
    }

    .register input {   
        display: block;
        border-radius: 3px;
        margin: auto;
        margin-bottom: 20px;
        border: 1px solid #908f8f;
        width: 300px;
        min-height: 35px;
    }

    .register button{
        margin: auto;
        width:150px;
        min-height: 40px;
        background-color:  rgb(4, 164, 105);
        border: none;
        border-radius: 3px;
        color: #fff;
        cursor: pointer;
        margin: 0 5px;
    }


</style>

