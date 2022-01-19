<template>
    <div>
        <form method="post" action="/search">
            <label id="text_search_word">검색어</label>
            <input type="text" v-model="search_word" id="search_word">
            <input type="submit" value="찾기">
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            search_word: '',
        };
    },
}
</script>