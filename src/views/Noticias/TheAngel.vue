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
                <p></p>
                    <br>
                    <p><span class="falando">"Estou muito feliz e animado por ser convidado para apresentar a sétima edição anual do Crunchyroll Anime Awards! Sally Amaki e eu estamos ansiosos para o evento juntamente com o mundo inteiro. Nos vemos lá!"</span>, disse <strong>Kabira</strong>.</p>
            </div>
            <div class="divisoria"></div>
            <br>
            <div class="descricao">
                <p>A sétima edição do Anime Awards acontecerá dia 4 de março de 2023, em uma cerimônia ao vivo no Grand Prince Hotel New Takanawa, em Tóquio, com a presença de criadores, artistas e membros de estúdios de anime. O evento será transmitido para o público do resto do mundo. Os juízes da premiação serão anunciados ainda neste ano, com os indicados e o início da votação dos fãs previstos para o começo de 2023.</p>
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

    .nome-img-promo {
        text-align: center;
        color: #ff7a00;
        font-weight: bold;
    }


    .falando {
        font-style: italic;
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