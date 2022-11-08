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
                <p>Foi revelado recentemente a intérprete para a música de encerramento da adaptação em anime de <span class="crunchy">Sugar Apple Fairy Tale</span>, 
                    baseado na série de light novels de fantasia escrita por <strong>Miri Mikawa</strong> e ilustrada por <strong>aki</strong> sobre uma jovem fabricante de doces que 
                    tenta fazer amizade com sua fada guarda-costas.
                    <br/>
                    <br>
                    A música de encerramento, intitulada "Kanaeru" (Para Conceder um Desejo), é interpretada por <strong>Sumire Morohoshi</strong>. A música 
                    apresenta letras de Yuho Iwasato, composição de Naohiro Minami e arranjo de <strong>NAOKI-T</strong>.
                   </p>
            </div>
            <p class="nome-img-promo">Vídeo Promocional:</p>
            <div class="video-promocional">
                <iframe class="video" src="https://www.youtube.com/embed/Op1KIOgA3gc" title="TVアニメ『シュガーアップル・フェアリーテイル』ティザーPV" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <p class="nome-img-promo">Ilustração Promocional:</p>
            <div class="img-promocional">
                <img src="/img-noticias/sugar-apple/sugar-apple-promocional.jpg" alt="sugar-apple">
            </div>
            <div class="descricao">
               <p> <span class="crunchy">Sugar Apple Fairy Tale</span> está sendo dirigido por <strong>Yohei Suzuki</strong> (<span class="crunchy">Planet With</span>), junto ao estúdio <strong>J.C. STAFF</strong>. Os roteiros ficam a cargo 
                de <strong>Seishi Minakami</strong> (<span class="crunchy">A Certain Scientific Railgun</span>), design de personagens por <strong>Haruko Iizuka</strong> (<span class="crunchy">Horimiya</span>) e música por <strong>Hinako 
                Tsubakiyama</strong> (<span class="crunchy">SABIKUI BISCO</span>). <strong>Yuka Nukui</strong> (Mandara em <span class="crunchy">Shinobi no Ittoki</span>) e <strong>Masaaki Mizunaka</strong> (Ryuuen em <span class="crunchy">Classroom of 
                the Elite</span>) darão voz aos protagonistas Anne e Challe respectivamente.
               </p>
               <br>
               <p>A light novel <span class="crunchy">Sugar Apple Fairy Tale</span> foi lançado originalmente em 17 volumes encadernados entre abril de 2010 e janeiro de 2015!</p>
               <br>
            </div>
            <div class="sinopse">
                <p class="crunchy">Sinopse:</p>
                <br>
                <div class="conteudo-sinopse">
                    <div>
                        <p>
                            Num mundo onde fadas são compradas e vendidas para quem paga mais, a convivência entre os humanos e o povo feérico 
                            não é lá muito amigável. Mas amizade é exatamente o que Anne Halford quer de Challe, sua fada guarda-costas, ainda que 
                            ele não goste tanto da ideia. Como seu mestre, Anne lhe ordena que a escolte por uma área bastante perigosa, mas com um 
                            guarda-costas ansioso para escapar da escravidão, ela terá que encarar um desafio muito maior do que imaginava...
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
            <div class="ads">
                <a href="//www.crunchyroll.com/pt-br/welcome"><img src="/img/assista-animes-sem-ads.png" alt="banner-crunchy"></a> 
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SugarApple',
        data() {
            return {
                titulo: `Adaptação em anime de Sugar Apple Fairy Tale revela intérprete para sua música de encerramento`,
                banner: '/img-noticias/sugar-apple/sugar-apple-banner.jpg',
                alt: 'banner-noticia',
                img: '/img-noticias/sugar-apple/sugar-apple-icone.jpg',
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
            height: 390px;
        }

        .video {
            width: 250px;
            height: 150px;
        }
        .conteudo-sinopse {
            display: flex;
            justify-content: center;
            padding-left: 0px;
            width: 250px;
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