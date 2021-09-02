<template>
<div class="hello">
    <div class='container-fluid bg-dark d-flex justify-content-center p-0 m-0' style='min-height:100vh'>
        <div class='row'>
            <div id='tes' style='width:400px;max-width:100vw;height:100%' class="pb-3 m-0 nes-container is-dark is-rounded pl-0 pr-0">
                <div>
                    <!-- audio id='bgs' preload='auto' controls src='mixkit-retro-arcade-casino-notification-211.wav'></audio-->
                    <div class=''>
                        <small class='ml-4'>Score: {{ score }}</small>
                        <br>
                        <small class='ml-4'>Time: {{ time }}</small>
                    </div>
                </div>
                <div>
                    <center>
                        <div class="nes-balloon from-left is-dark w-75 mt-4 text-center">
                            <b>{{ x }} {{ operator }} {{ y }}</b>
                        </div>
                    </center>
                    <br>
                    <i class="nes-octocat animate mb-3 ml-4 is-large"></i>
                </div>
                <div class='d-flex align-content-center justify-content-center'>
                    <div>
                        <div v-for='kunci in pilihan' :key='kunci'>
                            <button type="button" v-on:click='cekJawaban(kunci)' class="nes-btn is-white">{{ kunci }}</button>
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
            pilihan: [],
            score: 0,
            x: '',
            y: '',
            operator: '',
            jawaban: '',
            highscore: '',
            time: 10,
            level: '',
            jawabku: '',
            angka: ''
        }
    },
    methods: {
        musikBenar(path) {
            let audiophile = new Audio();
            let link = path;
            audiophile.src = link;
            audiophile.load();
            audiophile.play();
        },
        shuffle(array) {
            var currentIndex = array.length,
                randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                // And swap it with the current element.
                [array[currentIndex], array[randomIndex]] = [
                    array[randomIndex], array[currentIndex]
                ];
            }

            return array;
        },
        timer() {
            setTimeout(() => {
                this.time--;
                if (this.time == 0) {
                    this.$router.push({
                        path: '/gameover'
                    })
                    localStorage.timeout = true;
                    localStorage.score = this.score;
                    if (localStorage.highscore <= this.score) {
                        localStorage.highscore = this.score;
                    }
                }
                this.timer();
            }, 1000);
        },
        Logic() {
            var acak = localStorage.angka;
            var nilaiX = Math.floor(Math.random() * acak);
            var nilaiy = Math.floor(Math.random() * acak);
            let key;
            this.x = nilaiX;
            this.y = nilaiy;
            localStorage.x = nilaiX;
            localStorage.y = nilaiy;
            if (this.level < 10) {
                key = parseInt(this.x) + parseInt(this.y);
                this.operator = '+';
                localStorage.angka++;
            } else if (this.level < 20 && this.level >= 10) {
                key = this.x - this.y;
                this.operator = '-';
                localStorage.angka++;
            } else if (this.level < 30 && this.level >= 20) {
                key = this.x * this.y;
                this.operator = '*';
                localStorage.angka++;
            } else {
                this.level = 0;
                key = parseInt(this.x) + parseInt(this.y);
                this.operator = '+';
            }
            this.jawaban = key;
            localStorage.jawaban = key;
            localStorage.operator = this.operator;
            let arrJawaban = [parseInt(key) + 1, parseInt(key) + 2, key, parseInt(key) + 10];
            for (var i in this.shuffle(arrJawaban)) {
                this.pilihan.push(arrJawaban[i]);
            }
        },
        cekJawaban(q) {
            //var awr = document.getElementById('bgs');
            if (this.jawaban == q) {
                // awr.load();
                // awr.play();
                //this.musikBenar('mixkit-retro-arcade-casino-notification-211.wav')
                document.getElementById('mixkit-retro-arcade-casino-notification-211.wav').play();
                this.pilihan = [];
                this.score++;
                this.level++;
                this.time = 10;
                this.Logic();
            } else {
                localStorage.jawabku = q;
                localStorage.timeout = false;
                if (localStorage.highscore <= this.score) {
                    localStorage.highscore = this.score;
                }
                localStorage.score = this.score;
                this.$router.push({
                    path: '/gameover'
                });
                this.Logic = () => {};
                this.timer = () => {};
            }
        }
    },
    mounted() {
        localStorage.timeout = false;
        document.title = "Retro Math Game - Play";
        // let audiophile = new Audio();

        // function bg(path) {
        //     let link = path;
        //     audiophile.src = link;
        //     audiophile.load();
        // }

        // bg('../assets/mixkit-retro-arcade-casino-notification-211.wav');
        if (!localStorage.highscore) {
            localStorage.highscore = 0;
        }
        localStorage.angka = 10;
        this.timer();
        this.Logic();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

</style>
