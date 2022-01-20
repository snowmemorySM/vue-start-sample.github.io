<template>
    <div>
        <p><b>watch(감시자)</b></p>
        <span>
            <input type="text" v-model="a.msg">
        </span>
        <span>
            <input type="text" v-model="b">
        </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            a: {
                msg: 'new message',
                since: 2017
            },
            b: 4,
            c: 1
        };
    },
    watch: {
        // 기본 예
        // a: function(val, oldVal) {
        //     console.log(`new: ${val} | old: ${oldVal}`)
        // }
        // 함수로 분리해서 실행
        // a: 'someMethod'

        // 객체 내부 변환까지 감사기능
        a: {
            handler: function(val, oldVal) {
                console.log(`A = new: ${val} | old: ${oldVal}`)
            },
            deep: true
        },
        // 즉각 감지 기능
        b: {
            handler: function(val, oldVal) {
                console.log(`B = new: ${val} | old: ${oldVal}`)
            },
            immediate: true
        },
        c: {
            handler: function(val, oldVal) {
                console.log(`C = new: ${val} | old: ${oldVal}`)
            },
            deep: false,
            immediate: false
        }
        
    },
    methods: {
        // watch에서 함수 호출후 실행
        someMethod: function(new_, old) {
            console.log(`new: ${new_} | old: ${old}`)
        }
    }
}
</script>

<style scoped>

</style>