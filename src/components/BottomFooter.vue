<template>
    <div class="bottom-footer my-bottom-footer-bg position-relative">
        <a href="#" class="my-text-color text-decoration-none rounded-circle position-absolute end-0 bottom-0 m-3">
            <font-awesome-icon size="xl" icon="fa-solid fa-arrow-up" />
        </a>
        <div class="central-container my-text-color d-flex justify-content-between align-items-center my-text">
            <p class="m-0">{{ leftInfo }}</p>
            <p class="m-0">{{ rightInfo }}
                <a class="text-decoration-none" :href="bottomLink.url">{{ bottomLink.text }}</a>
            </p>            
        </div>
    </div>
</template>

<script>
export default {
    name: "BottomFooter",
    data: function(){
        return{
            bottomLink:{
                text: "Codings",
                url: "#",
            },
            leftInfo: "Enjoy the low price. We are tracking any intention of piracy.",
            rightInfo: "2020 NEXGEN is Proudly Powered by",
        }
    }
}
</script>

<style lang="scss" scoped>
.bottom-footer{
    height: 10vh;
}
</style>