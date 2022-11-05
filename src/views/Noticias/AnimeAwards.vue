<template>
    <div class="container-noticia">
        <div class="noticia">
            <h1 class="titulo">{{ titulo }}</h1>
            <p>O evento acontecerá dia 4 de março de 2023, em Tóquio</p>
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
                <p>
                    O <strong>Anime Awards 2023</strong> está chegando e a <a :href="link" class="crunchy">Crunchyroll</a> tem o orgulho de anunciar os dois apresentadores do evento! Revelado no TIFFCOM, 
                    a seiyuu <strong>Sally Amaki</strong> (a Carol Olston em <span class="crunchy">Tomo-chan Is a Girl!</span>) e o apresentador <strong>Jon Kabira</strong> irão apresentar a premiação que ocorrerá no ano que vem.</p>
            </div>
            <div class="img-pessoa">
                <img src="/img-anime-awards/sally-akami.jpg" alt="sally-akami">
            </div>
            <div class="descricao">
                <p>Nascida em Los Angeles, <strong>Sally Amaki</strong> faz parte do projeto de grupo digital de idol de vozes <strong>22/7</strong> (lê-se: “Nanabun no Nijuni”), 
                    criado por <strong>Yasushi Akimoto</strong> e surgido da colaboração entre a <strong>Sony Music</strong> e a <strong>ANIPLEX</strong>. Ela é ativa em diversas áreas como 
                    apresentadoras de shows de TV e eventos graças a sua fluência em inglês.</p>
                    <br>
                <p><span class="falando">“Estou bastante animada para ver quais animes ganharão em cada uma das categorias! Darei meu melhor para apresentar este evento tão empolgante!”</span>, disse <strong>Amaki</strong>.</p>
            </div>
            <div class="img-pessoa">
                <img src="/img-anime-awards/jon-kabira.jpg" alt="jon-kabira">
            </div>
            <div class="descricao">
                <p>De Okinawa, Japão, <strong>Jon Kabira</strong> estudou na Universidade de Califórnia, Berkeley, enquanto era aluno da Universidade Cristã 
                    Internacional. Ele foi contrato pela <strong>CBS Sony</strong> (agora chamada de <strong>Sony Music Entertainment</strong>), para trabalhar em países estrangeiros na importação 
                    de materiais de gravação e promoções de artistas. Atualmente, ele trabalha como apresentador de um programa esportivo e de um programa informativo, 
                    além de aparecer em comerciais de TV, propaganda, revistas e apresentações de palco.</p>
                    <br>
                    <p><span class="falando">"Estou muito feliz e animado por ser convidado para apresentar a sétima edição anual do Crunchyroll Anime Awards! Sally Amaki e eu estamos ansiosos para o evento juntamente com o mundo inteiro. Nos vemos lá!"</span>, disse <strong>Kabira</strong>.</p>
            </div>
            <div class="divisoria"></div>
            <br>
            <div class="descricao">
                <p>A sétima edição do Anime Awards acontecerá dia 4 de março de 2023, em uma cerimônia ao vivo no Grand Prince Hotel New Takanawa, em Tóquio, com a presença de criadores, artistas e membros de estúdios de anime. O evento será transmitido para o público do resto do mundo. Os juízes da premiação serão anunciados ainda neste ano, com os indicados e o início da votação dos fãs previstos para o começo de 2023.</p>
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
        name: 'AnimeAwards',
        data() {
            return {
                titulo: `Sally Amaki e Jon Kabira serão os apresentadores do Anime Awards 2023`,
                banner: '/img-noticias/anime-awards-banner.png',
                alt: 'banner-noticia',
                img: '/img-noticias/anime-awards-noticia.jpg',
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

    .img-pessoa {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .img-pessoa img {
        border: #2b2b2b solid 2px;
        border-radius: 50%;
        width: 500px;
        height: 500px;
    }

    .falando {
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

        .img-pessoa img {
            width: 250px;
            height: 250px;
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
         .ads img {
            width: 650px;
         }
     }

</style>