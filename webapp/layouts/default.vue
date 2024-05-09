<template>
</template>
<script>
import navbar from '@/partials/my-navbar'
import SearchResults from '@/components/SearchResults';
export default {
    components: {
        navbar,
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
