<template>
    <h1>Hello {{ name }}, welcome to the Home Page</h1>
    <button id="out" v-on:click="logout">Log out</button>
</template>

<script>
export default {
    name: 'Home-page',
    data(){
        return{
            name: ''
        }
    },
    methods: {
        logout(){
            console.log("log out");
            localStorage.clear();
            this.$router.push({name: 'LogIn'});
        }
    },
    async mounted(){
        let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user).name;
        if(!user){
            this.$router.push({name: 'LogIn'})
        }
    }
}
</script>

<style>
    button#out{
    width: 300px;
    min-height: 35px;
    background-color:  rgb(4, 164, 105);
    color: #333;
    border: none;
    border-radius: 3px;
    margin-top: 30px;
    font-size: 15px;
    color: #fff;
    font-weight: 550;
    cursor: pointer;
}

</style>

