<template>
    <div>
        v-text적용 : 
        <span v-text="msg"></span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'Hello <b>Vue.js</b>',
        };
    },
}
</script>