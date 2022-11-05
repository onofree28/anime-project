<template>
    <div class="container-anime">
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
                <iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/cK9WMwFRGWs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DragonballSuper',
        data() {
            return {
                mostrar_texto: false,
                textoBotao: 'Ver mais',
                sinopseA: '18 anos depois, temos uma nova saga de Dragon Ball das mãos de seu criador, Akira Toriyama. Após a derrota de Majin Buu, Goku arranja um novo emprego como... fazendeiro de nabos? Agora que a Terra está em paz, nosso heróis levam vidas mundanas, mas não por muito tempo. Longe dali,...',
                sinopseB: ' Beerus, o poderoso Deus da Destruição, recebe uma profecia de que encontrará seu fim nas mãos de um ser ainda mais poderoso, e sua busca pelo Deus dos Saiya-jins o traz para a Terra. Será que Goku e seus amigos conseguirão derrotar seu mais poderoso inimigo até então?',
                banner: '/banner-pagina/dragonball-super-banner.jpeg',
                alt: 'dragonball-super-banner',
                titulo: 'Dragon Ball Super',
                link: 'https://www.crunchyroll.com/pt-br/series/GR19V7816/dragon-ball-super'
            }
        },
        methods: {
            verMais() {
                this.mostrar_texto = !this.mostrar_texto
                if(!this.mostrar_texto) {
                    this.textoBotao = 'Ver mais'
                    thius.sinopseA = '18 anos depois, temos uma nova saga de Dragon Ball das mãos de seu criador, Akira Toriyama. Após a derrota de Majin Buu, Goku arranja um novo emprego como... fazendeiro de nabos? Agora que a Terra está em paz, nosso heróis levam vidas mundanas, mas não por muito tempo. Longe dali,...'
                } else {
                    this.textoBotao = 'Ver menos'
                    this.sinopseA = '18 anos depois, temos uma nova saga de Dragon Ball das mãos de seu criador, Akira Toriyama. Após a derrota de Majin Buu, Goku arranja um novo emprego como... fazendeiro de nabos? Agora que a Terra está em paz, nosso heróis levam vidas mundanas, mas não por muito tempo. Longe dali,'
                }
            }
        },
    }
</script>

<style scoped>
    .container-anime {
        padding-top: 110px;
    }
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
        width: 550px;
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

    @media (min-width: 100px) and (max-width: 300px) {
        .container-anime {
            padding-top: 85px;
        }
        .banner img {
            width: 250px;
            height: 139px;
        }

        .info, .titulo {
            width: 250px;
        }
        .titulo {
            font-size: 12px;
        }
        .info {
            font-size: 14px;
        }
        .video {
            width: 250px;
            height: 149px;
        }
    }
    @media (min-width: 301px) and (max-width: 760px) {
        .container-anime {
            padding-top: 95px;
        }
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

    @media (min-width: 761px) and (max-width: 1000px) {
        .container-anime {
            padding-top: 101px;
        }
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
        .video {
            width: 400px;
            height: 220px;
        }
    }
</style>