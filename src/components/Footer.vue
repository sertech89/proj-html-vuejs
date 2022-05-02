<template>
    <footer>
        <div class="top-footer my-dark-bg py-5">

            <div class="central-container">
                <div class="row">
                    <div class="col-3 py-2 my-light-text-color">
                        <a href="#">
                            <img class="w-50" :src="require(`../assets/img/logo.svg`)" alt="">
                        </a>
                        <ul class="list-unstyled">
                            <li :class="(link.class) ? `my-3`: `my-2`" v-for="(link, index) in companyInfos"
                                :key="index + `left-links`">
                                <a :class="(link.class===`button`? `my-button my-border-green`: ``)"
                                    class="my-text text-decoration-none my-light-text-color" :href="link.url">
                                    <span class="me-2" v-if="link.icon">
                                        <font-awesome-icon :icon="link.icon" /></span>
                                    {{ link.text }}
                                </a>
                            </li>
                        </ul>
                    </div>


                    <div class="col-3" v-for="(element, index) in footerLinks" :key="index + `footer-links`">
                        <div class="my-light-text-color p-4 my-light-dark-bg rounded-card">
                            <h5 class="text-white fw-bold">{{ element.title }}</h5>

                            <ul class="list-unstyled">
                                <li class="my-text py-1" v-for="(link, index) in element.links"
                                    :key="index + `bot-links`">
                                    <a class="my-text text-decoration-none my-light-text-color" :href="link.url">
                                        <span class="me-1">
                                            <font-awesome-icon icon="fa-solid fa-chevron-right" />
                                        </span>
                                        {{ link.text }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <BottomFooter />
    </footer>
</template>


<script>
    import BottomFooter from "./BottomFooter.vue"

    export default {
        name: "HomeFooter",
        components: {
            BottomFooter,
        },
        data: function () {
            return {
                companyInfos: [{
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                        url: "#",
                        class: "top-info",
                    },
                    {
                        text: "Lorem ipsum dolor sit ",
                        icon: "fa-solid fa-phone",
                        url: "#"
                    },
                    {
                        text: "Lorem ipsum dolor sit ",
                        icon: "fa-solid fa-envelope",
                        url: "#"
                    },
                    {
                        text: "Lorem ipsum dolor sit ",
                        icon: "fa-solid fa-location-dot",
                        url: "#"
                    },
                    {
                        text: "Get in touch",
                        url: "#",
                        class: "button",
                    }
                ],
                footerLinks: [{
                        title: "About",
                        url: "#",
                        links: [{
                                text: "The Company",
                                url: "#",
                            },
                            {
                                text: "Institutional",
                                url: "#",
                            },
                            {
                                text: "Social & Events",
                                url: "#",
                            },
                            {
                                text: "Innovation",
                                url: "#",
                            },
                            {
                                text: "Enviroment",
                                url: "#",
                            },
                            {
                                text: "Technology",
                                url: "#",
                            },
                        ]
                    },
                    {
                        title: "Transport",
                        url: "#",
                        links: [{
                                text: "Industrialized",
                                url: "#",
                            },
                            {
                                text: "Chemicals",
                                url: "#",
                            },
                            {
                                text: "Package Liquids",
                                url: "#",
                            },
                            {
                                text: "Construction",
                                url: "#",
                            },
                            {
                                text: "Laminated Wood",
                                url: "#",
                            },
                            {
                                text: "And others",
                                url: "#",
                            },
                        ],
                    },
                    {
                        title: "Support",
                        url: "#",
                        links: [{
                                text: "Responsibility",
                                url: "#",
                            },
                            {
                                text: "Terms of Use",
                                url: "#",
                            },
                            {
                                text: "About Cookies",
                                url: "#",
                            },
                            {
                                text: "Privacy Policy",
                                url: "#",
                            },
                            {
                                text: "Accessibility",
                                url: "#",
                            },
                            {
                                text: "Information",
                                url: "#",
                            },
                        ],
                    },
                ]
            }
        },
    }
</script>


<style lang="scss" scoped>
    div.top-footer {
        height: 60vh;
    }
</style>