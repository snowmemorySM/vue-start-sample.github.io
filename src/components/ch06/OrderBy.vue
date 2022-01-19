<template>
    <div class="v-for-box">
        <table>
            <tr>
                <th @click="orderBy('id')">id</th>
                <th @click="orderBy('title')">title</th>
                <th @click="orderBy('name')">name</th>
            </tr>
            <tr v-for="item in items3" :key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.title}}</td>
                <td>{{item.name}}</td>
            </tr>
        </table>
        <button @click="orderbyAsc">ASC</button>
        <button @click="orderbyDesc">DESC</button>
    </div>
</template>

<script>
import _ from "lodash"

export default {
    data() {
        return {
            items3: [
                {id: 2, title: 'hhh', name: 'Jhon'},
                {id: 1, title: 'ttt', name: 'Aris'},
                {id: 3, title: 'aaa', name: 'Hans'},
            ]
        };
    },
    methods: {
        orderbyAsc: function() {
            this.items3 = _.orderBy(this.items3, 'title', 'asc')
        },
        orderbyDesc: function() {
            this.items3 = _.orderBy(this.items3, 'title', 'desc')
        },
        orderBy: function(sortKey) {
            this.items3 = _.orderBy(this.items3, sortKey, 'asc')
        }
    },
    computed: {
        // orderby: function() {
            
        // }
    }
}
</script>
<style scoped>
.v-for-box {
    position: relative;
    width: 600px;
    display: block;
    margin: 0 auto;
    margin-top: 20px;
}

.v-for-box table {
    border: 1px solid #000;
    width: 100%;
    border-collapse: collapse;
}

.v-for-box table th {
    background-color: lightslategrey;
    border: 1px solid #000;
}

.v-for-box table td {
    border: 1px solid lightslategrey;
    vertical-align: top;
}

</style>