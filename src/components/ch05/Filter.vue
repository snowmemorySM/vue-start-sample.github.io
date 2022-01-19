<template>
    <div>
        <div>
            전역 필터 사용 => main.js을 참조
            <p>
                전역 필터 적용 입력값 : {{i}} => 필터 적용값 : {{i | multiply_number}}
            </p>
        </div>
        <div>
            한정 필터
            <p>
                한정 필터 내 복수필터 사용<br/>
                입력값 : {{i}} => 복수 필터 결과 값 : {{i | multiply_number2(3, j) | add_number}}
            </p>
        </div>
        <div class="container">
            <table>
                <tr class="first">
                    <th width="15%">
                        필터명
                    </th>
                    <th width="45%">
                        설명
                    </th>
                    <th width="20%">
                        입력값
                    </th>
                    <th width="20%">
                        사용결과
                    </th>
                </tr>
                <tr>
                    <td>capitalize</td>
                    <td>문자열의 첫번째 문자를 대문자로 변환</td>
                    <td>hello</td>
                    <td>{{'hello' | capitalize}}</td>
                </tr>
                <tr>
                    <td>uppercase</td>
                    <td>문자열을 대문자로 변환</td>
                    <td>hello</td>
                    <td>{{'hello' | uppercase}}</td>
                </tr>
                <tr>
                    <td>lowercase</td>
                    <td>문자열을 소문자로 변환</td>
                    <td>HELLO</td>
                    <td>{{'HELLO' | lowercase}}</td>
                </tr>
                <tr>
                    <td>currency</td>
                    <td>숫자를 받아 통화단위로 변환</td>
                    <td>9999.87</td>
                    <td>{{9999.87 | currency}}</td>
                </tr>
                <tr>
                    <td>json</td>
                    <td>객체를 json형식으로 변환</td>
                    <td>[{name: 'test',<br/>
                        lang: 'TypeScript'}]</td>
                    <td>{{list | json}}</td>
                </tr>
                <tr>
                    <td>date</td>
                    <td>날짜를 포맷형식으로 변환</td>
                    <td>형식 : YYYY-MM-DD</td>
                    <td>{{write_date | date('YYYY-MM-DD HH:mm:ss sss')}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
import accounting from 'accounting-js'
import moment from 'moment'

export default {
    data() {
        return {
            i: 5,
            j: 2,
            list: [{name: 'test',lang: 'TypeScript'}],
            write_date: new Date(),
        };
    },
    filters: {
        'multiply_number2': function(value, number, j) {
            if (j > 0) {
                return value * (number + j);
            } else {
                return value * number;
            }
        },
        'add_number': function(value) {
            return value + 4;
        },
        'capitalize': function(text) {
            return text[0].toUpperCase() + text.slice(1);
        },
        'uppercase': function(text) {
            return text.toUpperCase();
        },
        'lowercase': function(text) {
            return text.toLowerCase();
        },
        'currency': function(text) {
            return accounting.formatMoney(text);
        },
        'json': function(entry) {
            return JSON.stringify(entry);
        },
        'date': function(entry, format) {
            return moment(entry).format(format)
        }
    }
}
</script>

<style scoped>
.container {
    width: 800px;
    margin: 0 auto;
}

.container table {
    width: 100%;
    border-collapse: collapse;
    
}

.container table tr {
    height: 30px;
}

.container table th {
    background-color: gray;
    border: 1px solid white;
}

.container table td {
    border: 1px solid gray;
}
</style>