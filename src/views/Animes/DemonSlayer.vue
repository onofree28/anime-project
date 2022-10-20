<template>
    <div class="container">
        <div class="banner">
            <img src="/banner-pagina/demon-slayer-banner-pagina.jpg" alt="demon-slayer-banner">
        </div>
        <div class="container-info">
            <div class="titulo">
                <h1>Demon Slayer: Kimetsu no Yaiba</h1>
            </div>
            <div class="info">
                <p>{{ sinopse }}</p>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'DemonSlayer',
        data() {
            return {
                sinopse: 'Japão, era Taisho. Tanjiro, um bondoso jovem que ganha a vida vendendo carvão, descobre que sua família foi massacrada por um demônio. E pra piorar, Nezuko, sua irmã mais nova e única sobrevivente, também foi transformada num demônio. Arrasado com esta sombria realidade, Tanjiro decide se tornar um matador de demônios para fazer sua irmã voltar a ser humana, e para matar o demônio que matou sua família. Um triste conto sobre dois irmãos, onde os destinos dos humanos e dos demônios se entrelaçam, começa agora.'
                    
                
            }
        }
    }
</script>

<style scoped>

    .banner {
        display: flex;
        justify-content: center;
        align-content: center;
        background-color: #2b2b2b;
    }

    .info, .titulo {
        color: aliceblue;
        width: 600px;
        padding-top: 2rem;
    }

    .container-info {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    @media (min-width: 300px) and (max-width: 500px) {
        .banner img {
            width: 300px;
            height: 169px;
        }

        .info, .titulo {
            width: 300px;
        }
        .titulo {
            font-size: 12px;
        }
        .info {
            font-size: 14px;
        }
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        .banner img {
            width: 500px;
            height: 282px;
        }
        .info, .titulo {
            width: 450px;
        }
        .titulo {
            font-size: 12px;
        }
        .info {
            font-size: 14px;
        }
    }
</style>