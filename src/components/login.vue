<template>
    <div>

        <input type="text" v-model="user"><br />
        <input type="password" v-model="pass"><br />
        <button @click="subMit">Login</button>
        <button @click="clickme">Login</button>

    </div>
</template>

<script>
export default {
    data() {
        return {
            user: 'kminchelle',
            pass: '0lelplR',
        }
    },

    methods: {
        subMit() {
            fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({

                    username: this.user,
                    password: this.pass,
                    // expiresInMins: 60, // optional
                })
            })
            .then(res => res.json())
            .then(console.log);

            console.log("Hello world")
        },

        clickme(){
            console.log("Hello world")
        }
    },

    created () {
        
    }
}
</script>