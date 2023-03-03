<template>
    <div>
        <input type="text"> <br/>
        <input type="text"> <br/>
        <button @click="subMitMe">Login</button>
    </div>
</template>subMitMe

<script >
    export default{
        data(){
            return{

            }
        },
        method: {
            subMitMe(){
                console.log("clikeme2")
            }
        }
    }
</script>