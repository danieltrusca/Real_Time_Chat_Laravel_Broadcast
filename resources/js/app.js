require("./bootstrap");

window.Vue = require("vue").default;

// for auto scroll
import Vue from "vue";

import VueChatScroll from "vue-chat-scroll";
Vue.use(VueChatScroll);

// for notifications
import Toaster from "v-toaster";
import "v-toaster/dist/v-toaster.css";
Vue.use(Toaster, { timeout: 5000 });

Vue.component("message", require("./components/Message.vue").default);

const app = new Vue({
    el: "#app",
    data: () => {
        return {
            message: "",
            chat: {
                messages: [],
                user: [],
                color: [],
                time: []
            },
            typing: "",
            numberOfUsers: 0
        };
    },
    watch: {
        message() {
            Echo.private(`chat`).whisper("typing", {
                name: this.message
            });
        }
    },
    methods: {
        send() {
            if (this.message.length > 0) {
                // console.log(this.message);
                this.chat.messages.push(this.message);
                this.chat.user.push("You");
                this.chat.color.push("success");
                this.chat.time.push(this.getTime());

                axios
                    .post("/send", {
                        message: this.message
                    })
                    .then(res => {
                        console.log(res);
                        this.message = "";
                    })
                    .catch(error => {
                        console.log(error);
                        this.message = "";
                    });
            }
        },
        getTime() {
            let time = new Date();
            return time.getHours() + ":" + time.getMinutes();
        }
    },

    mounted() {
        Echo.private(`chat`)
            .listen("ChatEvent", e => {
                this.chat.messages.push(e.message);
                this.chat.user.push(e.user);
                this.chat.color.push("warning");
                this.chat.time.push(this.getTime());
            })
            .listenForWhisper("typing", e => {
                if (e.name != "") {
                    this.typing = "typing...";
                } else {
                    this.typing = "";
                }
            });

        Echo.join(`chat`)
            .here(users => {
                this.numberOfUsers = users.length;
            })
            .joining(user => {
                this.numberOfUsers += 1;
                //console.log(user.name + " is joined the chat room");
                this.$toaster.success(user.name + " is joined the chat room");
            })
            .leaving(user => {
                this.numberOfUsers -= 1;
                // console.log(user.name + " is leaved the chat room");
                this.$toaster.warning(user.name + " is leaved the chat room");
            });
    }
});
