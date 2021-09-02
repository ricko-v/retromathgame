<template>
<div class="hello">
    <div class='container-fluid bg-dark d-flex justify-content-center' style='min-height:100vh'>
        <div class='row'>
            <div style='width:400px;max-width:100vw' class="m-0 nes-container is-dark is-rounded is-centered pt-4">
                <div style='height:20vh' class=''>
                    <h5>Retro <span class='text-danger'>Math</span> Game</h5>
                </div>
                <div style='height:30vh' class=''>
                    <i class="nes-octocat animate mt-5 mb-5 is-large"></i>
                </div>
                <div style='margin-top:10vh'>
                    <button type="button" class="nes-btn is-white" v-on:click='main'>Mulai</button>
                </div>
                <div>
                    <button type="button" class="nes-btn is-warning" v-on:click='tentang'>Tentang</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    mounted() {
        document.title = "Retro Math Game - Home";
    },
    methods: {
        main() {
            this.$router.push({
                path: '/main'
            })
        },
        tentang() {
            this.$router.push({
                path: '/tentang'
            })
        },
        credits() {
            this.$router.push({
                path: '/credits'
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

</style>
