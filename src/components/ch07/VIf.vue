<template>
    <div class="test-box">
        <div><b>v-if 디렉티브</b></div>
        <table>
            <tr>
                <th width=15%>디렉티브</th>
                <th width=25%>설명</th>
                <th width=30%>사용법</th>
                <th width=30%>결과</th>
            </tr>
            <tr>
                <td>v-if</td>
                <td>일반적인 if문</td>
                <td><span v-text="cond"></span></td>
                <td><span v-if="id == 1">값이 1입니다.</span></td>
            </tr>
            <tr>
                <td>v-else-if</td>
                <td>일반적인 else if 문</td>
                <td><span v-text="cond2"></span></td>
                <td>
                    <span v-if="id == 1">값이 1입니다.</span>
                    <span v-else-if="id == 2">값이 2입니다.</span>
                </td>
            </tr>
            <tr>
                <td>v-else</td>
                <td>일반적인 else 문</td>
                <td><span v-text="cond3"></span></td>
                <td>
                    <span v-if="id2 == 1">값이 1입니다.</span>
                    <span v-else>값이 1이 아닙입니다.</span>
                </td>
            </tr>
            <tr>
                <td>v-show</td>
                <td>화면에 표시할지 안할지를 결정</td>
                <td>
                    <span v-text="cond4"></span>
                    조건<br/>
                    useLocation = true<br/>
                    useLocation2 = false
                </td>
                <td>
                    <br/>
                    <br/>
                    비표시<br/>
                    <span v-show="useLocation">useLocation=true</span>
                    <span v-show="useLocation2">useLocation2=false</span>
                </td>
            </tr>
        </table>
        <div>
            <b>v-if, v-else-if, v-else사용</b><br/>
            id2의 값이 {{id2}}인경우 결과 출력 => 
            <span v-if="id2 == 1">값이 1입니다.</span>
            <span v-else-if="id2 == 2">값이 2입니다.</span>
            <span v-else>값이 1 또는 2입니다.</span>
        </div>
        <div>
            <b>v-for와<span class="text-deco">v-if</span> 사용</b><br/>
            주의(책의 내용과 다름) : vue.js 가이드라인에 의거하여 태그 안에 v-if와 v-for를 동시에 사용할수 없음.<br/>
            [computed]안에 v-if에 대한 filter처라를 추가해야함.<br/>
            items의 데이터에서 국가가 한국인거만 이름을 표시
            <ul>
                <li v-for="(item, index) in activeItems" :key="index">
                    {{item.name}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: 1,
            id2: 2,
            cond: '<tag명 v-if="조건">',
            cond2: '<tag명 v-else-if="조건">',
            cond3: '<tag명 v-else>',
            cond4: '<tag명 v-show="조건">',
            useLocation: false,
            useLocation2: true,
            items: [
                {name: 'Kakao', location: 'KR'},
                {name: 'LINE', location: 'KR'},
                {name: 'Facebook', location: 'US'},
            ]
        };
    },
    computed: {
        activeItems: function() {
            return this.items.filter(function(item) {
                return item.location == 'KR'
            })
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
.text-deco {
    text-decoration: line-through;
    color: #F00;
}
</style>