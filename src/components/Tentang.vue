<template>
<div class="hello">
    <div class='container-fluid bg-dark d-flex justify-content-center p-0' style='min-height:100vh'>
        <div class='row'>
            <div style='width:400px;max-width:100vw;display:flex;justify-content:center;align-items:center' class="m-0 nes-container is-dark is-rounded pt-4">
                <div class=''>
                    <div class='mb-4 d-flex justify-content-center'>
                        <h5 class='position-fixed text-center' style='top:30px'>Tentang</h5>
                    </div>
                    <div class='ml-3'>
                        <small>Retro Math Game adalah sebuah game matematika dasar dengan bertemakan retro.</small>
                        <br>
                        <br>
                        <small>Develop by: ricko-v</small>
                        <br>
                        <br>
                        <small>Credits Musik:</small>
                        <ul>
                            <li><small>https://mixkit.co/</small></li>
                        </ul>
                        <br>
                        <div class='d-flex align-items-center justify-content-center'>
                            <button type="button" v-on:click='home' class="nes-btn is-warning">Beranda</button>
                        </div>
                        <small class='position-fixed fixed-bottom text-center' style='bottom:30px;'>Made with happy</small>
                    </div>
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
        home() {
            this.$router.push({
                path: '/'
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

</style>
