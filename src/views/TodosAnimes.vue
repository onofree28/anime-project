<template>
    <div class="container-todos">
        <div class="container-pesquisa">
            <div class="search-box">
                <fa class="icon" icon="fa-solid fa-magnifying-glass" />
                <input class="text" type="text" placeholder="Pesquise" v-model="search">
            </div>
        </div>
        <div class="container-animes">
            <div class="cada-anime" v-for="anime in animesFiltrados" :key="anime.id">
                <div class="animes">
                    <router-link @click="scrollToTop()" :to="anime.link">
                        <img :src="anime.img" :alt="anime.alt">
                    </router-link>
                    <router-link @click="scrollToTop()" style="text-decoration: none;" :to="anime.link">
                        <p class="nome">{{ anime.nome }}</p>
                    </router-link>
                    <p class="serie">{{ anime.tipo }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TodosAnimes',
    data() {
        return {
            search: '',
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
                    {
                        id:9,
                        img: '/img/chainsaw-man.jpg',
                        alt: 'Chainsaw Man',
                        nome: 'Chainsaw Man',
                        tipo: 'Série',
                        link: '/chainsaw-man'
                    },
                    {
                        id:10,
                        img: '/img/boruto.jpg',
                        alt: 'Boruto',
                        nome: 'Boruto',
                        tipo: 'Série',
                        link: '/boruto'
                    },
                    {
                        id:11,
                        img: '/img/naruto-shippuden.jpg',
                        alt: 'Naruto Shippuden',
                        nome: 'Naruto Shippuden',
                        tipo: 'Série',
                        link: '/naruto-shippuden'
                    },
                ],
        }
    },
    computed: {
        animesFiltrados() {
                return this.animes.filter(anime => anime.nome.toLowerCase().includes(this.search.toLowerCase()))
        }
    },
    methods: {
            scrollToTop() {
                window.scrollTo(0,0)
            }
        }
}
</script>

<style scoped>
    .container-todos {
        padding-top: 150px;
        height: 130vh;
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

    .container-animes {
        display: flex;
        justify-content: center;
        align-content: space-between;
        flex-wrap: wrap;
    }

    .container-animes :hover {
        background-color: #616161;
        transition: 0.5s;
    }

    .animes {
        padding: 15px;
    }

    .animes img {
        height: 212px;
        width: 145px;
    }

    .nome {
        color: aliceblue;
        font-size: 14px;
    }
    
    .serie {
        font-size: 14px;
        color: #ff7a00;
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
    @media (min-width: 100px) and (max-width: 730px) {
        .cada-anime:nth-child(n+7) {
            display: none;
        }
    }

    @media (min-width: 100px) and (max-width: 420px) {
        
        .animes img {
            height: 175px;
            width: 120px;
        }

        .nome, .serie {
            font-size: 12px;
        }
    }
</style>