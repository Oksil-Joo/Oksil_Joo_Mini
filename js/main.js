import { getData } from "./components/TheDataMiner.js";
import TheThumbnailComponent from "./components/TheThumbNail.js";
import TheLightboxComponent from "./components/TheLightboxComponent.js";


(() => {
    const myVue = new Vue({
        created: function() {
            
            getData(null, (data) => this.carProfData = data);
        },

        data: {
            carProfData: [],
            message: "hello from Vue",
            isVisible: false,
            currentCarItem: {}
        },

        methods: {
            popLightBox(item) {
                this.currentCarItem = item;
                this.isVisible = true;
            }
        },

        components: {
            thumb: TheThumbnailComponent,
            lightbox: TheLightboxComponent
        }
    }).$mount("#app");   
})();