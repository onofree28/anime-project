<template>
    <div class="container-todos">
        <div class="container-pesquisa">
            <div class="search-box">
                <fa class="icon" icon="fa-solid fa-magnifying-glass" />
                <input class="text" type="text" placeholder="Pesquise">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TodosAnimes',
    data() {
        return {
            animes: [
                    {
                        id:1,
                        img: '/img/demon-slayer.jpg',
                        alt: 'Demon Slayer',
                        nome: 'Demon Slayer',
                        tipo: 'Série',
                        link: '/demon-slayer'
                    },
                    {
                        id:2,
                        img: '/img/dragonball-super.jpg',
                        alt: 'Dragon Ball Super',
                        nome: 'Dragon Ball Super',
                        tipo: 'Série',
                        link: '/dragonball-super'
                    },
                    {
                        id:3,
                        img: '/img/one-piece.jpg',
                        alt: 'One Piece',
                        nome: 'One Piece',
                        tipo: 'Série',
                        link: '/one-piece'
                    },
                    {
                        id:4,
                        img: '/img/my-hero-academia.jpg',
                        alt: 'My Hero Academia',
                        nome: 'My Hero Academia',
                        tipo: 'Série',
                        link: '/my-hero-academia'
                    },
                    {
                        id:5,
                        img: '/img/ao-ashi.jpg',
                        alt: 'AoAshi',
                        nome: 'AoAshi',
                        tipo: 'Série',
                        link: '/ao-ashi'
                    },
                    {
                        id:6,
                        img: '/img/bleach.jpg',
                        alt: 'Bleach',
                        nome: 'Bleach',
                        tipo: 'Série',
                        link: '/bleach'
                    },
                    {
                        id:7,
                        img: '/img/blue-lock.jpg',
                        alt: 'Blue Lock',
                        nome: 'Blue Lock',
                        tipo: 'Série',
                        link: '/blue-lock'
                    },
                    {
                        id:8,
                        img: '/img/spy-family.jpg',
                        alt: 'Spy X Family',
                        nome: 'Spy X Family',
                        tipo: 'Série',
                        link: '/spy-family'
                    },
                ],
        }
    }
}
</script>

<style scoped>
    .container-todos {
        padding-top: 150px;
        height: 100vh;
    }

    .container-pesquisa {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20vh;
    }

    .search-box {
        display: flex;
        background-color: #464646;
        height: 15px;
        width: 500px;
        border-radius: 40px;
        padding: 10px;
    }
    .icon {
        color: #ff7a00;
        padding-right: 5px;
    }

    .text {
        border: none;
        background: none;
        outline: none;
        width: 500px;
        color: aliceblue;
        font-size: 15px;
    }

    @media (min-width: 200px) and (max-width: 575px) {
        .search-box {
            background-color: #464646;
            height: 15px;
            width: 250px;
            border-radius: 40px;
            padding: 10px;
    }
}
</style>