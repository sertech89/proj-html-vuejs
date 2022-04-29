<template>
    <div class="logistics py-5">
        <div class="text-center py-3">
            <span class="my-text fw-bold my-text-green text-uppercase">Prova</span>
                <h1 class="fw-bold my-3">
                    <span class="px-3 py-2 my-bg-lightgreen my-text-green">
                        Logistical
                    </span> 
                    Procedure
                </h1>
                <p class="my-text my-text-color">Testo di prova</p>
                <div class="py-2">
                    <div class="d-flex justify-content-evenly align-items-start my-line my-bg-lightgreen">
                        <div class="d-flex flex-column justify-content-center align-items-center">
                            <p class="m-0 my-number my-bg-lightgreen">1</p>
                            <h5 class="my-2 fw-bold">Prova</h5>
                            <p class="my-text my-text-color">Lorem ipsum dolor sit amet, consectetur</p>
                        </div>

                    </div>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LogisticalProcedure"
}
</script>

<style lang="scss" scoped>
div.logistics{
    min-height: 60vh;
    border: 1px solid black;
    background-color: #eef4ed;
}
div.my-line{
    height: 5px;
}
.my-number{
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 50%;
}
</style>