<template>
    <div class="v-for-box">
        <table border="0">
            <tr>
                <th>v-for 디렉티브<br/>배열(순서 | 값)</th>
                <th>v-for 디렉티브<br/>배열(키값)</th>
                <th>v-for 디렉티브<br/>(객체값 | 순서 | 키)</th>
            </tr>
            <tr>
                <td>
                    <ul><li v-for="(pg, index) in list" :key="pg">{{index}} : {{pg}}</li></ul>
                </td>
                <td>
                    <ul><li v-for="(item, index) in items" :key="index">{{item.message}}</li></ul>
                </td>
                <td>
                    <ul>
                        <li v-for="(value, key, index) in object" :key="index">
                            {{value}} | {{index}} | {{key}}
                        </li>
                    </ul>
                </td>
            </tr>
        </table>
        <div class="test2">
            v-for div태그로 감싸기<br/>
            <dl>
                <div v-for="item2 in items2" :key="item2.id">
                    <dt>{{item2.id}}</dt>
                    <dt>{{item2.msg}}</dt>
                </div>
            </dl>    
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: ["Vue.js", "React.js", "Polymer.js", "Google", "Hanbit"],
            items: [
                {message: 'Vue.js'},
                {message: 'React.js'},
            ],
            object: {
                firstName: 'Joongmin',
                lastName: 'Lee',
                age: 39
            },
            items2: [
                {id: 1, msg: 'Hello Vue'},
                {id: 2, msg: 'Hello React'},
            ]
        };
    },
}
</script>
<style scoped>
ul li {
    list-style: none;
    text-align: left;
}

.v-for-box {
    position: relative;
    width: 600px;
    display: block;
    margin: 0 auto;
}

.v-for-box table {
    border: 1px solid #000;
    width: 100%;
    border-collapse: collapse;
}

.v-for-box table th {
    width: 33.3%;
    background-color: lightslategrey;
    border: 1px solid #000;
}

.v-for-box table td {
    border: 1px solid lightslategrey;
    vertical-align: top;
}

.v-for-box .test2 {
    border: 1px solid #000;
    margin-top: 10px;
}

</style>