<template>
    <div>
        <p>
            CSS클래스를 하나만 적용
        </p>
        <div v-bind:class="{active: isActive}">active css클래스 적용</div>
        <p>
            CSS클래스를 2개이상 적용
        </p>
        <div v-bind:class="{active: isActive, 'text-danger': hasError}">active, text-danger css클래스 적용</div>
        <p>
            CSS클래스를 인스턴스 상태로 적용
        </p>
        <div v-bind:class="classObject">CSS classObjec 적용</div>
        <p>
            computed에서 CSS클래스 적용
        </p>
        <div v-bind:class="classObject2">CSS classObjec를 계산된 속성에서 읽어오기</div>
        <p>
            리터럴 배열로 CSS클래스 적용
        </p>
        <div v-bind:class="[activeClass, errorClass]">abc</div>
        <p>
            리터럴 배열 요소로 CSS클래스 적용
        </p>
        <div v-bind:class="['active', 'text-danger']">abc</div>
        <p>
            v-bind를 이용해서 CSS클래스 적용
        </p>
        <div class="active" v-bind:class="[errorClass]">abc</div>
        <p>
            리터럴 배열 요소값으로 3항 조건식으로 CSS클래스 적용
        </p>
        <div v-bind:class="isActive ? activeClass : errorClass">abc</div>
        <p>
            리터럴 배열 요소로 객체 리터럴 CSS클래스 적용
        </p>
        <div v-bind:class="[{ active: isActive }, errorClass]">abc</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isActive: true,
            hasError: true,
            classObject: {
                active: true,
                'text-danger': true,
            },
            error: null,
            activeClass: 'active',
            errorClass: 'text-danger',

        };
    },
    computed: {
        classObject2: function() {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
            }
        }
    }
}
</script>

<style scoped>
.active {
    border: solid 1px #00f;
}

.text-danger {
    color: magenta;
}
</style>