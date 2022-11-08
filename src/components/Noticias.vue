<template>
    <div class="container">
        <div class="container-titulo">
            <p class="titulo"><fa icon="fa-solid fa-bullhorn" />  Notícias</p>
        </div>
        <div class="barra"></div>
        <div class="container-noticias">
            <div class="container-indice">
                <p class="indice">Notícias em destaque</p>
                <div class="container-destaque">
                    <div class="categoria" v-for="destaque in destaques" :key="destaque.id">
                        <div class="destaque">
                            <router-link @click.native="scrollToTop()" :to="destaque.link">
                                <img :src="destaque.img" :alt="destaque.alt">
                            </router-link> 
                            <router-link @click.native="scrollToTop()" style="text-decoration: none" :to="destaque.link">
                                <p>{{ destaque.titulo }}</p>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-recentes">
                <div class="container-recentes-titulo">
                    <p class="recentes-titulo">Mais recentes</p>
                    <div class="categoria2" v-for="noticia in noticias" :key="noticia.id">
                        <div class="noticias">
                            <router-link @click.native="scrollToTop()"
                                 :to="noticia.link">
                                <img :src="noticia.img" :alt="noticia.alt">
                            </router-link>
                            <router-link @click.native="scrollToTop()"
                                :to="noticia.link"
                                style="text-decoration: none;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                color: aliceblue;
                                padding-left: 10px;
                                font-size: 16px;
                                height: 80px;">
                                <p>{{ noticia.titulo }}</p>
                            </router-link>
                        </div>
                    </div>
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
                        titulo: 'Sally Amaki e Jon Kabira serão os apresentadores do Anime Awards 2023',
                        img: '/img-noticias/anime-awards-noticia.jpg',
                        alt: 'destaque-2-imagem',
                        link: '/anime-awards'
                    }
                ],

                noticias: [
                    {
                        id: 12,
                        titulo: 'Adaptação em anime de The Angel Next Door Spoils Me Rotten ganha nova ilustração promocional de Halloween',
                        img: '/img-noticias/the-angel/the-angel-noticia.jpg',
                        alt: 'the-angel-noticia-imagem',
                        link: '/the-angel-noticia'
                    },
                    {
                        id: 11,
                        titulo: 'Adaptação em anime de Sugar Apple Fairy Tale revela intérprete para sua música de encerramento',
                        img: '/img-noticias/sugar-apple/sugar-apple-noticia.jpg',
                        alt: 'sugar-apple-noticia-imagem',
                        link: '/sugar-apple-noticia'
                    },
                    {
                        id: 10,
                        titulo: 'Anime de NieR:Automata Ver1.1a ganha novo trailer focado no Pascal',
                        img: '/img-noticias/nier-automata/nier-automata-noticia.jpg',
                        alt: 'nier-automata-noticia-imagem',
                        link: '/nier-automata-noticia'
                    },
                    {
                        id: 9,
                        titulo: 'Adaptação em anime de Spy Classroom ganha novo vídeo promocional focado na Sibylla',
                        img: '/img-noticias/spy-classroom/spy-classroom-noticia.jpg',
                        alt: 'spy-classroom-noticia-imagem',
                        link: '/spy-classroom-noticia'
                    },
                    {
                        id: 8,
                        titulo: 'Kaguya-sama: Love is War -The First Kiss That Never Ends- ganha vídeo promocional e data de estreia',
                        img: '/img-noticias/kaguya-sama/kaguya-sama-noticia.jpg',
                        alt: 'kaguya-sama-noticia-imagem',
                        link: '/kaguya-sama-noticia'
                    },
                    {
                        id: 7,
                        titulo: 'Conheça o elenco brasileiro da dublagem de More than a Married Couple, but Not Lovers.',
                        img: '/img-noticias/more-than-noticia.jpg',
                        alt: 'more-than-noticia-imagem',
                        link: '/the-angel-noticia'
                    },
                    {
                        id: 6,
                        titulo: 'Confira o horário da dublagem brasileira da 6ª temporada de My Hero Academia.',
                        img: '/img-noticias/my-hero-noticia.jpg',
                        alt: 'my-hero-noticia-imagem',
                        link: '/the-angel-noticia'
                    },
                    {
                        id: 5,
                        titulo: 'Confira o horário de estreia da dublagem brasileira da 2ª parte de SPY x FAMILY',
                        img: '/img-noticias/spy-family-noticia.jpg',
                        alt: 'spy-family-noticia-imagem',
                        link: '/the-angel-noticia'
                    },
                    {
                        id: 4,
                        titulo: 'Veja as belezas de Mondstadt em novo vídeo animado de Genshin Impact',
                        img: '/img-noticias/genshin-noticia.jpg',
                        alt: 'genshin-noticia-imagem',
                        link: '/the-angel-noticia'
                    },
                    {
                        id: 3,
                        titulo: 'Conheça o elenco brasileiro da dublagem da 2ª temporada de Uzaki-chan Wants to Hang Out!',
                        img: '/img-noticias/uzaki-chan-noticia.jpg',
                        alt: 'uzaki-chan-noticia-imagem',
                        link: '/the-angel-noticia'
                    },
                    {
                        id: 2,
                        titulo: 'Bartender tem nova adaptação para anime anunciada',
                        img: '/img-noticias/bartender-noticia.jpg',
                        alt: 'bartender-noticia-imagem',
                        link: '/the-angel-noticia'
                    },
                    {
                        id: 1,
                        titulo: 'Conheça o elenco brasileiro da dublagem de Berserk: The Golden Age Arc - Memorial Edition',
                        img: '/img-noticias/berserk-noticia.jpg',
                        alt: 'berserk-noticia-imagem',
                        link: '/the-angel-noticia'
                    },

                ]
            }
        },
        methods: {
            scrollToTop() {
                window.scrollTo(0,0)
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
        height: 585px;
        padding: 10px 10px;
        color: aliceblue;
        font-size: 16px;
    }

    .categoria :hover {
        background-color: #616161;
        transition: 0.5s;
    }
    .categoria2 :hover {
        background-color: #616161;
        transition: 0.5s;
    }

    .container-indice {
        display: flex;
        flex-direction: column;
        padding-left: 10px;
        font-size: 20px;
    }

    .indice {
        color: aliceblue;
        padding: 43px 0 0 50px;
    }

    .container-recentes-titulo {
        display: flex;
        flex-direction: column;
    }

    .destaque {
        padding: 30px 10px 30px 30px;
        width: 250px;
    }
    .destaque img {
        width: 250px;
        height: 140px;
        object-fit: cover;
    }
    .destaque p {
        color: aliceblue;
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
        padding: 0 0 15px 5px;
        font-size: 20px;
    }

    .noticias {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        width: 500px;
        padding: 5px;
    }

    .categoria2:nth-child(n+8) {
        display: none;
    }

    .noticias img {
        width: 136px;
        height: 75px;
        object-fit: cover;
    }

    @media (min-width: 100px) and (max-width: 300px) {
        .titulo {
            padding-top: 20px;
             font-size: 24px;
         }
     
         .container-titulo, .container-noticias, .barra {
           width: 250px;
           flex-wrap: wrap;
           padding-top: 0;
         }

         .container-indice {
            padding: 0;
         }

         .noticias {
            width: 230px;
            padding: 5px;
         }
         .noticias img {
            width: 100px;
            height: 55px;
            object-fit: cover;
        }
        .container-destaque {
            justify-content: space-evenly;
            flex-direction: row;
            padding: 10px 0 0 0;
            width: 250px;
            height: 250px;
        }
         .destaque img {
            width: 120px;
            height: 80px;
            object-fit: cover;
        }

        .destaque {
            width: 110px;
            padding-left: 5px;
        }

        .destaque p {
            font-size: 13px;
        }

        .indice {
            padding-left: 15px;
        }
        .recentes-titulo {
            padding: 0 0 30px 55px;
        }
     }
    @media (min-width: 301px) and (max-width: 760px) {
        .titulo {
            padding-top: 20px;
             font-size: 24px;
         }
     
         .container-titulo, .container-noticias, .barra {
           width: 340px;
           flex-wrap: wrap;
           padding-top: 0;
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
            justify-content: space-evenly;
            flex-direction: row;
            padding: 10px 0 0 0;
            width: 250px;
            height: 250px;
        }
         .destaque img {
            width: 150px;
            height: 90px;
            object-fit: cover;
        }

        .destaque {
            width: 150px;
            padding-left: 10px;
        }

        .indice {
            padding-left: 20px;
        }
        .recentes-titulo {
            padding: 0 0 30px 95px;
        }
     }
     
     @media (min-width: 761px) and (max-width: 1100px) {
         .titulo p {
             font-size: 28px;
         }
         .container-titulo, .container-noticias, .barra {
           width: 750px;
         }
        .container-recentes {
            padding-left: 50px;
        }

        .noticias {
            width: 400px;
        }

        .indice {
            font-size: 18px;
            padding-left: 60px;
        }
        .recentes-titulo {
            font-size: 18px;
        }
     }
</style>