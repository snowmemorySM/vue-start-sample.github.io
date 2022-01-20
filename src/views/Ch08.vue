<template>
    <div>
        <div><b>계산된 속성과 감시자</b></div>
        <!-- <Computed/> -->
        <Watch/>
    </div>
</template>

<script>

import Computed from '../components/ch08/Computed.vue'
import Watch from '../components/ch08/Watch.vue'

export default {
    data() {
        return {
            
        };
    },
    components: {
        // eslint-disable-next-line vue/no-unused-components
        Computed,
        // eslint-disable-next-line vue/no-unused-components
        Watch
    }
}
</script>

<style scoped>

</style>