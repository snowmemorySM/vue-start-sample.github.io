<template>
    <div>
        <VText></VText>
        <VHtml></VHtml>
        <Vbind></Vbind>
        <VModel></VModel>
        <filter-test></filter-test>
    </div>
</template>

<script>

import VText from '../components/ch05/VText.vue'
import VHtml from '../components/ch05/VHtml.vue'
import Vbind from '../components/ch05/Vbind.vue'
import VModel  from '../components/ch05/VModel.vue'
import Filter  from '../components/ch05/Filter.vue'

export default {
    components: {
        // eslint-disable-next-line vue/no-unused-components
        VText,
        // eslint-disable-next-line vue/no-unused-components
        VHtml,
        // eslint-disable-next-line vue/no-unused-components
        Vbind,
        // eslint-disable-next-line vue/no-unused-components
        VModel,
        // eslint-disable-next-line vue/no-unused-components
        'filter-test': Filter,
    }
}
</script>

<style scoped>

</style>