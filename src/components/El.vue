<template>
    <div>
        <label>el</label>
        <div id="markup">
            message : {{markup}}
        </div>
    </div>
</template>
<script>
export default {
    el: '#markup',
    template: "<h2>{{markup}}</h2>",
    data() {
        return {
            markup: "새로운 마크업"
        };
    },
    created: {
        
    }
    
}
</script>