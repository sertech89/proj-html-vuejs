<template>
    <div class="feedback my-dark-bg py-5">
        <div class="central-container text-center py-5">
            <div class="top-text">
                <span class="my-text fw-bold my-text-green text-uppercase">
                    {{ topText }}
                </span>
                <h1 class="fw-bold my-4 text-white">
                    {{ normalTitle }}
                    <span class="px-3 py-2 me-1 my-bg-lightgreen">
                        {{ evidenceTitle }}
                    </span>
                </h1>
                <p class="m-0 my-text my-light-text-color">
                    {{ feedbackText }}
                </p>
            </div>

            <div class="row my-4 pe-0">
                <div class="col-4" v-for="(feedback, index) in feedbackContents" :key="index + `feedback`">
                    <div class="my-text-color p-4 my-light-dark-bg rounded-card text-start">
                        <img class="w-50 my-logo-img mb-3" :src="feedback.img" alt="">
                        <p class=" my-text my-light-text-color">
                            {{ feedback.topText }}
                        </p>
                        <p class="my-text my-light-text-color">
                            {{ feedback.bottomText }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeResults",
    data: function(){
        return{
            topText: "Customer Testimonials",
            normalTitle: "Trusted",
            evidenceTitle: "Feedback",
            feedbackText: "We work intensively in search of ideals that can add up in the lives of our customers. This is what moves us and we are grateful for the recognition.",
            feedbackContents:[
                {
                    img: require("../../assets/img/logo-1.png"),
                    topText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit numquam qui ad pariatur quidem, quae debitis aperiam vitae velit.",
                    bottomText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    img: require("../../assets/img/logo-2.png"),
                    topText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit numquam qui ad pariatur quidem, quae debitis aperiam vitae velit.",
                    bottomText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    img: require("../../assets/img/logo-3.png"),
                    topText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit numquam qui ad pariatur quidem, quae debitis aperiam vitae velit.",
                    bottomText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
div.feedback{
    min-height: 80vh;
    div.top-text{
        width: 60%;
        margin: 0 auto;
    }
    .my-logo-img{
        filter: invert(100%);
    }
}
</style>