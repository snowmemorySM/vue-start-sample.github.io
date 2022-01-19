<template>
    <div>
        <div>
            <label>Vue.js API</label>
        </div>
        <hr/>
        <div>
            <label>Data option</label>
            <div>
                data출력 : {{property}}
            </div>
        </div>
        <hr/>
        <Props v-bind:msg="msgData"/>
        <El/>
    </div>
</template>

<script>
import Props from '../components/Props.vue'
import El from '../components/El.vue'

export default {
    data() {
        return {
            property: 'value',
            msgData: 'propsTest message'
        };
    },
    components: {
        // eslint-disable-next-line vue/no-unused-components
        'Props': Props,
        // eslint-disable-next-line vue/no-unused-components
        'El': El,
    }
}
</script>

<style scoped>

</style>