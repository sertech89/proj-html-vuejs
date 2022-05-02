<template>
    <div class="logistics py-5">
        <div class="my-top-infos text-center py-3" v-for="(element, index) in logisticalInfos" :key="index + `info`">
            <span class="my-text fw-bold my-text-green text-uppercase">{{ element.topText }}</span>
                <h1 class="fw-bold my-3">
                    <span class="px-3 py-2 my-bg-lightgreen my-text-green">
                        {{ element.evidenceTitle }}
                    </span> 
                    {{ element.normalTitle }}
                </h1>
                <p class="my-text my-text-color">{{ element.text }}</p>
        </div>
                <div class="py-2">
                    <div class="d-flex justify-content-around align-items-center my-line my-bg-lightgreen mb-4">
                        <span class="m-0 my-number my-bg-lightgreen my-text-green fw-bold" 
                        v-for="(element, index) in logisticalProcedure" :key="index">
                            {{ element.index }}
                        </span>
                    </div>
                    <div class="d-flex justify-content-around align-items-center">
                        <div class="text-center my-info" v-for="(element, index) in logisticalProcedure" :key="index + `logistics`">
                            <h5 class="fw-bold">{{ element.title }}</h5>
                            <p class="m-0 my-text">
                                {{ element.text }}
                            </p>
                        </div>

                    </div>
                </div>
        
    </div>
</template>

<script>
export default {
    name: "LogisticalProcedure",
    data: function(){
        return{
            logisticalProcedure:[
                {
                    index: "01",
                    title: "Collection of information",
                    text: "Lorem ipsum dolor sit amet consectetur."
                },
                {
                    index: "02",
                    title: "Services invoice Sending",
                    text: "Lorem ipsum dolor sit amet consectetur."
                },
                {
                    index: "03",
                    title: "Withdrawal of Cargo",
                    text: "Lorem ipsum dolor sit amet consectetur."
                },
                {
                    index: "04",
                    title: "Transport Customer Order",
                    text: "Lorem ipsum dolor sit amet consectetur."
                },
                {
                    index: "05",
                    title: "Successful Delivery",
                    text: "Lorem ipsum dolor sit amet consectetur."
                },
            ],
            logisticalInfos:[
                {
                    topText: "How it works in practice",
                    evidenceTitle: "Logistical",
                    normalTitle: "Procedure",
                    text: "We work in innovative methodologies to ensure that the entire delivery is done from start to finish as planned."
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
div.logistics{
    min-height: 60vh;
    background-color: #eef4ed;
}

div.my-top-infos{
    width: 40%;
    margin: 0 auto;
}

div.my-line{
    height: 5px;
}

div.my-info{
    width: 180px;
}

.my-number{
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
}
</style>