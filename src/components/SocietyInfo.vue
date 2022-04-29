<template>
    <div class="society-info py-4">
        <div class="central-container py-5">
            <div class="row">
                <div class="col-8" v-for="(element,index) in jobInformations" :key="index + `job`">
                    <span class="my-text fw-bold my-text-green text-uppercase">{{ element.topText }}</span>
                    <h1 class="fw-bold my-3">
                        <span class="px-3 py-2 my-bg-lightgreen my-text-green">
                            {{ element.evidenceTitle }}
                        </span> 
                        {{ element.normalTitle }}
                    </h1>
                    <p v-for="(text, index) in element.texts" :key="index + `text`"
                        :class="(text.class===`evidence`) ? `border-start border-4 px-3 `:`` "
                        class="my-text my-text-color m-0 py-2">
                        {{ text.text }}
                    </p>
                    <ul class="my-text my-text-color" v-for="(list, index) in element.listJobs" :key="index + `list`">
                        <li>{{ list.text }}</li>
                    </ul>
                </div>
                <div class="col-4">
                    <p class="fw-bold">Vehicle Types</p>
                    <ul class="list-unstyled">
                        <li class="d-flex py-2"
                            :class="(index < vehicleInfos.length-1) ? `border-bottom border-2` : `` "
                            v-for="(vehicle, index) in vehicleInfos" :key="index + `vehicle`">
                            <img class="w-25 my-bg-lightgreen p-2" :src="require('../assets/img/truck-1.png')" alt="">
                            <div class="px-2">
                                <p class="m-0 fw-bold">{{ vehicle.name }}</p>
                                <span class="my-text my-text-color">{{ vehicle.infos }}</span>
                            </div>
                        </li>
                    </ul>
                    <div class="row gx-4">
                        <h5 class="fw-bold">Certifications</h5>
                        <div class="col-6" v-for="(ceritification, index) in 2" :key="index + `certifcate`">
                            <div class="shadow">
                                <img class="img-fluid" :src="require(`../assets/img/certificate.png`)" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "SocietyInfo",
        data: function () {
            return {
                jobInformations: [{
                    topText: "Who we are",
                    evidenceTitle: "Excellence",
                    normalTitle: "in Transport",
                    texts: [{
                            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident veritatis corporis aliquid quaerat repellat! Totam, quam ipsum laudantium fuga ullam omnis sint aliquam tempora ipsa incidunt hic provident quae dicta?",
                        },
                        {
                            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam atque excepturi deleniti, alias quo asperiores officia soluta ullam suscipit minus labore ratione accusamus, laudantium qui, quod nobis nihil. Quos, in.",
                        },
                        {
                            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nisi adipisci natus aut iusto itaque quo quia, nesciunt sapiente, debitis inventore nemo mollitia fugit suscipit architecto? Eum asperiores ad hic?",
                            class: "evidence"
                        },
                        {
                            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quibusdam aliquid odio veniam repellendus cupiditate",
                        },
                    ],
                    listJobs: [{
                            text: "Lorem ipsum dolor sit amet consectetur",
                        },
                        {
                            text: "Lorem ipsum dolor sit amet consectetur",
                        },
                        {
                            text: "Lorem ipsum dolor sit amet consectetur",
                        },
                        {
                            text: "Lorem ipsum dolor sit amet consectetur",
                        },
                    ]
                }],
                vehicleInfos: [{
                        name: "Light",
                        infos: "Max Weight 1200 Kg",
                    },
                    {
                        name: "Medium",
                        infos: "Max Weight 6000 Kg",
                    },
                    {
                        name: "Heavy",
                        infos: "Max Weight 24000 Kg",
                    },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
    div.society-info {
        min-height: 90vh;
    }
</style>