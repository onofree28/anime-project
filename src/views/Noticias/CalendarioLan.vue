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
                <p>{{ descricao }}</p>
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
                           <p>{{ lista.horaBr }}</p>
                           <p>{{ lista.horaPt }}</p>
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
                titulo: 'Calendário de lançamentos da Crunchyroll da semana (24/out - 30/out)',
                banner: '/img-noticias/destaque1-banner.png',
                alt: 'banner-noticia',
                img: '/img-noticias/destaque1-noticia.png',
                alt2: 'icone-noticia',
                descricao: 'Está curioso para saber o que chega nesta semana na Crunchyroll? Então não precisa mais se preocupar! Basta conferir nosso calendário de lançamentos da semana a partir de agora, que vai ser atualizado toda segunda-feira com todos os lançamentos que estão chegando na semana!',

                segunda: [
                    {
                        id:1,
                        img: '/img-calendario/golden-kamuy.webp',
                        nome: 'GOLDEN KAMUY (4ª TEMPORADA)',
                        descricao: 'EPISÓDIO 4',
                        horaBr: 'PT-BR: 12:00',
                        horaPt: 'PT-PT: 16:00'
                    },
                    {
                        id:2,
                        nome: 'PLAY IT COOL, GUYS',
                        img: '/img-calendario/play-it-cool.webp',
                        descricao: 'EPISÓDIOS 1, 2 e 3',
                        horaBr: 'PT-BR: 12:00',
                        horaPt: 'PT-PT: 16:00'
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .container-noticia {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 50px;
    }
    .titulo {
        padding: 5px;
        font-size: 25px;
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
        font-size: 13px;
        padding: 10px;
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
        font-weight: bold
        ;
    }

    .calendario {
        display: flex;
        justify-content: center;
        align-items: baseline;
        padding: 10px;
        background-color: #606060;
    }

    .capas {
        background-color: #2b2b2b;
        padding: 10px;
        margin: 10px;
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

</style>