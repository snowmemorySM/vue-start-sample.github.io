<template>
    <div>
        <p>checkbox선택 여부에따라 인스턴스 상태 값을 표시</p>
        <div>
            <input type="checkbox" v-model="toggle" v-bind:true-value="a" v-bind:false-value="b">
            <span>toggle : {{ toggle }}</span>
        </div>
        <hr/>
        <p>radio 엘레멘트에 값 바인딩</p>
        <div>
            <input type="radio" v-model="pick" v-bind:value="a">
            <span>pick : {{ pick }}</span>
        </div>
        <p>select 엘레멘트에 값 바인딩</p>
        <div>
            <select v-model="selected">
                <option v-bind:value="'한글'">123</option>
                <option v-bind:value="456">456</option>
            </select>
            <span>selected : {{ selected }}</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pick: '',
            toggle: '',
            selected: '한글',
            a: "선택됨",
            b: "체크 해제"
        };
    },   
}
</script>