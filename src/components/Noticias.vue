<template>
    <div class="container">
        <div class="container-titulo">
            <p class="titulo"><fa icon="fa-solid fa-bullhorn" />  Noticias</p>
        </div>
        <div class="barra"></div>
        <div class="container-noticias">
            <div class="container-destaque">
                <p>Noticias em destaque</p>
                <div class="destaque" v-for="destaque in destaques" :key="destaque.id">
                    <img :src="destaque.img" :alt="destaque.alt">
                    <p>{{ destaque.titulo }}</p>
                </div>
            </div>
            <div class="container-recentes">
                <p>Mais recentes</p>
                <div class="noticias">
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Noticias',
        data() {
            return {
                destaques: [
                    {
                        id:1,
                        titulo: 'Calendário de Lançamentos',
                        img: '/img-noticias/destaque1-noticia.png',
                        alt: 'destaque-1-imagem'
                    },
                    {
                        id:2,
                        titulo: 'Conheça o elenco brasileiro e a data de estreia da dublagem de Chainsaw Man',
                        img: '/img-noticias/destaque2-noticia.jpg',
                        alt: 'destaque-2-imagem'
                    }
                ],

                noticias: [
                    {

                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .container-titulo {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 1100px;
        padding: 20px 10px 20px 10px;
        background-color: #2b2b2b;
    }
    .titulo {
        color: aliceblue;
        font-size: 28px;
    }

    .barra {
        width: 1100px;
        height: 5px;
        background-color: #ff7a00;
        padding: 0px 10px 0px 10px;
    }

    .container-noticias {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 1100px;
        height: auto;
        padding: 20px 10px 20px 10px;
        background-color: #2b2b2b;
    }

    .container-destaque {
        width: 300px;
        padding: 10px 20px;
        color: aliceblue;
        font-size: 16px;
    }

    .destaque {
        padding-top: 10px;
        width: 250px;
    }
    .destaque img {
        width: 250px;
        height: 140px;
        object-fit: cover;
    }

    @media (min-width: 200px) and (max-width: 760px) {
        .titulo p {
             font-size: 22px;
         }
     
         .container-titulo, .container-noticias, .barra {
           width: 340px;
         }
     }
     
     @media (min-width: 761px) and (max-width: 1100px) {
         .titulo p {
             font-size: 28px;
         }
         .container-titulo, .container-noticias, .barra {
           width: 800px;
         }
     }
</style>