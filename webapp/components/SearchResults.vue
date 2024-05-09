<template>
    <b-overlay class="results">
        <div class="results-list">
            <SearchResult
                v-for="movie in results"
                :key="movie.movie_id"
                :movie="movie"/>
        </div>
    </b-overlay>
</template>
<script>
import SearchResult from '@/components/SearchResult';
export default {
    components: {
        SearchResult
    },
    props: {
        results: {
            type: Array,
            required: true,
        },
    },
    emits: ['clearResults'],
    data() {
        return  {
            overlay: true
        }
    }
}
</script>
<style scoped>
.results {
    background-color: rgba(0,0,0,0.2);
    overflow-y: scroll;
    display: flex;
    flex-flow: row wrap;
}
</style>