import Vue from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faClock, faTruckRampBox, faArrowRight, faPhone, faEnvelope, faLocationDot, faChevronRight, 
        faArrowUp, faTemperatureLow, faBoxesStacked, faQuoteRight} from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'


/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faClock, faTruckRampBox, faArrowRight, faPhone, faEnvelope, 
            faLocationDot, faChevronRight, faArrowUp, faFacebookF, faTwitter, faLinkedinIn, 
            faUser, faTemperatureLow, faBoxesStacked, faQuoteRight )

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
