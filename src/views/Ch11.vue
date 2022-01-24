<template>
    <div>
        <h1>Form input binding </h1>
        <hr/>
        <input-test/>
        <hr/>
        <checkbox-test/>
        <hr/>
        <radio-test/>
        <hr/>
        <select-test/>
        <hr/>
        <value-binding-test/>
        <hr/>
        <text-element-test/>
    </div>
</template>

<script>
import InputTest from '../components/ch11/InputTest.vue'
import CheckBoxTest from '../components/ch11/CheckBoxTest.vue'
import RadioTest from '../components/ch11/RadioTest.vue'
import SelectTest from '../components/ch11/SelectTest.vue'
import ValueBindingTest from '../components/ch11/ValueBindingTest.vue'
import TextElement from '../components/ch11/TextElement.vue'




export default {
    data() {
        return {

        };
    },
    components: {
        // eslint-disable-next-line vue/no-unused-components
        'input-test': InputTest,
        // eslint-disable-next-line vue/no-unused-components
        'checkbox-test': CheckBoxTest,
        // eslint-disable-next-line vue/no-unused-components
        'radio-test': RadioTest,
        // eslint-disable-next-line vue/no-unused-components
        'select-test': SelectTest,
        // eslint-disable-next-line vue/no-unused-components
        'value-binding-test': ValueBindingTest,
        // eslint-disable-next-line vue/no-unused-components
        'text-element-test': TextElement,
    }
}
</script>

<style scoped>

</style>