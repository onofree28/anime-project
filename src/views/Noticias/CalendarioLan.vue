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
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CalendarioLan',
        data() {
            return {
                titulo: 'Calendário de lançamentos da Crunchyroll da semana (17/out - 23/out)',
                banner: '/img-noticias/destaque1-banner.png',
                alt: 'banner-noticia',
                img: '/img-noticias/destaque1-noticia.png',
                alt2: 'icone-noticia',
                descricao: 'Está curioso para saber o que chega nesta semana na Crunchyroll? Então não precisa mais se preocupar! Basta conferir nosso calendário de lançamentos da semana a partir de agora, que vai ser atualizado toda segunda-feira com todos os lançamentos que estão chegando na semana!'
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
</style>