<template>
    <header>
        <nav class="central-container d-flex justify-content-between align-items-center my-text-color">
            <p class="header-links m-0">
                <font-awesome-icon icon="fa-solid fa-clock" />
                Open Hours: Mon-Sat - 9:00 - 18:00
            </p>
            <div class="nav-links d-flex justify-content-evenly">
                <a href="#">numero</a>
                <a href="#">mail</a>
                <a href="#">fcbk</a>
                <a href="#">twit</a>
                <a href="#">ln</a>
            </div>
        </nav>
        <!-- <img :src="require('../assets/img/logo-1.png')" alt=""> -->
    </header>
</template>


<script>
export default {
    name: "HomeHeader",
    data: function(){
        return{
            headerInfo:[
                {
                    openInfo:"Open Hours: Mon-Sat - 9:00 - 18:00"
                }
            ]
        }
    },
}
</script>


<style lang="scss" scoped>
@import "../assets/styles/partials/variables.scss";
header{
    width: 100%;
    height: 8vh;
    background-color: $BgColor;
    .header-links{
        font-size: .8rem;
    }
    .nav-links{
        width: 40%;
    }
    
    a{
        text-decoration: none;
        color: $TextColor;
    }
}
</style>

