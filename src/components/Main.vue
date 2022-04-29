<template>
    <div>
        <!-- Jumbo iniziale -->
        <div class="my-jumbo">
            <div class="central-container">
                <div class="container-fluid">
                    <div class="row py-3">
                        <div class="col-2">
                            <h6>logo</h6>
                        </div>
                        <div class="offset-2 col-8 d-flex justify-content-evenly align-items-center text-end">
                            <a class="text-uppercase text-decoration-none my-text-color fw-bold" href="#">Prova</a>
                            <a class="text-uppercase text-decoration-none my-text-color fw-bold" href="#">Prova</a>
                            <a class="text-uppercase text-decoration-none my-text-color fw-bold" href="#">Prova</a>
                            <a class="text-uppercase text-decoration-none my-text-color fw-bold" href="#">Prova</a>
                            <a class="text-uppercase text-decoration-none my-text-color fw-bold" href="#">Prova</a>
                            <a class="text-uppercase text-decoration-none my-text-color fw-bold" href="#">Prova</a>
                            <a class="text-uppercase text-decoration-none py-2 px-4 my-bg-green rounded-3 text-white fw-bold" href="#">Prova</a>
                        </div>
                    </div>
                </div>
                <div class="row flex-column py-5">
                    <div class="col-5 py-5">
                        <div class="py-5">
                        <p class="m-0 my-text-green text-uppercase fw-bold">Logistics services</p>
                        <h1 class="text-uppercase my-title text-white">Cargo transport</h1>
                        <p class="my-text-color">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque asperiores ea inventore debitis voluptatibus.
                        </p>
                        <div class="py-4">
                            <a class="text-uppercase text-white my-bg-green px-3 py-2 text-decoration-none rounded-3" href="#">Get in touch</a>
                            <a class="text-uppercase text-white my-border-green ms-3 px-3 py-2 text-decoration-none rounded-3" href="#">Read more</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <SocietyInfo />
        <MainServices />
    </div>
</template>

<script>
import SocietyInfo from "./SocietyInfo.vue"
import MainServices from "./MainServices.vue"
export default {
    name: "HomeMain",
    components:{
        SocietyInfo,
        MainServices,
    },
}
</script>

<style lang="scss" scoped>
div.my-jumbo{
    height: 90vh;
    background-color: blue;
    background-image: url("../assets/img/bg-9.jpg");
    background-size: cover;
    // filter: brightness(.6);
    backdrop-filter: brightness(.6);
    .central-container{
        background-color: rgb(252, 208, 208);
    }
    .my-title{
        font-size: 3rem;
        font-weight: bold;
    }
    .my-text-color{
        font-size: .9rem;
    }
}
</style>