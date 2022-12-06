<template>
    <div class="container-noticia">
        <div class="noticia">
            <h1 class="titulo">{{ titulo }}</h1>
            <p>A dublagem ja estreou!</p>
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
                <p>Muita coisa está rolando no Brasil hoje, mas é certamente um alívio poder chegar em casa e assistir a dublagem brasileira de <span class="crunchy">More
                    than a Married Couple, but Not Lovers</span>., que estreou na <span class="crunchy">Crunchyroll</span>!
                    <br/>
                    <br>
                    A dublagem brasileira do anime está sendo feita no estúdio Atma Entretenimento, e conta com direção de Mayara Stefane. Abaixo,
                    você conhece o elenco de voz:
                   </p>
            </div>
            <div class="lista-evento">
                <ul v-for="lista in elenco" :key="lista.id">
                    <li><p>{{ lista.personagem }}: <strong>{{ lista.nome }}</strong></p></li>
                </ul>
            </div>
            <div class="img-promocional">
                <img src="/img-noticias/more-than/more-than-img-promo.jpg" alt="nier-automata">
            </div>
            <br>
            <div class="sinopse">
                <p class="crunchy">Sinopse:</p>
                <br>
                <div class="conteudo-sinopse">
                    <div>
                        <p>
                            Jiro Yakuin é um adolescente tímido e sem expressão, que viveu sua vida toda sem ter uma namorada. Mas quando ele se
                            inscreve num programa de "treino de casal", cujos participantes descobrem como é viver uma vida de casado, ele forma par
                            com Sei Watanabe, uma patricinha estonteante que é o completo oposto do rapaz. Nesse programa, onde quem possui um
                            bom desempenho pode trocar de par, os dois decidem levar a vida de casal a sério para ter uma chance com suas verdadeiras
                            paixões... Mas quem sabe como é que isso vai acabar?
                        </p>
                    </div>
                </div>
                <br>
                <br>
            </div>
            <div class="divisoria"></div>
            <br>
            <div class="descricao">
                <p>Fique ligado na <span class="crunchy">Anime Project Notícias</span> e não perca nenhuma novidade!</p>
            </div>
            <br>
            <div class="ads">
                <a href="//www.crunchyroll.com/pt-br/welcome"><img src="/img/assista-animes-sem-ads.png" alt="banner-crunchy"></a> 
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NierAutomata',
        data() {
            return {
                titulo: `Conheça o elenco brasileiro da dublagem de More than a Married Couple, but Not Lovers.`,
                banner: '/img-noticias/more-than/more-than-banner.jpg',
                alt: 'banner-noticia',
                img: '/img-noticias/more-than/more-than-icone.jpg',
                alt2: 'icone-noticia',
                link: 'https://www.crunchyroll.com/pt-br',

                elenco: [
                    {
                        id: 1,
                        personagem: 'Yakuin Jiro',
                        nome: 'Bruno Sangregório'
                    },
                    {
                        id: 2,
                        personagem: 'Watanabe Akari',
                        nome: 'Mari Haruno'
                    },
                    {
                        id: 3,
                        personagem: 'Sakurazaka Shiori',
                        nome: 'Nina Carvalho'
                    },
                    {
                        id: 4,
                        personagem: 'Sadaharu Kamo',
                        nome: 'Gabriel Martins'
                    },
                    {
                        id: 5,
                        personagem: 'Tenjin Minami',
                        nome: 'Fábio Campos'
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
        font-weight: bold;
        color: #ff7a00;
    }

    .img-promocional {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .img-promocional img {
        width: 640px;
        height: 905px;
    }

    .lista-evento {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        padding: 10px 35px;
        font-size: 14px;
    }
    .lista-evento p {
        font-size: 16px;
    }

    .sinopse p {
        display: flex;
        justify-content: flex-start;
        padding-left: 15px;
    }


    .conteudo-sinopse {
        display: flex;
        justify-content: center;
        padding-left: 100px;
        width: 700px;
        font-size: 14px;
        font-style: italic;
    }

    .ads {
        display: flex;
        justify-content: center;
        padding: 20px;
    }

    @media (min-width: 100px) and (max-width: 300px) {
        .noticia, .divisoria {
            width: 260px;
        }

        .titulo {
            font-size: 20px;
        }

        .noticia p {
            font-size: 13px;
        }

        .banner {
            padding-left: 3px;
        }

        .banner img {
            height: 150px;
            width: 250px;
        }

        .icone img {
           display: none;
        }

        .img-promocional img {
            width: 250px;
            height: 360px;
        }

        .conteudo-sinopse {
            display: flex;
            justify-content: center;
            padding-left: 0px;
            width: 260px;
            font-style: italic;
        }
    
        .ads {
            display: none;
        }
     }
    @media (min-width: 301px) and (max-width: 760px) {
        .noticia, .divisoria {
            width: 340px;
        }

        .titulo {
            font-size: 20px;
        }

        .noticia p {
            font-size: 13px;
        }

        .banner {
            padding-left: 12px;
        }

        .banner img {
            height: 180px;
            width: 300px;
        }

        .icone img {
           display: none;
        }

        .img-promocional img {
            width: 300px;
            height: 390px;
        }

        .conteudo-sinopse {
            display: flex;
            justify-content: center;
            padding-left: 18px;
            width: 300px;
            font-style: italic;
        }
    
        .ads {
            display: none;
        }
     }
     
     @media (min-width: 761px) and (max-width: 1100px) {
         .titulo p {
             font-size: 28px;
         }
         .noticia, .divisoria {
            width: 680px;
         }

         .icone img {
            display: none;
         }

         .banner {
            padding-left: 12px;
         }

         .conteudo-sinopse {
            display: flex;
            justify-content: center;
            padding-left: 90px;
            width: 500px;
            font-size: 14px;
            font-style: italic;
        }
        .ads img {
            width: 650px;
        }
     }

</style>