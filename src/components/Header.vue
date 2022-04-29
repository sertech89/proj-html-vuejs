<template>
    <header>
        <nav class="central-container d-flex justify-content-between align-items-center my-text-color">
            <p class="header-links m-0">
                <font-awesome-icon icon="fa-solid fa-clock" />
                {{ openInfo }}
            </p>
            <ul class="nav-links d-flex justify-content-evenly list-unstyled m-0">
                <li v-for="(element, index) in headerLinks" :key="index">
                    <a href="element.url">
                        <span class="me-1">
                            <font-awesome-icon :icon="element.icon" />
                        </span>
                        <span v-if="element.text">{{ element.text }}</span>
                    </a>
                </li>
            </ul>

        </nav>

    </header>
</template>


<script>
    export default {
        name: "HomeHeader",
        data: function () {
            return {
                openInfo: "Open Hours: Mon-Sat - 9:00 - 18:00",
                headerLinks: [{
                        icon: "fa-solid fa-phone",
                        text: "1 (305) 12345678",
                        url: "#"
                    },
                    {
                        icon: "fa-solid fa-envelope",
                        text: "hello@example.com",
                        url: "#"
                    },
                    {
                        icon: "fa-brands fa-facebook-f",
                        text: "",
                        url: "#"
                    },
                    {
                        icon: "fa-brands fa-twitter",
                        text: "",
                        url: "#"
                    },
                    {
                        icon: "fa-brands fa-linkedin-in",
                        text: "",
                        url: "#"
                    },
                ]
            }
        },
    }
</script>



<style lang="scss" scoped>
    @import "../assets/styles/partials/variables.scss";

    header {
        width: 100%;
        height: 8vh;
        background-color: $BgColor;

        .header-links {
            font-size: .8rem;
        }

        .nav-links {
            width: 50%;
        }

        a {
            text-decoration: none;
            color: $TextColor;
        }
    }
</style>