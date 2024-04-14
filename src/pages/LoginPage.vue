<template>
    <div class="login_page">
        <form @click="(e)=>{e.preventDefault()}" class="login_page--form">
            <h2>{{ !haveAccount ? "Login" : "Register" }} form</h2>
            <Input placeholder="Email" type="email" v-model="this.user.login"/>
            <Input placeholder="Password" v-model="this.user.password"/>
            <Button @click="handleSubmit">{{ !haveAccount ? "Login" : "Register" }}</Button>
            <p>{{haveAccount ? "Already have an account?" : "Dont have account yet?"}}<Button @click="toggleHaveAccount"><span style="color:black">{{haveAccount ? "Login!" : "Register"}}</span></Button></p>
        </form>
    </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import Button from "../components/UI/Button.vue";

export default {
    components: {Button},
    data(){
        return {
            user:{
                login:'',
                password:''
            },
            haveAccount:false,
        }
    },
    methods:{
        handleSubmit(){
            switch (this.haveAccount){
                case false:
                    this.register()
                case true:
                    this.login()
            }
        },
        toggleHaveAccount(){
            this.haveAccount=!this.haveAccount
        },
        register(){
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, this.user.login, this.user.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
        },
        login(){
            const auth = getAuth();
            signInWithEmailAndPassword(auth, this.user.login, this.user.password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });

        },

    },

}
</script>

<style scoped>
.login_page{
    display: flex;
    justify-content: center;
}
.login_page--form{
    margin: auto 0;
    display: flex;
    width: 380px;
    height: fit-content;
    padding: 15px 33px;
    flex-direction: column;
    row-gap: 20px;
    border: 2px solid black;
    border-radius: 10%;
}
</style>