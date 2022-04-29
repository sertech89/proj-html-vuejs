<template>
    <div>
        <!-- Jumbo iniziale -->
        <div class="my-jumbo">
            <div class="central-container">
                <div class="container-fluid">
                    <div class="row py-3">
                        <div class="col-2">
                            <img :src="require(`../assets/img/logo.svg`)" alt="">
                        </div>
                        <div class="offset-2 col-8 d-flex justify-content-evenly align-items-center text-end">
                            <ul class="nav-links d-flex justify-content-evenly list-unstyled m-0">
                                <li class="ms-2" v-for="(element, index) in navigationLinks" :key="index + `home`">
                                    <a class="text-uppercase text-decoration-none my-text-color fw-bold"
                                        :class="(element.class) ? `py-2 px-4 my-bg-green rounded-3 text-white`:`` "
                                        href="element.url">
                                        <span v-if="element.icon" class="me-1">
                                            <font-awesome-icon :icon="element.icon" />
                                        </span>
                                        <span v-if="element.text">{{ element.text }}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row flex-column py-5">
                    <div class="col-5 py-5">
                        <div v-for="(element,index) in mainInfo" :key="index + `c`" class="py-5">
                            <p class="m-0 my-text-green text-uppercase fw-bold">{{ element.services }}</p>
                            <h1 class="text-uppercase my-title text-white">{{ element.title }}</h1>
                            <p class="my-text-color">
                                {{ element.text }}
                            </p>
                            <div class="py-4">
                                <a class="text-uppercase text-white my-bg-green px-3 py-2 text-decoration-none rounded-3"
                                    href="#">{{ element.firstButton }}</a>
                                <a class="text-uppercase text-white my-border-green ms-3 px-3 py-2 text-decoration-none rounded-3"
                                    href="#">{{ element.secondButton }}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <SocietyInfo />
        <MainServices />
        <Logistics />
        <SubsciptionForm />
    </div>
</template>

<script>
    import SocietyInfo from "./SocietyInfo.vue"
    import MainServices from "./MainServices.vue"
    import Logistics from "./Logistics.vue"
    import SubsciptionForm from "./SubsciptionForm.vue"

    export default {
        name: "HomeMain",
        components: {
            SocietyInfo,
            MainServices,
            SubsciptionForm,
            Logistics

        },
        data: function () {
            return {
                navigationLinks: [{
                        text: "Home",
                        url: "#",
                        icon: "",
                    },
                    {
                        text: "About",
                        url: "#",
                        icon: "",
                    },
                    {
                        text: "Services",
                        url: "#",
                        icon: "",
                    },
                    {
                        text: "Process",
                        url: "#",
                        icon: "",
                    },
                    {
                        text: "Testimonials",
                        url: "#",
                        icon: "",
                    },
                    {
                        text: "",
                        url: "#",
                        icon: "fa-regular fa-user",
                    },
                    {
                        text: "Get in touch",
                        url: "#",
                        icon: "",
                        class: "button"
                    },

                ],
                mainInfo: [{
                    services: "Logistic Services",
                    title: "Cargo Transport",
                    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque asperiores ea inventore debitis voluptatibus.",
                    firstButton: "Get in touch",
                    secondButton: "Read more",
                }]
            }
        },
    }
</script>

<style lang="scss" scoped>
    div.my-jumbo {
        height: 90vh;
        background-color: blue;
        background-image: url("../assets/img/bg-9.jpg");
        background-size: cover;
        position: relative;

        &::before {
            content: " ";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.6);
            z-index: 0;
        }

        .central-container {
            position: relative;
        }

        .my-title {
            font-size: 3rem;
            font-weight: bold;
        }

        .my-text-color {
            font-size: .9rem;
        }
    }
</style>