<template>
    <div class="container-animes">
        <div class="animes">
            <img src="/img/demon-slayer.jpg" alt="Demon Slayer">
            <p>Demon Slayer</p>
            <p class="serie">Série</p>
        </div>
        <div class="animes">
            <img src="/img/dragonball-super.jpg" alt="Dragon Ball Super">
            <p>Dragon Ball Super</p>
            <p class="serie">Série</p>
        </div>
        <div class="animes">
            <img src="/img/one-piece.jpg" alt="One Piece">
            <p>One Piece</p>
            <p class="serie">Série</p>
        </div>
        <div class="animes">
            <img src="/img/my-hero-academia.jpg" alt="My Hero Academia">
            <p>My Hero Academia</p>
            <p class="serie">Série</p>
        </div>
        <div class="animes">
            <img src="/img/ao-ashi.jpg" alt="Ao Ashi">
            <p>AoAshi</p>
            <p class="serie">Série</p>
        </div>
   </div>
</template>

<script>
    export default {
        name: 'Animes'
    }
</script>

<style lang="scss" scoped>
    .container-animes {
        color: aliceblue;
        background-color: #050505;
        display: grid;
        grid-template-columns: repeat(auto-fill, 10rem);
        grid-template-rows: repeat(auto-fill, 16rem);
        justify-content: center;
        gap: 3rem;
        padding: 2rem 0;
        margin: 0 23rem 0 23rem;
        border-top: solid 5px #ff7a00;
    }

    .animes {
    }

    .serie {
        font-size: 16px;
        color: #ff7a00;
    }

</style>