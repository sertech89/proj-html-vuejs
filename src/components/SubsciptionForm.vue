<template>
    <div class="form">
        <div class="central-container">
            <div class="row py-5">
                <div class="col-8 py-2" v-for="(info, index) in formText" :key="index + `info` ">
                    <span class="my-text fw-bold my-text-green text-uppercase">{{ info.topText }}</span>
                    <h1 class="fw-bold my-3">
                        {{ info.normalTitle }}
                        <span class="px-3 py-2 my-bg-lightgreen my-text-green">
                            {{ info.evidenceTitle }}
                        </span> 
                    </h1>
                    <p class="my-text my-text-color mb-5">{{ info.text }}</p>
                    <div class="d-flex gap-2 flex-wrap mb-4">
                            <input type="text" placeholder="Name" class="my-input w-">
                            <input type="email" placeholder="Email" class="my-input">
                            <input type="text" placeholder="Phone" class="my-input">
                            <input type="text" placeholder="Phone" class="my-input">
                            <textarea class="my-input w-100" name="text" cols="20" rows="5" placeholder="Message"></textarea>
                    </div>
                    <a class="text-uppercase text-white my-bg-green px-3 py-2 text-decoration-none rounded-3" :href="info.button.url">
                        {{ info.button.text }}
                    </a>

                </div>
                <div class="col-4" v-for="(element, index) in formInfo" :key="index + `form`">
                    <h6 class="fw-bold">{{ element.title }}</h6>
                    <p class="my-text my-text-color">{{ element.topInfo }}</p>
                    <p class="my-text my-text-color">{{ element.bottomInfo }}</p>
                    <div class="mb-4">
                        <a :href="link.url" v-for="(link, index) in element.links" :key="index + `link`"
                        class="my-3 my-text-green text-decoration-none d-flex">
                            <span class="me-1 my-icon my-bg-lightgreen rounded-circle">
                                <font-awesome-icon :icon="link.icon" />
                            </span>
                            <span>
                                {{ link.text }}
                            </span>
                        </a>
                    </div>
                    <a :href="element.button.url" class="my-text my-text-green text-decoration-none form-button my-border-green">
                        {{ element.button.text }}
                    </a>
                </div>
            </div>

        </div>
    </div>
</template>



<script>
export default {
    nname: "SubsciptionForm",
    data: function(){
        return{
            formText:[
                {
                    topText: "Send a Message",
                    normalTitle: "Get in",
                    evidenceTitle: "Touch",
                    text: "We will responde to your message as soon as possible",
                    button:{
                        url: "#",
                        text: "Send"
                    }
                }
            ],
            formInfo:[
                {
                    title: "Example Inc.",
                    topInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    bottomInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    links:[
                        {
                            icon: "fa-solid fa-phone",
                            url: "#",
                            text: "1 (305) 12345678",
                        },
                        {
                            icon: "fa-solid fa-envelope",
                            url: "#",
                            text: "hello@example.com",
                        },
                        {
                            icon: "fa-solid fa-location-dot",
                            url: "#",
                            text: "Main Avenue, 987",
                        },
                    ],
                    button:{
                        url: "#",
                        text: "View Map"
                    }
                }
            ],
        }
    }
}
</script>



<style lang="scss" scoped>
div.form{
    min-height: 65vh;
}

.my-input{
    background-color: gainsboro;
    padding: .5rem;
    border-radius: 5px;
    width: calc((100% / 2) - .4rem);
}
.my-icon{
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
}
.form-button{
    text-transform: uppercase;
    padding: .5rem 1rem;
    border-radius: .3rem;
    font-weight: bold;
}
</style>