<template>
<div>
    <div class='container-fluid bg-dark d-flex justify-content-center p-0 m-0' style='min-height:100vh'>
        <div class='row'>
            <div style='width:400px;max-width:100vw' class='m-0 nes-container is-dark is-rounded pl-0 pr-0 pb-3'>
                <!--div>
                    <audio id='bgs' controls autoplay src='mixkit-arcade-fast-game-over-233.wav'></audio>
                </div-->
                <div class='pl-4'>
                    <small>Score: {{ score }}</small>
                    <br>
                    <small><span class='text-warning' v-if='nhs'>Baru</span> HI-Score: {{ highscore }}</small>
                </div>
                <div>
                    <center>
                        <div class="nes-balloon from-left is-dark w-75 mt-5 text-center">
                            <b class='text-danger'>[ GAMEOVER ]</b>
                            <br>
                            <small>{{ x }} {{ operator }} {{ y }} = {{ jawaban }}</small>
                            <br>
                            <small v-if='timeout == "false"'>jawabanmu {{ jawabku }}</small>
                            <small v-if='timeout == "true"'>waktu habis</small>
                        </div>
                    </center>
                    <br>
                    <i class="nes-octocat animate mb-3 ml-4 is-large"></i>
                </div>
                <div class='d-flex align-content-center justify-content-center mt-4'>
                    <div>
                        <div>
                            <button type="button" v-on:click='lagi' class="nes-btn is-white">Mulai Lagi</button>
                        </div>
                        <div>
                            <button type="button" v-on:click='home' class="nes-btn is-warning">Beranda</button>
                        </div>
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
            x: localStorage.x,
            y: localStorage.y,
            operator: localStorage.operator,
            jawaban: localStorage.jawaban,
            jawabku: localStorage.jawabku,
            score: localStorage.score,
            highscore: localStorage.highscore,
            nhs: false,
            timeout: localStorage.timeout
        }
    },
    created() {
        function lod() {
            
            var request = new XMLHttpRequest();
            request.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    var url = URL.createObjectURL(request.response);
                    return url;
                }
            };
            request.open("GET", '/mixkit-arcade-fast-game-over-233.wav', true);
            request.responseType = 'blob';
            request.send();
        }

        lod();
    },
    mounted() {
        if (localStorage.highscore == localStorage.score && parseInt(localStorage.score) !== 0) {
            this.nhs = true;
        }
        document.title = "Retro Math Game - Gameover";
        document.getElementById('mixkit-arcade-fast-game-over-233.wav').play();
        // let audiophile = new Audio();

        // function bg(path) {
        //     let link = path;
        //     audiophile.src = link;
        //     audiophile.load();
        //     audiophile.play();
        // }
        // bg('mixkit-arcade-fast-game-over-233.wav');
    },
    methods: {
        home() {
            this.$router.push({
                path: '/'
            })
        },
        lagi() {
            this.$router.push({
                path: '/main'
            })
        }
    }
}
</script>
