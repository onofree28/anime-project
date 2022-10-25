<template>
    <div class="container">
        <div class="container-titulo">
            <p class="titulo"><fa icon="fa-solid fa-bullhorn" />  Noticias</p>
        </div>
        <div class="barra"></div>
        <div class="container-noticias">
            <div class="container-destaque">
                <p class="indice">Noticias em destaque</p>
                <div class="categoria" v-for="destaque in destaques" :key="destaque.id">
                    <div class="destaque">
                        <router-link :to="destaque.link">
                            <img :src="destaque.img" :alt="destaque.alt">
                        </router-link> 
                        <p>{{ destaque.titulo }}</p>
                    </div>
                </div>
            </div>
            <div class="container-recentes">
                <p class="recentes-titulo">Mais recentes</p>
                <div class="noticias" v-for="noticia in noticias" :key="noticia.id">
                    <img :src="noticia.img" :alt="noticia.alt">
                    <p>{{ noticia.titulo }}</p>
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
                        alt: 'destaque-1-imagem',
                        link: '/calendario'
                    },
                    {
                        id:2,
                        titulo: 'Conheça o elenco brasileiro e a data de estreia da dublagem de Chainsaw Man',
                        img: '/img-noticias/destaque2-noticia.jpg',
                        alt: 'destaque-2-imagem',
                        link: '/calendario'
                    }
                ],

                noticias: [
                    {
                        id: 1,
                        titulo: 'Confira o horário da dublagem brasileira da 6ª temporada de My Hero Academia.',
                        img: '/img-noticias/my-hero-noticia.jpg',
                        alt: 'my-hero-noticia-imagem'
                    },
                    {
                        id: 2,
                        titulo: 'Confira o horário de estreia da dublagem brasileira da 2ª parte de SPY x FAMILY',
                        img: '/img-noticias/spy-family-noticia.jpg',
                        alt: 'spy-family-noticia-imagem'
                    },
                    {
                        id: 3,
                        titulo: 'Veja as belezas de Mondstadt em novo vídeo animado de Genshin Impact',
                        img: '/img-noticias/genshin-noticia.jpg',
                        alt: 'genshin-noticia-imagem'
                    },
                    {
                        id: 4,
                        titulo: 'Conheça o elenco brasileiro da dublagem da 2ª temporada de Uzaki-chan Wants to Hang Out!',
                        img: '/img-noticias/uzaki-chan-noticia.jpg',
                        alt: 'uzaki-chan-noticia-imagem'
                    },
                    {
                        id: 5,
                        titulo: 'Bartender tem nova adaptação para anime anunciada',
                        img: '/img-noticias/bartender-noticia.jpg',
                        alt: 'bartender-noticia-imagem'
                    },
                    {
                        id: 6,
                        titulo: 'Conheça o elenco brasileiro da dublagem de Berserk: The Golden Age Arc - Memorial Edition',
                        img: '/img-noticias/berserk-noticia.jpg',
                        alt: 'berserk-noticia-imagem'
                    },

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
        padding-left: 10px;
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
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        width: 240px;
        height: 555px;
        padding: 10px 10px;
        color: aliceblue;
        font-size: 16px;
    }

    .categoria :hover {
        background-color: #616161;
        transition: 0.5s;
    }

    .indice {
        padding: 4px 10px;
        font-size: 20px;
    }

    .destaque {
        padding: 30px 10px;
        width: 250px;
    }
    .destaque img {
        width: 250px;
        height: 140px;
        object-fit: cover;
    }

    .container-recentes {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        flex-wrap: wrap;
        width: 500px;
        height: 596px;
        color: aliceblue;
        font-size: 14px;
    }

    .recentes-titulo {
        padding: 0 0 10px 5px;
        font-size: 20px;
    }

    .noticias {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        width: 500px;
        padding: 5px;
    }

    .noticias p {
        padding-left: 10px;
        font-size: 18px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .noticias img {
        width: 150px;
        height: 75px;
        object-fit: cover;
    }

    @media (min-width: 200px) and (max-width: 760px) {
        .titulo p {
             font-size: 22px;
         }
     
         .container-titulo, .container-noticias, .barra {
           width: 340px;
           flex-wrap: wrap;
         }

         .noticias {
            width: 280px;
            padding: 5px;
         }
         .noticias img {
            width: 100px;
            height: 55px;
            object-fit: cover;
        }
        .container-destaque {
            padding-top: 40px;
            width: 250px;
            height: 400px;
        }
         .destaque img {
            width: 200px;
            height: 90px;
            object-fit: cover;
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