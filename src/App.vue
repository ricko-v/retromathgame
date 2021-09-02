<template>
<div id="app">
    <iframe hidden allow='autoplay' id='musik'></iframe>
    <audio hidden v-for='link in arrLink' preload='auto' muted v-bind:id='link' controls v-bind:key='link' v-bind:src='link'></audio>
    <router-view id='main' v-if='ld' />
</div>
</template>

<script>
import firebase from 'firebase/app'

export default {
    data() {
        return {
            ld: false,
            arrLink: ['mixkit-arcade-fast-game-over-233.wav', 'mixkit-retro-arcade-casino-notification-211.wav']
        }
    },
    methods: {
        lding() {
            this.ld = true;
        }
    },
    mounted() {
        var loa = () => {
            this.lding();
        }

        function lod() {
            var player = document.getElementById('musik');
            var request = new XMLHttpRequest();
            request.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    loa();
                    var url = URL.createObjectURL(request.response);
                    player.src = url;
                    player.addEventListener('loaded', function () {
                        URL.revokeObjectURL(player.src);
                    });
                    //player.play();
                    setTimeout(() => {
                        lod();
                    }, 30000);
                    // Typical action to be performed when the document is ready:
                }
            };
            request.open("GET", 'bg.mp3', true);
            request.responseType = 'blob';
            request.send();
        }

        lod();
    },
    created() {
        // function lod(link) {
        //     var request = new XMLHttpRequest();
        //     request.onreadystatechange = function () {
        //         if (this.readyState == 4 && this.status == 200) {
        //             var url = URL.createObjectURL(request.response);
        //             console.log(url);
        //         }
        //     };
        //     request.open("GET", link, true);
        //     request.responseType = 'blob';
        //     request.send();
        // }

        // let arrLink = ['mixkit-arcade-fast-game-over-233.wav', 'mixkit-retro-arcade-casino-notification-211.wav'];

        // for (let p in arrLink) {
        //     lod(arrLink[p]);
        // }

        const firebaseConfig = {
            apiKey: "AIzaSyAV1soBIHraaascddoC7Vi0zkqXc5BssKQ",
            authDomain: "retromathgame.firebaseapp.com",
            projectId: "retromathgame",
            storageBucket: "retromathgame.appspot.com",
            messagingSenderId: "951815115833",
            appId: "1:951815115833:web:383f32e10a5a78ec10a9e8",
            measurementId: "G-3YTC09FCTX"
        };

        firebase.initializeApp(firebaseConfig);
        firebase.database().ref('/users').on('value', (item) => {
            console.log(item.val());
        })
    }
}
</script>

<style>
#app {
    font-family: 'Press Start 2P', cursive;
}

button {
    width: 200px;
    margin-top: 10px !important;
}
</style>
