<template>
    <div>
        v-html적용 : 
        <span v-html="msg"></span>
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