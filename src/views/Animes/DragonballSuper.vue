<template>
    <div class="container-banner">
        <div class="banner">
            <img :src="banner" :alt="alt">
        </div>
        <div class="container">
            <div class="container-info">
                <div class="titulo">
                    <h1>{{ titulo }}</h1>
                </div>
                <div class="info">
                    <p>{{ sinopseA }}<span v-show="mostrar_texto">{{ sinopseB }}</span></p>
                    <button class="btn-ver" @click="verMais">{{ textoBotao }}</button>
                </div>
            </div>
            <div class="trailer">
                <iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/cK9WMwFRGWs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DemonSlayer',
        data() {
            return {
                mostrar_texto: false,
                textoBotao: 'Ver mais',
                sinopseA: '18 anos depois, temos uma nova saga de Dragon Ball das mãos de seu criador, Akira Toriyama. Após a derrota de Majin Buu, Goku arranja um novo emprego como... fazendeiro de nabos? Agora que a Terra está em paz, nosso heróis levam vidas mundanas, mas não por muito tempo. Longe dali,',
                sinopseB: ' Beerus, o poderoso Deus da Destruição, recebe uma profecia de que encontrará seu fim nas mãos de um ser ainda mais poderoso, e sua busca pelo Deus dos Saiya-jins o traz para a Terra. Será que Goku e seus amigos conseguirão derrotar seu mais poderoso inimigo até então?',
                banner: '/banner-pagina/dragonball-super-banner.jpeg',
                alt: 'dragonball-super-banner',
                titulo: 'Dragon Ball Super'
            }
        },
        methods: {
            verMais() {
                this.mostrar_texto = !this.mostrar_texto
                if(!this.mostrar_texto) {
                    this.textoBotao = 'Ver mais'
                } else {
                    this.textoBotao = 'Ver menos'
                }
            }
        },
    }
</script>

<style scoped>

    .banner {
        display: flex;
        justify-content: center;
        align-content: center;
        background-color: #2b2b2b;
    }

    .banner img {
        width: 849px;
        height: 479px;
    }
    .info, .titulo {
        color: aliceblue;
        width: 600px;
        padding-top: 2rem;
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    .container-info {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .video {
        padding: 2rem;
    }

    .btn-ver {
        font-size: 16px;
        cursor: pointer;
        color: aliceblue;
        border: none;
        background: none;
    }
    .btn-ver:hover {
        color: #2b2b2b;
        transition: 0.5s;
        padding: 2px;
    }

    @media (min-width: 300px) and (max-width: 500px) {
        .banner img {
            width: 300px;
            height: 169px;
        }

        .info, .titulo {
            width: 300px;
        }
        .titulo {
            font-size: 12px;
        }
        .info {
            font-size: 14px;
        }
        .video {
            width: 420px;
            height: 195px;
        }
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        .banner img {
            width: 500px;
            height: 282px;
        }
        .info, .titulo {
            width: 450px;
        }
        .titulo {
            font-size: 12px;
        }
        .info {
            font-size: 14px;
        }
    }
</style>