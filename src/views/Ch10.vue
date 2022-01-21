<template>
    <div>
        <p><b>이벤트 리스너/이벤트 수식어</b></p>
        <test-v-on/>
        <hr/>
        <key-event/>
        <hr/>
        <mouse-event/>
    </div>
</template>

<script>
import VOn from '../components/ch10/VOn.vue'
import KeyEvent from '../components/ch10/KeyEvent.vue'
import MouseEvent from '../components/ch10/MouseEvent.vue'

export default {
    components: {
        // eslint-disable-next-line vue/no-unused-components
        'test-v-on': VOn,
        // eslint-disable-next-line vue/no-unused-components
        'key-event':KeyEvent,
        // eslint-disable-next-line vue/no-unused-components
        'mouse-event': MouseEvent
    }
}
</script>