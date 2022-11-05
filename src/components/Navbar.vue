<template>
    <nav id="nav">
        <router-link @click="scrollToTop()" to="/" id="logo-url">
            <img :src="logo" :alt="alt" id="logo">
        </router-link>
        <div id="menu">
            <fa id="barras" icon="fa-solid fa-bars" @click="showMenu()"/>
            <span @click="showMenu()">Menu</span>
        </div>
        <div id="nav-list">
            <router-link @click="showMenu(), scrollToTop()" to="/">Inicio</router-link>
            <router-link @click="showMenu(), scrollToTop()" to="/about">Sobre</router-link>
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
        },
        scrollToTop() {
                window.scrollTo(0,0)
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

    @media (min-width: 100px) and (max-width: 200px) {
        #nav {
            padding: 12px;
        }
        #menu {
            padding-bottom: 15px;
            font-size: 15px;
        }
        #barras {
            width: 20px;
        }
        #logo {
            width: 80px;
            height: 60px;
            padding-right: 20px;
        }
    }
    @media (min-width: 201px) and (max-width: 760px) {
        #nav {
            padding: 18px 30px;
        }
        #menu {
            display: flex;
            color: #ff7a00;
            font-weight: bold;
            justify-content: space-evenly;
            padding-bottom: 15px;
            font-size: 18px;
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
            top: 90px;
            right: 1px;
            padding-top: 50px;
            padding-left: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            height: 100%;
            width: 35vw;
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
        #barras {
            width: 30px;
        }
        #logo {
            width: 80px;
            height: 60px;
            padding-right: 20px;
        }
    }

    @media (min-width: 761px) and (max-width: 1000px) {
        

        
     }
     
</style>