<template>
    <div class="test-box">
        <p><b>키 수식어(keyup, keydown 등등)</b></p>
        <table>
            <tr>
                <th width=40%>키 이벤트</th>
                <th width=60%>테스트</th>
            </tr>
            <tr>
                <td>.enter : 엔터키</td>
                <td><input type="text" v-on:keyup.enter="doEnter"></td>
            </tr>
            <tr>
                <td>.tab : 탭키</td>
                <td><input type="text" v-on:keydown.tab="doTab" value="keydown"></td>
            </tr>
            <tr>
                <td>.esc : esc 키</td>
                <td><input type="text" v-on:keyup.esc="doEsc"></td>
            </tr>
            <tr>
                <td>.sapce : 스페이스 키</td>
                <td><input type="text" v-on:keyup.space="doSpace"></td>
            </tr>
            <tr>
                <td>.alt : alt 키</td>
                <td><input type="text" @keyup.alt.c="clear"></td>
            </tr>
            <tr>
                <td>.ctrl : ctrl 키(MAC??)</td>
                <td><div @click.ctrl="doCtrl">do ctrl</div></td>
            </tr>
            <tr>
                <td>.meta<br/> 윈도우 : 윈도우 키 <br/> MAC : command key</td>
                <td style="vertical-align: middle;"><button @click.meta="onMetaKey">Meta key + 마우스 클릭</button></td>
            </tr>
            <tr>
                <td>.exact : 보조키(shift + alt 등등)</td>
                <td>
                    <button @click.alt.shift="onAltShift">alt + shift</button>
                    <button @click.alt="onAlt">alt</button>
                </td>
            </tr>
        </table>

    </div>
</template>

<script>
export default {
    data() {
        return {
            
        };
    },
    methods: {
        doEnter: function() {
            alert("Enter key입력");
        },
        doTab: function() {
            alert("Tab key입력");
        },
        doEsc: function() {
            alert("ESC key click");
        },
        doSpace: function() {
            alert("space key click");
        },
        clear: function() {
            alert("Alt + c key 동시 클릭");
        },
        doCtrl: function() {
            alert("Ctrl key click");
        },
        onMetaKey: function() {
            alert("meta key click");
        },
        onAltShift: function() {
            alert("alt + shift key click");
        },
        onAlt: function() {
            alert("alt key click");
        },
    }
}
</script>

<style scoped>
.test-box {
    position: relative;
    width: 600px;
    display: block;
    margin: 0 auto;
    margin-top: 20px;
}

.test-box table {
    border: 1px solid #000;
    width: 100%;
    border-collapse: collapse;
}

.test-box table th {
    background-color: lightslategrey;
    border: 1px solid #000;
}

.test-box table td {
    border: 1px solid lightslategrey;
    vertical-align: top;
}
</style>