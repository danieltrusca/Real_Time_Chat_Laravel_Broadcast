<template>
    <li class="list-group-item">{{ message }}</li>
</template>

<script>
export default {
    props: ["message"],
    mounted() {
        console.log("Component mounted.");
    }
};
</script>
