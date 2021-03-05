<template>
    <div class="display-inline">
        <li class="list-group-item" :class="className">{{ message }}</li>
        <small class="badge float-right" :class="badgeClass"> You</small>
    </div>
</template>

<script>
export default {
    props: ["message", "color"],
    computed: {
        className() {
            return "list-group-item-" + this.color;
        },
        badgeClass() {
            return "badge-" + this.color;
        }
    },
    mounted() {
        console.log("Component mounted.");
    }
};
</script>
