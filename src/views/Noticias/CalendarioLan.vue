<template>
    <div class="container-noticia">
        <div class="noticia">
            <h1 class="titulo">{{ titulo }}</h1>
            <p>O que chega de novo nesta semana?</p>
            <br>
            <div class="divisoria"></div>
            <br>
            <div class="imagens">
                <div class="banner">
                    <img :src="banner" :alt="alt">
                </div>
                <div class="icone">
                    <img :src="img" :alt="alt2">
                </div>
            </div>
            <div class="descricao">
                <p>Está curioso para saber o que chega nesta semana na <a :href="link" class="crunchy">Crunchyroll</a>? 
                    Então não precisa mais se preocupar! Basta conferir nosso calendário de lançamentos da semana a partir de agora, que 
                    vai ser atualizado toda segunda-feira com todos os lançamentos que estão chegando na semana!</p>
            </div>
            <div class="principal">
                <h1 class="titulo-principal">CALENDÁRIO DE LANÇAMENTOS
                    24/OUT A 30/OUT</h1>
            </div>
            <div class="container-calendario">
                <h1>SEGUNDA-FEIRA</h1>
                <div class="calendario">
                    <div class="capas" v-for="lista in segunda" :key="lista.id">
                        <img :src="lista.img" :alt="lista.alt">
                       <div class="descricao-capa">
                           <h3 class="nome">{{ lista.nome }}</h3>
                           <h3 class="episodios">{{ lista.descricao }}</h3>
                           <p><span class="fi fi-br"></span>{{ lista.horaBr }}</p>
                           <p><span class="fi fi-pt"></span>{{ lista.horaPt }}</p>
                       </div>
                    </div>
                </div>
            </div>
            <div class="container-calendario">
                <h1>TERÇA-FEIRA</h1>
                <div class="calendario">
                    <div class="capas" v-for="lista in terca" :key="lista.id">
                        <img :src="lista.img" :alt="lista.alt">
                       <div class="descricao-capa">
                           <h3 class="nome">{{ lista.nome }}</h3>
                           <h3 class="episodios">{{ lista.descricao }}</h3>
                           <p><span class="fi fi-br"></span>{{ lista.horaBr }}</p>
                           <p><span class="fi fi-pt"></span>{{ lista.horaPt }}</p>
                       </div>
                    </div>
                </div>
            </div>
            <div class="container-calendario">
                <h1>QUARTA-FEIRA</h1>
                <div class="calendario">
                    <div class="capas" v-for="lista in quarta" :key="lista.id">
                        <img :src="lista.img" :alt="lista.alt">
                       <div class="descricao-capa">
                           <h3 class="nome">{{ lista.nome }}</h3>
                           <h3 class="episodios">{{ lista.descricao }}</h3>
                           <p><span class="fi fi-br"></span>{{ lista.horaBr }}</p>
                           <p><span class="fi fi-pt"></span>{{ lista.horaPt }}</p>
                       </div>
                    </div>
                </div>
            </div>
            <div class="container-calendario">
                <h1>QUINTA-FEIRA</h1>
                <div class="calendario">
                    <div class="capas" v-for="lista in quinta" :key="lista.id">
                        <img :src="lista.img" :alt="lista.alt">
                       <div class="descricao-capa">
                           <h3 class="nome">{{ lista.nome }}</h3>
                           <h3 class="episodios">{{ lista.descricao }}</h3>
                           <p><span class="fi fi-br"></span>{{ lista.horaBr }}</p>
                           <p><span class="fi fi-pt"></span>{{ lista.horaPt }}</p>
                       </div>
                    </div>
                </div>
            </div>
            <div class="container-calendario">
                <h1>SEXTA-FEIRA</h1>
                <div class="calendario">
                    <div class="capas" v-for="lista in sexta" :key="lista.id">
                        <img :src="lista.img" :alt="lista.alt">
                       <div class="descricao-capa">
                           <h3 class="nome">{{ lista.nome }}</h3>
                           <h3 class="episodios">{{ lista.descricao }}</h3>
                           <p><span class="fi fi-br"></span>{{ lista.horaBr }}</p>
                           <p><span class="fi fi-pt"></span>{{ lista.horaPt }}</p>
                       </div>
                    </div>
                </div>
            </div>
            <div class="container-calendario">
                <h1>SÁBADO</h1>
                <div class="calendario">
                    <div class="capas" v-for="lista in sabado" :key="lista.id">
                        <img :src="lista.img" :alt="lista.alt">
                       <div class="descricao-capa">
                           <h3 class="nome">{{ lista.nome }}</h3>
                           <h3 class="episodios">{{ lista.descricao }}</h3>
                           <p><span class="fi fi-br"></span>{{ lista.horaBr }}</p>
                           <p><span class="fi fi-pt"></span>{{ lista.horaPt }}</p>
                       </div>
                    </div>
                </div>
            </div>
            <div class="container-calendario">
                <h1>DOMINGO</h1>
                <div class="calendario">
                    <div class="capas" v-for="lista in domingo" :key="lista.id">
                        <img :src="lista.img" :alt="lista.alt">
                       <div class="descricao-capa">
                           <h3 class="nome">{{ lista.nome }}</h3>
                           <h3 class="episodios">{{ lista.descricao }}</h3>
                           <p><span class="fi fi-br"></span>{{ lista.horaBr }}</p>
                           <p><span class="fi fi-pt"></span>{{ lista.horaPt }}</p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CalendarioLan',
        data() {
            return {
                titulo: `Calendário de lançamentos da Crunchyroll da semana (24/out - 30/out)`,
                banner: '/img-noticias/destaque1-banner.png',
                alt: 'banner-noticia',
                img: '/img-noticias/destaque1-noticia.png',
                alt2: 'icone-noticia',
                link: 'https://www.crunchyroll.com/pt-br',

                segunda: [
                    {
                        id:1,
                        img: '/img-calendario/golden-kamuy.webp',
                        nome: 'GOLDEN KAMUY (4ª TEMPORADA)',
                        descricao: 'EPISÓDIO 4',
                        horaBr: ' 12:00',
                        horaPt: ' 16:00'
                    },
                    {
                        id:2,
                        nome: 'PLAY IT COOL, GUYS',
                        img: '/img-calendario/play-it-cool.webp',
                        descricao: 'EPISÓDIOS 1, 2 e 3',
                        horaBr: ' 12:00',
                        horaPt: ' 16:00'
                    },
                ],
                terca: [
                    {
                        id:1,
                        nome: 'SHINOBI NO ITTOKI',
                        img: '/img-calendario/shinobi-no-ittoki.webp',
                        descricao: 'EPISÓDIO 4',
                        horaBr: ' 10:00',
                        horaPt: ' 14:00'
                    },
                    {
                        id:2,
                        nome: 'VAZZROCK THE ANIMATION',
                        img: '/img-calendario/vazzrock.webp',
                        descricao: 'EPISÓDIO 4',
                        horaBr: ' 11:30',
                        horaPt: ' 15:30'
                    },
                    {
                        id:3,
                        nome: 'CHAINSAW MAN',
                        img: '/img-calendario/chainsaw-man.webp',
                        descricao: 'EPISÓDIO 3',
                        horaBr: ' 13:00',
                        horaPt: ' 17:00'
                    },
                ],
                quarta: [
                    {
                        id:1,
                        nome: 'THE HUMAN CRAZY UNIVERSITY',
                        img: '/img-calendario/the-human.webp',
                        descricao: 'EPISÓDIO 4',
                        horaBr: ' 10:30',
                        horaPt: ' 14:30'
                    },
                    {
                        id:2,
                        nome: 'MOB PSYCHO 100 III',
                        img: '/img-calendario/mob-psycho.webp',
                        descricao: 'EPISÓDIO 4',
                        horaBr: ' 13:30',
                        horaPt: ' 17:30'
                    },
                    {
                        id:3,
                        nome: 'DO IT YOURSELF!',
                        img: '/img-calendario/do-it-yourself.webp',
                        descricao: 'EPISÓDIO 5',
                        horaBr: ' 14:00',
                        horaPt: ' 18:00'
                    },
                    {
                        id:4,
                        nome: 'MUV-LUV ALTERNATIVE (2ª TEMPORADA)',
                        img: '/img-calendario/muv-luv.webp',
                        descricao: 'EPISÓDIO 4',
                        horaBr: ' 14:25',
                        horaPt: ' 18:25'
                    },
                ],
                quinta: [
                    {
                        id:1,
                        nome: 'AKIBA MAID WAR',
                        img: '/img-calendario/akiba-maid.webp',
                        descricao: 'EPISÓDIO 4',
                        horaBr: ' Não definido',
                        horaPt: ' 14:00'
                    },
                    {
                        id:2,
                        nome: 'LEGEND OF THE GALACTIC HEROES: DIE NEUE THESE (4ª TEMPORADA)',
                        img: '/img-calendario/galactic-heroes.webp',
                        descricao: 'EPISÓDIO 5',
                        horaBr: ' 20:00',
                        horaPt: ' 00:00 (dia seguinte)'
                    },
                ],
                sexta: [
                    {
                        id:1,
                        nome: 'LEGEND OF MANA -THE TEARDROP CRYSTAL-',
                        img: '/img-calendario/legend-of-mana.webp',
                        descricao: 'EPISÓDIO 4',
                        horaBr: ' 15:15',
                        horaPt: ' 19:15'
                    },
                    {
                        id:2,
                        nome: 'LUCIFER AND THE BISCUIT HAMMER',
                        img: '/img-calendario/lucifer-and-the-biscuit.webp',
                        descricao: 'EPISÓDIO 16',
                        horaBr: ' 15:45',
                        horaPt: ' 19:45'
                    },
                    {
                        id:3,
                        nome: 'DRAGON QUEST THE ADVENTURE OF DAI',
                        img: '/img-calendario/dragon-quest.webp',
                        descricao: 'EPISÓDIO 101',
                        horaBr: ' 23:00',
                        horaPt: ' 03:00 (dia seguinte)'
                    },
                    {
                        id:4,
                        nome: 'SHADOWVERSE FLAME',
                        img: '/img-calendario/shadowverse.webp',
                        descricao: 'EPISÓDIO 31',
                        horaBr: ' 23:30',
                        horaPt: ' 03:30 (dia seguinte)'
                    },
                    {
                        id:5,
                        nome: 'ARKNIGHTS: PRELUDE TO DAWN',
                        img: '/img-calendario/arknights.webp',
                        descricao: 'EPISÓDIO 17',
                        horaBr: ' Em breve...',
                        horaPt: ' Em breve...'
                    },
                ],
                sabado: [
                    {
                        id:1,
                        nome: 'MY HERO ACADEMIA (6ª TEMPORADA)',
                        img: '/img-calendario/my-hero-academia.webp',
                        descricao: 'EPISÓDIO 5',
                        horaBr: ' 06:30',
                        horaPt: ' 10:30'
                    },
                    {
                        id:2,
                        nome: 'SPY X FAMILY (PARTE 2)',
                        img: '/img-calendario/spy-family.webp',
                        descricao: 'EPISÓDIO 17',
                        horaBr: ' 12:30',
                        horaPt: ' 16:30'
                    },
                    {
                        id:3,
                        nome: 'BLUELOCK',
                        img: '/img-calendario/blue-lock.webp',
                        descricao: 'EPISÓDIO 4',
                        horaBr: ' 15:00',
                        horaPt: ' 19:00'
                    },
                    {
                        id:4,
                        nome: 'ONE PIECE',
                        img: '/img-calendario/one-piece.webp',
                        descricao: 'EPISÓDIO 1040',
                        horaBr: ' 23:00',
                        horaPt: ' 03:00 (dia seguinte)'
                    },
                    {
                        id:5,
                        nome: 'DIGIMON GHOST GAME',
                        img: '/img-calendario/digimon.webp',
                        descricao: 'EPISÓDIO 49',
                        horaBr: ' 23:30',
                        horaPt: ' 03:30 (dia seguinte)'
                    },
                ],
                domingo: [
                    {
                        id:1,
                        nome: 'THE DAILY LIFE OF THE IMMORTAL KING (3ª TEMPORADA)',
                        img: '/img-calendario/the-daily-life.webp',
                        descricao: 'EPISÓDIO 6',
                        horaBr: ' 02:00',
                        horaPt: ' 06:00'
                    },
                    {
                        id:2,
                        nome: 'BORUTO: NARUTO NEXT GENERATIONS',
                        img: '/img-calendario/boruto.webp',
                        descricao: 'EPISÓDIO 273',
                        horaBr: ' 06:00',
                        horaPt: ' 10:00'
                    },
                    {
                        id:3,
                        nome: 'MOBILE SUIT GUNDAM: THE WITCH FROM MERCURY',
                        img: '/img-calendario/mobile-suit.webp',
                        descricao: 'EPISÓDIO 5',
                        horaBr: ' 06:30',
                        horaPt: ' 10:30'
                    },
                    {
                        id:4,
                        nome: 'TO YOUR ETERNITY (2ª TEMPORADA)',
                        img: '/img-calendario/to-your-eternity.webp',
                        descricao: 'EPISÓDIO 2',
                        horaBr: ' 09:30',
                        horaPt: ' 13:30'
                    },
                ],
            }
        }
    }
</script>

<style scoped>
    .container-noticia {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 150px;
    }
    .titulo {
        padding: 5px;
        font-size: 24px;
    }
    .noticia {
        width: 930px;
        background-color: aliceblue;
    }
    .noticia p {
        padding: 5px;
    }

    .divisoria {
        height: 1px;
        width: 930px;
        background-color: #2b2b2b;
    }

    .imagens {
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
    }

    .banner img {
        height: 360px;
        width: 640px;
    }

    .descricao {
        font-size: 14px;
        padding: 10px;
    }

    .crunchy {
        color: #ff7a00;
        font-weight: bold;
        text-decoration: none;
    }

    .principal {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px;
    }
    .container-calendario h1 {
        text-align: center;
        padding: 20px;
        font-size: 48px;
        background-color: #606060;
        color: aliceblue;
        font-weight: bold;
    }

    .calendario {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        padding: 10px;
        background-color: #606060;
    }

    .capas {
        background-color: #2b2b2b;
        padding: 5px 5px 15px 5px;
        margin: 0.5em;
        width: 200px;
        height: 434px;
    }

    .capas img {
        width: 199px;
        height: 280px;
    }

    .descricao-capa {
        padding: 2px;
        width: 200px;
    }

    .descricao-capa p {
        font-size: 15px;
        color: aliceblue;
        padding: 2px 0;
    }

    .nome {
        padding: 7px 0;
        font-size: 15px;
        color: rgb(179, 161, 60);
    }

    .episodios {
        color: aliceblue;
        font-size: 14px;
    }

    @media (min-width: 200px) and (max-width: 910px) {
        .noticia, .divisoria {
            width: 340px;
        }

        .calendario {
            padding: 2px;
        }

        .banner img {
            height: 140px;
            width: 220px;
        }

        .icone img {
            height: 80px;
            width: 80px;
        }

        .container-calendario h1 {
            font-size: 28px;
        }

        .titulo-principal {
            font-size: 24px;
        }

        .capas {
            width: 140px;
            height: 380px;
        }

        .descricao-capa {
            width: 139px;
        }

        .capas img {
            width: 139px;
            height: 210px;
        }

        .nome {
            font-size: 13px;
            width: 139px;
        }

        .episodios, .descricao-capa p {
            font-size: 12px;
        }
     }
     
     @media (min-width: 910px) and (max-width: 1400px) {
        .noticia, .divisoria {
            width: 800;
        }

        .calendario {
            padding: 2px;
        }

        .banner img {
            height: 300px;
            width: 500px;
        }

        .icone img {
            height: 150px;
            width: 150px;
        }

        .container-calendario h1 {
            font-size: 28px;
        }

        .titulo-principal {
            font-size: 24px;
        }

        .capas {
            width: 180px;
            height: 420px;
        }


        .capas img {
            width: 180px;
            height: 260px;
        }

        .nome {
            font-size: 13px;
            width: 139px;
        }

        .episodios, .descricao-capa p {
            font-size: 12px;
        }
     }

</style>