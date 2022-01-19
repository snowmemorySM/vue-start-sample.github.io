<template>
    <div class="v-for-box">
        <table>
            <tr>
                <th width=15%>idx</th>
                <th width=85%>title</th>
            </tr>
            <tr v-for="(item, index) in list2" :key="item.id">
                <td>{{index}}</td>
                <td>{{item.title}}</td>
                <td></td>
            </tr>
        </table>
        <div>
            <input type="text" v-model="inputTitle" placeholder="타이틀 입력">
            <button v-on:click="push">Push</button>
            <button v-on:click="pop">Pop</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list2: [
                {id: 1, title: 'Vue.js'},
                {id: 2, title: 'React.js'},
                {id: 3, title: 'Anguler.js'},
                {id: 4, title: 'Nuxt.js'},
                {id: 5, title: 'React Native'},
                {id: 6, title: 'Go'},
            ],
            inputTitle: '',
        };
    },
    methods: {
        push: function() {
            console.log('push');
            this.list2.push({id: this.list2.length + 1, title: this.inputTitle});
            this.inputTitle = '';
        },
        pop: function() {
            console.log('pop');
            this.list2.pop()
        },
        splice: function(obj) {
            console.log(obj);
            
        }
    },
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