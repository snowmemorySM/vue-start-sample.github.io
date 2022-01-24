<template>
    <div>
        <p>Select Binding</p>
        <div>
            <select v-model="selected">
                <option disabled value="">Please select one</option>
                <option v-for="(i, index) in ['A', 'B', 'C']" :key="index">{{i}}</option>
            </select>
            <span> Selectd: {{ selected }}</span>
        </div>
        <hr/>
        <p>v-for이용해 select option을 구성</p>
        <div>
            <select v-model="selected2">
                <option v-for="(option, index) in options" :key="index" v-bind:value="option.value">
                    {{option.text}}
                </option>
            </select>
            <span> Get select value = {{ selected2 }}</span>
        </div>
        <hr/>
        <p>multiple 속성을 적용하여 처리</p>
        <div>
            <select v-model="selected3" multiple>
                <option v-for="(option, index) in options" :key="index" v-bind:value="option.value">
                    {{option.text}}
                </option>
            </select>
            <span> Get select value = {{ selected3 }}</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selected: 'C',
            selected2: '',
            selected3: ['C'],
            options: [
                {text: 'One', value: 'A'},
                {text: 'Two', value: 'B'},
                {text: 'Three', value: 'C'},
            ]
        };
    },
}
</script>