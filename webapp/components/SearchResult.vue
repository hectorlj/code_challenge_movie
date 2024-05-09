<template>
    <div class="result-card">
        <div class="left">
            <h1 class="movie-title">
                {{ movie.title }}
            </h1>
            <p class="movie-popularity">{{ movie.popularity_summary }}</p>
        </div>
        <div class="right">
            <div class="movie-poster">
                <img :src="movie.poster_image_url"/>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        movie: {
            type: Object,
            required: true,
        }
    },
}
</script>
<style>
.result-card {
	border-bottom: rgba(0, 0, 0, 1) solid 1px;
	margin: 0px 25px;
	padding: 10px 0px 10px 0px;
	flex: 1;
	display: flex;
	flex-direction: row;
}

.left {
	flex-grow: 3;
	flex: 2;
	background-position: center;
	background-repeat: no-repeat;
}
.right {
	flex: 2;
	margin-right: 20px;
}
.overview {
	padding: 10px 20px 10px 20px;
}

.movie-poster {
	display: flex;
	justify-content: center;
	align-items: flex-end;
}
</style>