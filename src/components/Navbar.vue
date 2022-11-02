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
        }

        #menu :hover {
            color: aliceblue;
            transition: 0.5s;
        }

        #nav-list {
        display: none;
        }
        #nav-list.open {
            position: fixed;
            top: 110px;
            right: 1px;
            padding-top: 10px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            justify-content: right;
            height: 100%;
            width: 25%;
            background-color: #464646;
            user-select: none;
            z-index: 100;
        }
        #nav-list.open > nav {
            overflow: scroll;
        }
        #nav-list.open > nav > span {
            display: flex;
            align-items: center;
            width: 50%;
            height: 40px;
            padding-left: 30px;
            background-color: #fff;
            border: 1px solid #ededed;
            border-width: 0px 0px 1px 0px;
            user-select: none;
            cursor: pointer;
        }
        #nav-list.open > nav > span:nth-last-child(1) {
            border: none;
        }
     }
     
</style>