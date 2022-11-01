<template>
    <nav class="nav">
        <router-link to="/" id="logo-url">
            <img :src="logo" :alt="alt" id="logo">
        </router-link>
        <div class="mobile-menu">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
        <div class="nav-list">
            <router-link to="/">Inicio</router-link>
            <router-link to="/about">Sobre</router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    props: ['logo', 'alt'] 
    
}
</script>

<style lang="scss" scoped>
    .nav {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 15px 50px;
    }

    .nav-list {
        display: flex;
    }

    .nav a{
        text-decoration: none;
        color: #ff7a00;
        margin: 5px;
        font-size: 20px;
        font-weight: bold;
        margin-right: 50px;
    }
    .nav a:hover {
        color: aliceblue;
        transition: 0.5s;
    }
    .nav #logo-url {
        margin: auto;
        margin-left: 0;
    }

    #logo {
        width: 110px;
        height: 80px;
    }

    @media (max-width: 1000px) {
       
     }
     
</style>