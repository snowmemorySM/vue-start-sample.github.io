<template>
    <div>
        <div>
            computed 속성 사용 예)
            <p>원본 메세지 : "{{message}}"</p>
            <p>뒤집히도록 계산된 메세지 : "{{reversedMessage}}"</p>
            <hr>
            <p>원본 메세지 : "{{message2}}"</p>
            <p ref="tester2"></p>
        </div>
        <div>
            computed안에서 캐싱작업 예)
            <p>캐싱된 시간{{now}}</p>
            <p ref="tester"></p>
        </div>
        <div>
            computed getter / setter설정
            <p>input value = {{fullName}}</p>
            <input type="text" v-model="inputTxt"><button @click="changeName(inputTxt)">Change</button>
            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: '안녕하세요.',
            message2: '같이 뛰자. 우리 함께 뛰자.',
            firstName: 'Foo',
            lastName: 'Bar',
            inputTxt: '',
        };
    },
    computed: {
        now: function() {
            return new Date();
        },
        reversedMessage: function() {
            console.log(this.$refs.tester) 
            return this.message.split('').reverse().join('');
        },
        msg_reverse: function() {
            return this.message2.split('').reverse().join('');
        },
        fullName: {
            get: function() {
                return this.firstName + ' ' + this.lastName
            },
            set: function(newValue) {
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[1]
            }
        }
    },
    methods: {
        show: function() {
            this.$refs.tester.innerHTML = this.now;
            this.$refs.tester2.innerHTML = this.msg_reverse;
        },
        changeName(newValue) { 
            this.fullName = newValue
            this.inputTxt = ''
        }
    },
    mounted: function() {
        console.log(this.$refs)
        console.log(this.$refs.tester)
        this.$refs.tester.innerHTML = this.now;
        this.$refs.tester2.innerHTML = this.msg_reverse;
    }
}
</script>

<style scoped>

</style>