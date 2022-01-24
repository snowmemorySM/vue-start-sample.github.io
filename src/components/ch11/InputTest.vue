<template>
    <div>
        <p>한 줄 바인딩</p>
        <div>
            <input v-model="message" placeholder="edit me">
            <p>message me = {{message}}</p>
        </div>
        <hr/>
        <p>여러 줄 바인딩</p>
        <div>
            <span>MultiLine message is:</span>
            <p style="white-space: pre-line;">{{message2}}</p>
            <br/>
            <textarea v-model="message2" placeholder="add multiple lines" rows="5" cols="30">
            </textarea>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: '',
            message2: '여러 줄에 작성한 메세지 입니다. 강제 줄 바꿈은 \\n\n 문자',
        };
    },
}
</script>