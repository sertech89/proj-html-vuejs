<template>
    <div>
        <MyJumbo />
        <SocietyInfo />
        <MainServices />
        <Logistics />
        <Results />
        <Feedback />
        <SubsciptionForm />
    </div>
</template>

<script>
    import MyJumbo from "./MainFolder/Jumbo.vue"
    import SocietyInfo from "./MainFolder/SocietyInfo.vue"
    import MainServices from "./MainFolder/MainServices.vue"
    import Logistics from "./MainFolder/Logistics.vue"
    import Results from "./MainFolder/Results.vue"
    import Feedback from "./MainFolder/Feedback.vue"
    import SubsciptionForm from "./MainFolder/SubsciptionForm.vue"

    export default {
        name: "HomeMain",
        components: {
            MyJumbo,
            SocietyInfo,
            MainServices,
            Logistics,
            Results,
            Feedback,
            SubsciptionForm,

        },
    
    }
</script>

<style lang="scss" scoped>
    

    
</style>