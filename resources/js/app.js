require("./bootstrap");

window.Vue = require("vue").default;

// for auto scroll
import Vue from "vue";

import VueChatScroll from "vue-chat-scroll";
Vue.use(VueChatScroll);

Vue.component("message", require("./components/Message.vue").default);

const app = new Vue({
    el: "#app",
    data: () => {
        return {
            message: "",
            chat: {
                messages: [],
            },
        };
    },
    methods: {
        send() {
            if (this.message.length > 0) {
                // console.log(this.message);
                this.chat.messages.push(this.message);

                this.message = "";
            }
        },
    },
});
