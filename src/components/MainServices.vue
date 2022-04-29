<template>
    <div class="main-services my-dark-bg py-4">
        <div class="central-container py-5">
            <div class="row" v-for="(service, index) in mainServices" :key="index + `service`">

                <div class="col-12">
                    <span class="my-text fw-bold my-text-green text-uppercase">{{ service.topText }}</span>

                    <h1 class="fw-bold text-white my-3">
                        {{ service.normalTitle }}
                        <span class="px-3 py-2 my-bg-lightgreen">{{ service.evidenceTitle }}</span> 
                    </h1>
                </div>
                <div class="col-9 py-2">
                    <p class="my-text my-text-color">{{ service.text }}</p>
                </div>
                <div class="col-3 py-2 text-end">
                    <a class="my-text text-uppercase text-white my-border-green ms-3 px-3 py-2 text-decoration-none rounded-3" :href="service.button.url">
                        {{ service.button.text }}
                    </a>
                    
                </div>
                <div class="row">
                    <div class="col-4" v-for="(jobs, index) in ourServices" :key="index + `jobs`">
                        <div class="text-white py-4 px-4 my-light-dark-bg rounded-card">
                            <div class="d-flex justify-content-between">
                                <span class="my-bg-lightgreen my-text-green p-3 rounded-circle">
                                    <font-awesome-icon size="xl" :icon="jobs.icon" />
                                </span>
                                <span class="my-text-green ">
                                    <font-awesome-icon icon="fa-solid fa-arrow-right" />
                                </span>
                            </div>
                            <h5 class="my-4 text-white fw-bold">{{ jobs.title }}</h5>
                            <p class="my-text my-text-color">{{ jobs.text }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: "MainServices",
        data: function(){
        return{
            mainServices:[
                {
                    topText: "Road Transport",
                    normalTitle: "Main",
                    evidenceTitle: "Services",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nisi quis aperiam quibusdam optio earum, accusantium quas atque quia exercitationem sint consequatur molestiae. Numquam, aspernatur ipsum!",
                    button:{
                        text: "See all",
                        url: "#"
                    }
                }
            ],
            ourServices:[
                {
                    icon:"fa-solid fa-truck-ramp-box",
                    title: "Technology",
                    text: "We are continually focused on developing technology solutions adapted to our client's needs",
                },
                {
                    icon:"fa-solid fa-temperature-low",
                    title: "Refeer Cargo",
                    text: "Regular and frequent monitoring from the receipt of the loaded container to final destination",
                },
                {
                    icon:"fa-solid fa-boxes-stacked",
                    title: "Dry Cargo",
                    text: "We work with most types of dry cargo, from valuable cargo to the most dangerous requiring care",
                },
            ]
        }
    }
    }
</script>

<style lang="scss" scoped>
    div.main-services {
        min-height: 80vh;
    }
</style>