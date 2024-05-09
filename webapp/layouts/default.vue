<template>
    <div>
        <Navbar @search="searchInput"/>
        <SearchResults
            v-if="showResults"
            :results="results"
            :search-input="searchInput"
            @clearResults="clearResults()"
        />
        <div v-else class="no-results">
            <strong>{{ no_result }}</strong>
        </div>
    </div>
</template>
<script>
import Navbar from '@/partials/my-navbar'
import SearchResults from '@/components/SearchResults';
export default {
    components: {
        Navbar,
        SearchResults
    },
    data() {
        return {
            results: [],
            no_result: ''
        }
    },
    computed: {
        showResults() {
            return this.results.length > 0
        }
    },
    watch: {
        results() {},
        no_result() {} 
    },
    methods: {
        searchInput(value) {
            this.$axios
                .$get(`/movies?search=${value}`)
                .then((res) => {
                    this.results = res
                    if (this.results.length === 0) {
                        this.no_result = "No Results Found"
                    }
                })
                .catch((err) => {
                    console.error(err)
                    this.results = []
                    this.no_result = "No Results Found"
                })
        },
        clearResutls() {
            this.results = []
        }
    }
}
</script>
<style>
.no-results {
    text-align: center;
    background-color: white;
    align-items: center;
}
</style>
