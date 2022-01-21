<template>
    <div>
        <p><b>v-on:clcik 이벤트 리스닝</b></p>
        <div>
            <p>v-on:click이용한 이벤트 처리</p>
            <p>버튼을 클릭한 횟수 : {{counter}}</p>
            <button v-on:click="counter += 1">Add 1</button>
        </div>
        <div>
            <p>v-on 디렉티브의 단축표현(@)</p>
            <p>버튼을 클릭한 횟수 : {{counter1}}</p>
            <button @click="counter1 += 1">Add 1</button>
        </div>
        <div>
            <p>v-on에 여러 이벤트 추가(마우스 down/up)</p>
            <button v-on="{mousedown: doThis, mouseup: doThat}">Click</button>
        </div>
        <div>
            <p>폼 이벤트 리스너 구현(methods)</p>
            <p>{{message}}</p>
            <button @click="reverseMessage">메세지 뒤집기</button>
        </div>
        <div>
            <p>폼 이벤트 리스너 인자를 넣어서 실행(methods)</p>
            <p>{{message2}}</p>
            <button v-on:click="reverseMessage2('인자1')">메세지 뒤집기</button>
        </div>
        <hr/>
        <p><b>v-bind:value 속성</b></p>
        <div>
            <p>v-bind:value 속성을 이용해 값을 입력</p>
            <input type="text" v-bind:value="message3"/>
        </div>
        <hr/>
        <p><b>v-model 속성</b></p>
        <div>
            <p>v-model응 이용한 양방향 바인드 입력</p>
            <p>입력값 출력 : {{message4}}</p>
            <input type="text" v-model="message4"/>
        </div>
        <hr/>
        <div>
            <p>메소드 이벤트 리스너</p>
            <button @click="greet">Greet</button>
        </div>
        <hr/>
        <p>인라인 메소드 리스너</p>
        <div>
            <p>명시적으로 이벤트 정보 전달</p>
            <button @click="greet1($event)">Greet</button>
        </div>
        <p>v-on의 이벤트 리스너로 인자외 네이티브 이벤트를 함께 전달</p>
        <div>
            <p>명시적으로 이벤트 정보 전달</p>
            <button @click="warn('Form cannot be submitted yet.',$event)">submit</button>
        </div>
        <hr/>
        <p>이벤트 수식어</p>
        <div class="evevt-box1" @click="doTop">
            <div class="evevt-box2" @click="doMiddle">
                <input type="button" @click="doLast" value="제출">
            </div>
        </div>
        <hr/>
        <p>.prevent => 기본동작 취소이벤트.</p>
        <div>
            <form v-on:submit.prevent="doPrevent" action="/doPrevent">
                <input type="submit" value="Default Action Cancel">
            </form>
        </div>
        <hr/>
        <p>
            .stop => 자식 엘레멘트에서 이벤트 발생시 부모 엘레멘트로 이벤트가 전파되지 않음<br/>
            ex) (◯)div(자식 : 이벤트 발생) -> (❌)div(부모 : 이벤트가 발생하지않음)
        </p>
        <div>
            <div style="evevt-box2" @click="doMiddle2">
                <a href="https://www.gooogle.com" v-on:click.prevent.stop="doThat2">타임라인</a>
            </div>
        </div>
        <p>이벤트 리스너를 지정하지 않는경우 => 기본동작만 취함</p>
        <div>
            <form v-on:submit.prevent="">
                <input type="submit" value="Default Action Cancel">
            </form>
        </div>
        <hr/>
        <p>
            .capture => 클릭한 곳의 부모 엘레멘트부터 이벤트를 순처적으로 발생<br/>
            ex) 이벤트 순서<br/>
            div안에 click.capture를 설정한 경우 = div(부모) ⇨ div(자식) ⇨ input(자식에 자식)<br/>
            div안에 click.capture를 설정안한 경우 = div(부모) ⇦ div(자식) ⇦ input(자식에 자식)
        </p>
        <div>
            <div v-on:click.capture="doTop" class="evevt-box1">
                <div v-on:click.capture="doMiddle" class="evevt-box2">
                    <input type="button" v-on:click="doLast" value="제출">
                </div>
            </div>
        </div>
        <hr/>
        <p>.self => 타겟이된 엘리멘트만 이벤트 발생<br/>
            (부모 or 자식에게는 이벤트가 발생하지 않음)</p>
        <div>
            <div v-on:click.self="doTop" class="evevt-box1">
                <div v-on:click.self="doMiddle" class="evevt-box2">
                    <span v-on:click="doLast" style="background-color: green;">span elemant</span>
                </div>
            </div>
        </div>
        <hr/>
        <p>.once => 선택한 이벤트를 한번만 실행 가능(복수 실행 불가)</p>
        <div>
            <input type="button" v-on:click.once="doOnce" value="once on click">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 0,
            counter1: 0,
            message: 'Vue.js 배운건 좋은 선택!',
            message2: 'Vue.js 배운건 좋은 선택!',
            message3: 'Vue.js 배운건 좋은 선택!',
            message4: 'Vue.js 배운건 좋은 선택!',
            doThis: function(){
                console.log("mouse down")
            },
            doThat: function(){
                console.log("mouse up")
            },
            name: 'Vue.js',
        };
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('');
        },
        reverseMessage2: function(val) {
            this.message2 = this.message2.split('').reverse().join('') + val;
        },
        greet: function(event) {
            alert(`Hello ${this.name} !`);
            if (event) {
                alert(event.target.tagName);
            }
        },
        greet1: function(event) {
            alert(`Hello ${this.name} !`);
            if (event) {
                alert(event.target.tagName);
            }
        },
        warn: function(message, event) {
            if (event) {
                console.log('네이티브 이벤트에 접근');
                event.preventDefault();
            }
            alert(message);
        },
        doTop: function() {
            alert('첫번째 div에서 이벤트 발생');
        },
        doMiddle: function() {
            alert('두번째 div에서 이벤트 발생');
        },
        doLast: function() {
            alert('마지막 이벤트 발생');
        },
        doPrevent: function() {
            console.log("기본동작을 취소합니다.");
        },
        doMiddle2: function() {
            console.log("doMiddle 이벤트가 발생했습니다.");
        },
        doThat2: function() {
            console.log("이벤트가 발생했는데 .stop이벤트 수식어로 이벤트가 정지될까요?")
        },
        doOnce: function() {
            alert("이벤트를 한번만 실행!!!")
        }
    }
}
</script>

<style scoped>
.evevt-box1 {
    margin: 0 auto;
    background-color: blue;
    width: 200px;
    height: 200px;
}

.evevt-box2 {
    margin: 0 auto;
    background-color: magenta;
    width: 100px;
    height: 100px;
}
</style>