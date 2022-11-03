<template>
    <nav id="nav">
        <router-link to="/" id="logo-url">
            <img :src="logo" :alt="alt" id="logo">
        </router-link>
        <div id="menu">
            <fa id="barras" icon="fa-solid fa-bars" @click="showMenu()"/>
            <span @click="showMenu()">Menu</span>
        </div>
        <div id="nav-list">
            <router-link to="/">Inicio</router-link>
            <router-link to="/about">Sobre</router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    props: ['logo', 'alt'],
    data() {
        return {
            showMobileMenu: false
        }
    },
    methods: {
        showMenu() {
            this.showMobileMenu = !this.showMobileMenu
            if(this.showMobileMenu) {
                document.getElementById('nav-list').className = 'open'
                document.body.className = 'behind' 
            } else {
                document.getElementById('nav-list').className = undefined
                document.body.className = undefined 
            }
        }
    }
    
}
</script>

<style lang="scss" scoped>
    #nav {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 15px 50px;
    }

    #menu {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 110px;
        height: 100%;
        font-size: 18px;
        cursor: pointer;
    }

    #barras {
        color: #ff7a00;
        height: 30px;
        width: 30px;
        margin-right: 5px;
    }

    #nav-list {
        display: flex;
    }

    #nav a{
        text-decoration: none;
        color: #ff7a00;
        margin: 5px;
        font-size: 20px;
        font-weight: bold;
        margin-right: 50px;
    }
    #nav a:hover {
        color: aliceblue;
        transition: 0.5s;
    }

    #nav #logo-url {
        margin: auto;
        margin-left: 0;
    }

    #logo {
        width: 110px;
        height: 80px;
    }

    #menu {
        display: none;
    }

    @media (max-width: 1000px) {
        #menu {
            display: flex;
            color: #ff7a00;
            font-weight: bold;
            justify-content: space-evenly;
        }

        #menu :hover {
            color: aliceblue;
            transition: 0.5s;
        }

        #nav-list {
            display: none;
        }
        #nav-list a {
            font-size: 25px;
            padding: 30px;
            @keyframes NavLinkFade {
                from {
                    opacity: 0;
                    transform: translateX(50px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            animation: NavLinkFade 1s;
        }
        #nav-list.open {
            position: fixed;
            top: 105px;
            right: 1px;
            padding-top: 50px;
            padding-left: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            height: 100%;
            width: 50vw;
            background-color: #464646;
            user-select: none;
            z-index: 100;
            @keyframes go-back { 0%{
                transform: translateX(100px);
            } 100% {
                transform: translateX(0);
            }}
            animation: go-back 1s;
        }
        
        #nav-list.open > nav {
            overflow: scroll;
        }
     }
     
</style>