<template>
    <div class="container">
        <table border="0">
            <tr class="first">
                <th>
                    속성
                </th>
                <th>
                    속성적용
                </th>
                <th>
                    보간법<b>「:」</b>
                </th>
                <th>
                    보간속성적용
                </th>
            </tr>
            <tr>
                <th>
                    v-bind:id
                </th>
                <td>
                    <span v-bind:id="dynamicId">
                        <span v-text="tag"></span>
                    </span>
                </td>
                <th>
                    :id
                </th>
                <td>
                    <span :id="dynamicId">
                        <span v-text="tag"></span>
                    </span>
                </td>
            </tr>
            <tr>
                <th>
                    v-bind:disabled
                </th>
                <td>
                    <button v-bind:disabled="isButtonDisabled">Button</button>
                </td>
                <th>
                    :disabled
                </th>
                <td>
                    <button :disabled="isButtonDisabled">Button</button>
                </td>
            </tr>
            <tr>
                <th>
                    v-bind:herf
                </th>
                <td>
                    <a v-bind:href="href">Google</a>
                </td>
                <th>
                    :herf
                </th>
                <td>
                    <a :href="href">Google</a>
                </td>
            </tr>
            <tr>
                <th colspan="2">
                    v-once(1회성 보간법)
                </th>
                <td colspan="2">
                    <span v-once>1회만 사용: {{tag}}</span>    
                </td>
            </tr>
        </table>
        <div>
            v-once<br/>
            <VOnec :comment="msg" :list="list"/>

        </div>
    </div>
</template>

<script>

import VOnec from './VOnce.vue'

export default {

    data() {
        return {
            dynamicId: 'first-div',
            isButtonDisabled: true,
            href: 'https://www.google.com',
            tag: '<span id="first-div"></span>',
            msg: '오늘 날씨는 눈.',
            list: ['1','2','3']
        };
    },
    components: {
        // eslint-disable-next-line vue/no-unused-components
        VOnec
    }
}
</script>

<style scoped>
.container {
    width: 800px;
    margin: 0 auto;
}

.container table {
    width: 100%;
    border-collapse: collapse;
    
}

.container table tr {
    height: 30px;
}

.container table th {
    width: 20%;
    background-color: gray;
    border: 1px solid white;
}

.container table td {
    width: 30%;
    border: 1px solid gray;
}
</style>