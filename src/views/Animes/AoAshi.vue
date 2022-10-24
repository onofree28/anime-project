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
                    <p>{{ sinopseA }}<span v-show="mostrar_texto">{{ sinopseB }}</span></p><br>
                    <button class="btn-ver" @click="verMais">{{ textoBotao }}</button>
                </div>
                <a class="btn-assista" :href="link">Assista aqui!</a>
            </div>
            <div class="trailer">
                <iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/8r15dDAqn_o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AoAshi',
        data() {
            return {
                mostrar_texto: false,
                textoBotao: 'Ver mais',
                sinopseA: 'Ashito Aoi é um adolescente que mora no interior do Japão e é o artilheiro de um time de várzea. Após perder a final do torneio sub-15, ele é recrutado por Tatsuya Fukuda, técnico da categoria de base do Tokyo City Esperion FC, um dos maiores times da J-League, a primeira divisão do...',
                sinopseB: ' campeonato japonês. Tatsuya quer transformar o Esperion em um time de calibre mundial, e encontra em Ashito um talento a ser refinado e desenvolvido. Ao ouvir isso, Ashito aceita a oferta e decide se candidatar para a peneira. Perda, amadurecimento e amizade não faltam nesta obra cheia de espírito juvenil!',
                banner: '/banner-pagina/ao-ashi-banner-pagina.jpeg',
                alt: 'ao-ashi-banner',
                titulo: 'AoAshi',
                link: 'https://www.crunchyroll.com/pt-br/series/G4PH0WX5J/aoashi'
            }
        },
        methods: {
            verMais() {
                this.mostrar_texto = !this.mostrar_texto
                if(!this.mostrar_texto) {
                    this.textoBotao = 'Ver mais'
                    this.sinopseA = 'Ashito Aoi é um adolescente que mora no interior do Japão e é o artilheiro de um time de várzea. Após perder a final do torneio sub-15, ele é recrutado por Tatsuya Fukuda, técnico da categoria de base do Tokyo City Esperion FC, um dos maiores times da J-League, a primeira divisão do...'
                } else {
                    this.textoBotao = 'Ver menos'
                    this.sinopseA = 'Ashito Aoi é um adolescente que mora no interior do Japão e é o artilheiro de um time de várzea. Após perder a final do torneio sub-15, ele é recrutado por Tatsuya Fukuda, técnico da categoria de base do Tokyo City Esperion FC, um dos maiores times da J-League, a primeira divisão do'
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
    .btn-assista {
        text-decoration: none;
        border: solid 2px #ff7a00;
        background-color: #ff7a00;
        padding: 8px 15px;
        margin: 15px 0 15px 0;
        color: aliceblue;
        font-weight: bold;
    }

    .btn-assista:hover {
        background-color: #050505;
        color: #ff7a00;
        transition: 0.5s;
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
            width: 300px;
            height: 169px;
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