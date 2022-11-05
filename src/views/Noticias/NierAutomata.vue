<template>
    <div class="container-noticia">
        <div class="noticia">
            <h1 class="titulo">{{ titulo }}</h1>
            <p>A estreia está agendada para janeiro de 2023</p>
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
                <p>Nem toda máquina quer lutar, e agora um novo visual e um novo teaser trailer foram divulgados para o anime <span class="crunchy">NieR:Automata
                    Ver1.1a</span>, baseado no popular jogo desenvolvido pela PlatinumGames e dirigido por Yoko Taro, o anime tem estreia agendada para
                    janeiro de 2023 e contará com a produção do estúdio <strong>A-1 Pictures</strong>.
                    <br/>
                    <br>
                    A nova ilustração e trailer apresentam <strong>Pascal</strong>, uma Machine Lifeform pacifista que lidera uma vila de máquinas pacíficas, e também
                    foi confirmado que a dubladora <strong>Aoi Yuki</strong> reprisa seu papel como Pascal do jogo <strong>NieR:Automata</strong> na adaptação em anime.
                   </p>
            </div>
            <p class="nome-img-promo">Novo Vídeo Promocional:</p>
            <div class="video-promocional">
                <iframe class="video" src="https://www.youtube.com/embed/h72tvfZ9zvc" title="アニメ『NieR:Automata Ver1.1a』Promotion File 004：パスカル" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <p class="nome-img-promo">Ilustração Promocional:</p>
            <div class="img-promocional">
                <img src="/img-noticias/nier-automata-promocional.jpg" alt="nier-automata">
            </div>
            <div class="descricao">
               <p>O jogo original <strong>NieR:Automata</strong> foi lançado no PlayStation 4 no Japão em 23 de fevereiro de 2017, com a América do Norte
                seguindo em 7 de março e outras regiões em 10 de março. Também chegou ao Xbox One em 26 de junho de 2018, vendendo mais
                de 5,5 milhões de cópias em todas as versões. Foi dirigido por Yoko Taro e segue 2B e 9S enquanto elas lutam contra uma invasão
                mecânica ao lado da Resistência.
               </p>
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
        name: 'TheAngel',
        data() {
            return {
                titulo: `Anime de NieR:Automata Ver1.1a ganha novo trailer focado no Pascal`,
                banner: '/img-noticias/nier-automata-banner.jpg',
                alt: 'banner-noticia',
                img: '/img-noticias/nier-automata-icone.jpg',
                alt2: 'icone-noticia',
                link: 'https://www.crunchyroll.com/pt-br',
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

    .video-promocional {
        display: flex;
        justify-content: center;
    }

    .video {
        width: 700px;
        height: 400px;
    }

    .nome-img-promo {
        text-align: center;
        color: #ff7a00;
        font-weight: bold;
        margin: 10px 0 10px 0;
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

    @media (min-width: 200px) and (max-width: 760px) {
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

        .video {
            width: 300px;
            height: 200px;
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

         .video {
            width: 640px;
            height: 380px;
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