<template>
    <div>
        <label>반복 렌더링</label>
        <VFor/>
        <ArrayEvent/>
        <OrderBy/>
    </div>
</template>

<script>
import VFor from '../components/ch06/VFor.vue'
import ArrayEvent from '../components/ch06/ArrayEvent.vue'
import OrderBy from '../components/ch06/OrderBy.vue'


export default {
    data() {
        return {
            
        };
    },
    components: {
        // eslint-disable-next-line vue/no-unused-components
        VFor,
        // eslint-disable-next-line vue/no-unused-components
        ArrayEvent,
        // eslint-disable-next-line vue/no-unused-components
        OrderBy
    }
}
</script>

<style scoped>

</style>