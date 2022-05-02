<template>
    <div class="results py-5">
        <div class="central-container text-center py-5">
            <div class="mb-5">
                <span class="my-text fw-bold my-text-green text-uppercase">
                    {{ topTextResults }}
                </span>
                <h1 class="fw-bold my-3 text-white">
                    <span class="px-3 py-2 me-1 my-bg-lightgreen">
                        {{ resultsEvidenceTitle }}
                    </span>
                    {{ resultsNormalTitle }}
                </h1>

            </div>

                <div class="d-flex justify-content-around py-5 text-white">
                    <div class="d-flex flex-column" v-for="(result, index) in results" :key="index + `result`">
                        <h3 class="my-text-green fw-bold">{{ result.number }}</h3>
                        <h5 class="fw-bold">{{ result.text }}</h5>
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
            topTextResults: "What are we doing",
            resultsEvidenceTitle: "Results",
            resultsNormalTitle: "in Numbers",
            results:[
                {
                    number: "128",
                    text: "Certifications",
                },
                {
                    number: "230",
                    text: "Employees",
                },
                {
                    number: "517",
                    text: "Customers",
                },
                {
                    number: "94",
                    text: "Countries Served",
                }
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
div.results{
    min-height: 65vh;
    background-image:  url("../../assets/img/bg-10.jpg");
    background-size: cover;
    background-position: center;
}
</style>