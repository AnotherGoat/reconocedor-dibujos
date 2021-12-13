<template>
    <v-alert type="success">{{ this.mensaje }}</v-alert>
</template>

<script>
export default {
    props: ["mensaje"]
}
</script>