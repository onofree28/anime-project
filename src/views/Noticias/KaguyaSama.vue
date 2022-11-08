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
                <p>Foi revelado hoje que o especial <span class="crunchy">Kaguya-sama: Love is War -The First Kiss That Never Ends-</span>, sequência da terceira temporada
                    de <span class="crunchy">KAGUYA-SAMA: LOVE IS WAR</span>, tem estreia agendada para o dia <strong>17 de dezembro</strong> nos cinemas do Japão, antes de chegar nas
                    TVs. Também foi divulgado que uma pré-estreia com a primeira parte do especial, com duração aproximada de um episódio, será
                    exibida no evento <strong>Anime NYC</strong>, em <strong>19 de novembro</strong> nos EUA.
                    <br/>
                    <br>
                    O anime conta com a produção de uma equipe poderosa no estúdio <span class="crunchy">A-1 Pictures</span> (86 Eighty-Six), com <span class="crunchy">Mamoru Hatakeyama</span>
                    (Record of Grancrest War) na direção, <span class="crunchy">Yasuhiro Nakanishi</span> (A Couple of Cuckoos) na composição de série, <span class="crunchy">Yuuko Yahiro</span> (Record
                    of Grancrest War) na adaptação do design de personagens para o anime e <span class="crunchy">Kei Haneoka</span> (Owarimonogatari) na trilha sonora.
                   </p>
            </div>
            <p class="nome-img-promo">Novo Vídeo Promocional:</p>
            <div class="video-promocional">
                <iframe class="video" src="https://www.youtube.com/embed/Z_wwt_eYmdE" title="【特報】「かぐや様は告らせたい-ファーストキッスは終わらない-」2022年12月17日㈯より特別上映" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <p class="nome-img-promo">Ilustração Promocional :</p>
            <div class="img-promocional">
                <img src="/img-noticias/kaguya-sama/kaguya-sama-promocional.jpg" alt="nier-automata">
            </div>
            <div class="twitter">
                <blockquote class="twitter-tweet"><p lang="en" dir="ltr"><a href="https://twitter.com/hashtag/NEWS?src=hash&amp;ref_src=twsrc%5Etfw">#NEWS</a> An early Christmas present arrives to <a href="https://twitter.com/animenyc?ref_src=twsrc%5Etfw">@animenyc</a> with the world premiere preview screening of the first part (about one episode length) of the highly anticipated Kaguya-sama: Love Is War -The First Kiss That Never Ends- on November 19th! 🎁🗽 <a href="https://t.co/eaYqA6J9h6">pic.twitter.com/eaYqA6J9h6</a></p>&mdash; Aniplex of America (@aniplexUSA) <a href="https://twitter.com/aniplexUSA/status/1586668550386724864?ref_src=twsrc%5Etfw">October 30, 2022</a></blockquote> 
            </div>
            <div class="descricao">
               <p><strong>Aoi Koga</strong>, responsável pela voz original de Kaguya Shinomiya estará presente no evento como convidada especial ao lado do
                produtor da A-1 Pictures, <strong>Yuichiro Kikuchi</strong>, e do produtor da Aniplex, <strong>Tatsuya Ishikawa</strong>.
               </p>
               <br>
            </div>
            <div class="img-promo2">
                <img src="/img-noticias/kaguya-sama/kaguya-sama-promocional2.jpg" alt="nier-automata">
            </div>
            <p class="nome-img-promo">Vídeo Promocional do Anime :</p>
            <div class="video-promocional">
                <iframe class="video" src="https://www.youtube.com/embed/b4tGGzQve3M" title="「かぐや様は告らせたい-ウルトラロマンティック-」本予告 / 4月8日㈮24時放送開始" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <p class="nome-img-promo">Ilustração Promocional :</p>
            <div class="img-promocional">
                <img src="/img-noticias/kaguya-sama/kaguya-sama-promocional3.jpg" alt="nier-automata">
            </div>
            <div class="sinopse">
                <p class="crunchy">Sinopse:</p>
                <br>
                <div class="conteudo-sinopse">
                    <div>
                        <p>
                            Considerado um gênio por possuir as maiores notas do país, Miyuki Shirogane é o presidente do grêmio estudantil da
                            prestigiosa escola Shuchiin, trabalhando junto com a bela e rica vice-presidente Kaguya Shinomiya. Os dois são
                            considerados como o casal perfeito entre os estudantes da Shuchiin, apesar de que eles não estejam em um
                            relacionamento amoroso.
                            <br><br>
                            Contudo, depois de passar tanto tempo juntos, os dois acabaram se apaixonando. Infelizmente, nenhum dos dois está
                            disposto em admitir seus sentimentos e confessar para o outro. Já que ambos enxergam isso como um sinal de fraqueza.
                            Agarrando-se ao orgulho e transformando o amor em um campo de batalha, os dois se dedicam em bolar estratégias para
                            fazer o outro confessar seu amor primeiro.
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
        name: 'KaguyaSama',
        data() {
            return {
                titulo: `Kaguya-sama: Love is War -The First Kiss That Never Ends- ganha vídeo promocional e data de estreia`,
                banner: '/img-noticias/kaguya-sama/kaguya-sama-banner.jpg',
                alt: 'banner-noticia',
                img: '/img-noticias/kaguya-sama/kaguya-sama-icone.jpg',
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
    .twitter {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 25px;
    }
    .img-promocional img {
        width: 640px;
        height: 905px;
    }
    .img-promo2 {
        display: flex;
        justify-content: center;
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
        font-style: italic;
    }
    .sinopse {
        padding-top: 10px;
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
        


        .video {
            width: 250px;
            height: 150px;
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
            height: 420px;
        }
        .img-promo2{
            display: flex;
            justify-content: center;
            height: 180px;
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
         .img-promo2{
            display: flex;
            justify-content: center;
            height: 360px;
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