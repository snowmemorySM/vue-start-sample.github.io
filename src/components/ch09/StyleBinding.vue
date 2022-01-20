<template>
    <div>
        <p><b>인라인 스타일 바인딩</b></p>
        <p>
            인라인 문법으로 css적용
        </p>
        <div v-bind:style="{color: activeColor, fontSize: fontSize + 'px'}">abc</div>
        <p>
            인라인 스타일에 적용할 스타일을 인스턴스 상태값으로 적용
        </p>
        <div v-bind:style="styleObject">abc</div>
        <p>
            인라인 스타일 그룹을 여래개 적용
        </p>
        <div v-bind:style="[styleObject, overridingStyles]">abc</div>
        <p>
            브라우저 전용으로 CSS속성 적용
        </p>
        <div v-bind:style="styleObject3">abc</div>
        <p>
           CSS속성에 다중 값 설정
        </p>
        <div v-bind:style="styleObject4">abc</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeColor: 'red',
            fontSize: 30,
            styleObject: {
                color: 'red',
                fontSize: '13px'
            },
            overridingStyles: {
                color: 'green',
                fontSize: '9px'
            }
        };
    },
    computed: {
        styleObject3: function () {
            return {
                'margin-before': '4em',
                background: 'blue'
            }
        },
        styleObject4: function() {
            return {
                'display': ['-webkit-box', '-ms-flexbox', '-moz-box']
            }
        }
    }
}
</script>

<style scoped>

</style>