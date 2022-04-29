<template>
    <div class="society-info py-4">
        <div class="central-container py-5">
            <div class="row">
                <div class="col-8">
                    <span class="my-text fw-bold my-text-green text-uppercase">Who we are</span>
                    <h1 class="fw-bold my-3">
                        <span class="px-3 py-2 my-bg-lightgreen my-text-green">Excellence</span> in Transport
                    </h1>
                    <p class="my-text my-text-color m-0 py-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Provident veritatis corporis aliquid quaerat repellat! Totam, quam ipsum laudantium fuga ullam
                        omnis sint aliquam tempora ipsa incidunt hic provident quae dicta?</p>
                    <p class="my-text my-text-color m-0 py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Totam atque excepturi deleniti, alias quo asperiores officia soluta ullam suscipit minus labore
                        ratione accusamus, laudantium qui, quod nobis nihil. Quos, in.</p>
                    <p class="my-text my-text-color m-0 border-start border-4 px-3 py-2">Lorem, ipsum dolor sit amet
                        consectetur adipisicing elit. Quibusdam nisi adipisci natus aut iusto itaque quo quia, nesciunt
                        sapiente, debitis inventore nemo mollitia fugit suscipit architecto? Eum asperiores ad hic?</p>
                    <p class="my-text my-text-color m-0 py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nostrum quibusdam aliquid odio veniam repellendus cupiditate</p>
                    <ul class="my-text my-text-color">
                        <li>Lorem ipsum dolor sit amet consectetur</li>
                        <li>Lorem ipsum dolor sit amet consectetur</li>
                        <li>Lorem ipsum dolor sit amet consectetur</li>
                        <li>Lorem ipsum dolor sit amet consectetur</li>
                        <li>Lorem ipsum dolor sit amet consectetur</li>
                    </ul>
                </div>
                <div class="col-4">
                    <p class="fw-bold">Vehicle Types</p>
                    <ul class="list-unstyled">
                        <li class="d-flex">
                            <img class="w-25 my-bg-lightgreen p-2" :src="require('../assets/img/truck-1.png')" alt="">
                            <div class="px-2">
                                <p class="m-0 fw-bold">Light</p>
                                <span class="my-text my-text-color">Max Weight 1200 Kg</span>
                            </div>
                        </li>
                    </ul>
                    <div class="row gx-4">
                        <h5 class="fw-bold">Certifications</h5>
                        <div class="col-6">
                            <div class="shadow">
                                <img class="img-fluid" :src="require(`../assets/img/certificate.png`)" alt="">
                            </div>
                        </div>
                        <div class="col-6">
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
    }
</script>

<style lang="scss" scoped>
    div.society-info {
        height: 90vh;
    }
</style>