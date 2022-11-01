<template>
    <div class="container-noticia">
        <div class="noticia">
            <h1 class="titulo">{{ titulo }}</h1>
            <p>O estúdio Project No.9 é responsável pela produção</p>
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
                <p>Foi revelada hoje uma nova ilustração promocional de Halloween para a adaptação em anime da light novel <span class="crunchy">The Angel Next Door 
                    Spoils Me Rotten</span>, escrita por <strong>Saekisan</strong> e ilustrada por <strong>Hanekoto</strong>. O anime vai contar com a direção de <span class="crunchy">Kenichi Imaizumi</span> (After 
                    School Dice Club) no estúdio <span class="crunchy">Project No.9</span> (Higehiro: After Being Rejected, I Shaved and Took in a High School Runaway). O anime 
                    tem estreia <span class="crunchy">agendada para 2023</span>.</p>
            </div>
            <p class="nome-img-promo">Ilustração Promocional de Halloween:</p>
            <div class="img-promocional">
                <img src="/img-noticias/the-angel-promocional.jpg" alt="the-angel">
            </div>
            <p class="nome-img-promo">Um vídeo também foi lançado para o visual:</p>
            <div class="video-promocional">
                <iframe class="video" src="https://www.youtube.com/embed/VA46_oK5FBU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <p class="nome-img-promo">Ilustração Promocional:</p>
            <div class="img-promocional">
                <img src="/img-noticias/the-angel-promocional2.jpg" alt="the-angel">
            </div>
            <div class="descricao">
               <p>Além de <strong>Kenichi Imaizumi</strong> (After School Dice Club) na direção, <strong>Keiichiro Ochi</strong> (<span class="crunchy">The Quintessential Quintuplets</span>) escreverá a 
                composição da série a partir dos light novels originais de Saekisan. <strong>Takayuki Noguchi</strong> (Queen's Blade) adaptará os designs 
                originais dos personagens de Hanekoto para a animação e <strong>Moe Hyuga</strong> (Steins;Gate 0) está cuidando da trilha sonora.
               </p>
               <br>
               <p><strong>Taito Ban</strong> vai interpretar Amane Fujimiya na série, enquanto <strong>Manaka Iwami</strong> faz a voz de Mahiru Shiina, <strong>Taku Yashiro</strong> interpreta 
                Itsuki Akazawa  e <strong>Haruka Shiraishi</strong> interpreta Chitose Shirakawa.
               </p>
               <br>
               <p>A história original de <span class="crunchy">The Angel Next Door Spoils Me Rotten</span> foi lançada inicialmente no site de publicação independente 
                Shosetsuka ni Naro por Saekisan antes de ser adquirida pela <strong>GA Bunko</strong> e lançada comercialmente com ilustrações de Hanekoto.
               </p>
            </div>
            <div class="sinopse">
                <p class="crunchy">Sinopse:</p>
                <br>
                <div class="conteudo-sinopse">
                    <div>
                        <p>
                            Mahiru é uma garota tão linda que seus colegas a chamam de "anjo". Ela não é apenas uma estrela atlética e com notas 
                            perfeitas, ela também é linda de morrer. Amane, um cara normal e desleixado assumido, nunca pensou muito na beleza 
                            divina, apesar de frequentar a mesma escola. Mas tudo muda quando ele vê Mahiru sentada sozinha em um parque 
                            durante uma tempestade. Assim começa a estranha relação entre este par incrivelmente improvável!
                        </p>
                    </div>
                </div>
                <br>
            </div>
            <div class="divisoria"></div>
            <br>
            <div class="descricao">
                <p>Fique ligado na <span class="crunchy">Anime Project Notícias</span> e não perca nenhuma novidade!</p>
            </div>
            <br>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TheAngel',
        data() {
            return {
                titulo: `Adaptação em anime de The Angel Next Door Spoils Me Rotten ganha nova ilustração promocional de Halloween`,
                banner: '/img-noticias/the-angel-banner.png',
                alt: 'banner-noticia',
                img: '/img-noticias/the-angel-icone.png',
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
        padding-top: 50px;
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
        width: 700px;
        font-size: 14px;
        font-style: italic;
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
     }

</style>