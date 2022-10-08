<template>
    <div id="main-banner">
        <img src="/img/banner.gif" alt="banner">
    </div>
</template>

<script>
export default {
    name: 'Banner'
}
</script>

<style lang="scss" scoped>
    #main-banner {
        background: cover;
        display: flex;
        justify-content: center;
        height: 500px;
        background-color: #2b2b2b;
    }
</style>