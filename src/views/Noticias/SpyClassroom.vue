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
                <p>Foi revelado recentemente um novo vídeo e ilustração promocional para a adaptação em anime da light novel <span class="crunchy">Spy Classroom</span>, de 
                    <strong>Takemachi</strong> e <strong>Tomari</strong>. A estreia está agendada para <strong>janeiro de 2023</strong> e os novos materiais promocionais são focados na Sibylla, 
                    interpretada por <strong>Nao Toyama</strong> (Ruka em <span class="crunchy">Rent-a-Girlfriend</span>).
                    <br/>
                    <br>
                    <strong>Keiichiro Kawaguchi</strong> (<span class="crunchy">Higurashi: When They Cry - GOU</span>) é responsável pela direção do anime no estúdio <strong>Feel</strong> (<span class="crunchy">My Teen 
                    Romantic Comedy SNAFU, Remake Our Life!</span>), enquanto isso <strong>Shinichi Inozume</strong> (<span class="crunchy">Yona of the Dawn</span>) é responsável pela 
                    composição da série e <strong>Sumie Kinoshita</strong> (<span class="crunchy">Remake Our Life!</span>) cuida da adaptação do design de personagens para o anime.
                    <br>
                    <br>
                    <strong>Yuichiro Umehara</strong> (Eugene em <span class="crunchy">Mobile Suit Gundam: Iron Blooded Orphans</span>) está interpretando o espião de elite <strong>Klaus</strong>, com 
                    <strong>Sora Amamiya</strong> (Chizuru em <span class="crunchy">Rent-a-Girlfriend</span>) ao seu lado como <strong>Lily</strong>, uma das várias trainees sem experiência em espionagem.
                   </p>
            </div>
            <p class="nome-img-promo">Vídeo Promocional da Sibylla:</p>
            <div class="video-promocional">
                <iframe class="video" src="https://www.youtube.com/embed/4cvpe8mAmzQ" title="TVアニメ「スパイ教室」キャラクターPV：ジビア編【2023年1月ONAIR】" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <p class="nome-img-promo">Ilustração Promocional da Sibylla:</p>
            <div class="img-promocional">
                <img src="/img-noticias/spy-classroom-promocional.jpg" alt="spy-classroom">
            </div>
            <br>
            <p class="nome-img-promo">Segundo Vídeo Promocional:</p>
            <div class="video-promocional">
                <iframe class="video" src="https://www.youtube.com/embed/BdrLDTuDQkc" title="TVアニメ「スパイ教室」ティザーPV" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="lista-evento">
                <p class="crunchy">Novos membros para o elenco:</p>
                <ul v-for="lista in elenco" :key="lista.id">
                    <li>{{ lista.nome }}</li>
                </ul>
            </div>
            <p class="nome-img-promo">Nova Ilustração Promocional:</p>
            <div class="img-promocional">
                <img src="/img-noticias/spy-classroom-promocional2.png" alt="spy-classroom">
            </div>
            <p class="nome-img-promo">Segundo Vídeo Promocional:</p>
            <div class="video-promocional">
                <iframe class="video" src="https://www.youtube.com/embed/bFRo_FCqRyo" title="TVアニメ「スパイ教室」特報映像" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <p class="nome-img-promo">Primeira Ilustração Promocional:</p>
            <div class="img-promocional">
                <img src="/img-noticias/spy-classroom-promocional3.jpg" alt="spy-classroom">
            </div>
            <p class="nome-img-promo">Capas dos volumes 1 ao 7 das light novels:</p>
            <div class="img-capas">
                <img class="capas" src="/img-noticias/spy-classroom-capas.png" alt="spy-classroom">
                <img class="capa" src="/img-noticias/spy-classroom-capa.png" alt="spy-classroom">
            </div>
            <br>
            <div class="sinopse">
                <p class="crunchy">Sinopse:</p>
                <div class="conteudo-sinopse">
                    <div>
                        <p>
                            A INTELIGÊNCIA É A ARMA MAIS PERIGOSA <br>
                            Após um conflito militar devastador, os países lutam suas guerras nas sombras. Um espião incomum, Klaus, nunca
                            falhou no trabalho apesar de suas peculiaridades, e ele está montando uma equipe para assumir uma Missão 
                            Impossível – uma com mais de 90% de chance de fracasso. No entanto, seus membros escolhidos são todos
                            fracassados sem experiência prática. Eles terão que usar todos os truques do livro (e alguns que não são) para provar
                            que estão à altura da tarefa!
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
        name: 'TheAngel',
        data() {
            return {
                titulo: `Adaptação em anime de Spy Classroom ganha novo vídeo promocional focado na Sibylla`,
                banner: '/img-noticias/spy-classroom-banner.png',
                alt: 'banner-noticia',
                img: '/img-noticias/spy-classroom-icone.png',
                alt2: 'icone-noticia',
                link: 'https://www.crunchyroll.com/pt-br',

                elenco: [
                    {
                        id: 1,
                        nome: 'Miku Ito (Kokkoro em Princess Connect! Re:Dive) como Grete'
                    },
                    {
                        id: 2,
                        nome: 'Nao Toyama (Ruka em Rent-a-Girlfriend) como Sibylla'
                    },
                    {
                        id: 3,
                        nome: 'Aoi Yuki (Mami em Rent-a-Girlfriend) como Monika'
                    },
                    {
                        id: 4,
                        nome: 'Sumire Uesaka (Shalltear em Overlord) como Thea'
                    },
                    {
                        id: 5,
                        nome: 'Ayane Sakura (Tomoe em Tsukimichi: Moonlit Fantasy) como Sara'
                    },
                    {
                        id: 6,
                        nome: 'Tomori Kusunoki (Neiru Aonuma em Wonder Egg Priority) como Annett'
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

    .img-capas {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .img-capas img {
        padding-top: 15px;
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

        .capas {
            height: 330px;
        }

        .capa {
            height: 251px;
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