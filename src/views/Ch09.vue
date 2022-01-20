<template>
    <div>
        <p><b>클래스와 스타일 바인딩</b></p>
        <SetCSS/>
        <hr/>
        <StyleBinding/>
    </div>
</template>

<script>
import SetCSS from '../components/ch09/SetCSS.vue'
import StyleBinding from '../components/ch09/StyleBinding.vue'

export default {
    components: {
        // eslint-disable-next-line vue/no-unused-components
        SetCSS,
        // eslint-disable-next-line vue/no-unused-components
        StyleBinding
    }    
}
</script>

<style scoped>

</style>