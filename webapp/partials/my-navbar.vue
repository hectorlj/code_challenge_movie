<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="primary">
            <b-navbar-brand type="light" href="#">Hector's Code Challenge Movie App</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"/>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-form @submit="onSubmit">
                        <b-form-input
                            v-model="searchInput"
                            size="lg"
                            class="mr-lg-2"
                            aria-placeholder="Search"
                            @keyup.enter="$emit('search', searchInput)"
                        />
                        <b-button
                            size="lg"
                            class="my-2 my-lg-0"
                            @click="$emit('search', searchInput)"
                        >Search</b-button>
                    </b-nav-form>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
<script>
export default {
    emits: ['search'],
    data() {
        return {
            searchInput: '',
        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault();
        }
    }
}
</script>
<style lang="scss">
// Variable override of primary color.
$primary: #11406b;

// Boostrap and its default variables
@import "../node_modules/bootstrap/scss/bootstrap";
</style>
