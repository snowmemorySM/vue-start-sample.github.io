<template>
    <div class="test-box">
        <p><b>마우스 버튼</b></p>
        <table>
            <tr>
                <th width=30%>키 이벤트</th>
                <th width=70%>테스트</th>
            </tr>
            <tr>
                <td>.left</td>
                <td><input type="button" v-on:click.left="btnLeft" value="마우스 왼쪽버튼 클릭"></td>
            </tr>
            <tr>
                <td>.contextmenu</td>
                <td><input type="button" v-on:contextmenu="btnRight" value="마우스 오른쪽버튼 클릭"></td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    methods: {
        btnLeft: function() {
            alert("마우스 왼쪽버튼 클릭");
        },
        btnRight: function() {
            alert("마우스 오른쪽버튼 클릭");
        }
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