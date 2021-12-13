<template>
    <v-alert type="error">{{ this.mensaje }}</v-alert>
</template>

<script>
export default {
    props: ["mensaje"]
}
</script>
