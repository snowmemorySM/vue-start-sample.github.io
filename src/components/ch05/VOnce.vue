<template>
    <div>
        <p> v-once comment출력 : {{comment}} </p>
        <p>
            v-for에 v-once 적용<br>
            <ul class="ul">
                <li v-for="i in list" v-once :key="i">{{i}}</li>
            </ul>
        </p>
        <p>
            v-text와 v-oncev동시 적용<br/>
            <span v-once v-text="msg"></span>
        </p>
    </div>
</template>
<script>
export default {
    props:['comment', 'list'],
    data() {
        return {
            msg: 'Hello <b>Vue.js</b>'
        };
    },
}
</script>

<style scoped>
ul {
    margin: 0 auto;
    width: 30px;
}
</style>