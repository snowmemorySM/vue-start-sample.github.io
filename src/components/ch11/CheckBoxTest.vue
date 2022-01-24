<template>
    <div>
        <p>checkbox binding</p>
        <div>
            <label>Click checkbox : </label>
            <input type="checkbox" id="checkbox" v-model="checked">
            <label for="checkbox">{{checked}}</label>
        </div>
        <hr>
        <p>다중 checkbox binding</p>
        <div>
            <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
            <label for="jack">Jack</label>
            <input type="checkbox" id="john" value="John" v-model="checkedNames">
            <label for="john">John</label>
            <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
            <label for="mike">Mike</label>
            <br/>
            <span>
                Checked names: {{checkedNames}}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked: true,
            checkedNames: ['Mike']
        };
    },
}
</script>