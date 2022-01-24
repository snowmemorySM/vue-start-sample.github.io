<template>
    <div>
        <p><b>엘레멘트 수식어</b></p>
        <hr/>
        <div>
            <p>.lazy</p>
            <input type="text" v-model.lazy="msg" v-on:keyup="changed">
        </div>
        <hr/>
        <div>
            <p>.number => 숫자문자열을 숫자로 변환<br/>
            경고) 숫자이외의 문자열이 입력된 경우 숫자가 입력된 범위까지만 표시</p>
            <input type="text" v-model.number="msg2" v-on:keyup="changed2">
        </div>
        <hr/>
        <div>
            <p>.trim => 문자열 앞뒤에 있는 공백 제거</p>
            <input type="text" v-model.trim="msg3" v-on:keyup="changed3">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: '',
            msg2: '',
            msg3: '',
        };
    },
    methods: {
        changed: function(event) {
            console.log(this.msg);
            console.log(event);
        },
        changed2: function(event) {
            console.log(this.msg2);
            console.log(event);
        },
        changed3: function(event) {
            console.log(this.msg3);
            console.log(event);
        }
    }
}
</script>