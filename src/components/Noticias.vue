<template>
    <div class="container">
        <div class="container-titulo">
            <p class="titulo"><fa icon="fa-solid fa-bullhorn" />  Noticias</p>
        </div>
        <div class="barra"></div>
        <div class="container-noticias">

        </div>
    </div>
</template>

<script>
    export default {
        name: 'Noticias'
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
    }

    .barra {
        width: 1100px;
        height: 5px;
        background-color: #ff7a00;
        padding: 0px 10px 0px 10px;
    }

    .container-noticias {
        width: 1100px;
        height: 200px;
        padding: 20px 10px 20px 10px;
        background-color: #2b2b2b;
    }

    @media (min-width: 200px) and (max-width: 760px) {
        .titulo p {
             font-size: 22px;
         }
     
         .container-titulo, .container-noticias, .barra {
           width: 340px;
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