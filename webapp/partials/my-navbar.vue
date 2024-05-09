<template>
    <div>
        <b-navbar toggleable="lg" type-="dark" variant="primary">
            <b-navbar-brand href="#">Hector's Code Challenge Movie App</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"/>
            <!-- Right aligned nav items -->
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-form @submit="onSubmit">
                        <b-form-input
                            v-model="searchInput"
                            size="lg"
                            class="mr-lg-2"
                            aria-placeholder="Search"
                            @keyup.enter="$emit('search', searchInput)"/>
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
    method: {
        onSubmit(event) {
            event.preventDefault();
        }
    }
}
</script>
