<template>
    <div>
        <p>radio binding</p>
        <div>
            <input type="radio" id="one" value="One" v-model="picked" name="radio">
            <label for="one">One</label>
            <br/>
            <input type="radio" id="two" value="Two" v-model="picked" name="radio">
            <label for="two">Two</label>
            <br/>
            <span>Picked: {{picked}}</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            picked: '',

        };
    },
}
</script>
