<template>
    <v-card class="mx-auto my-12" elevation="6" color="#eeeeee" outlined shaped>
        <br><h4>Sube el modelo</h4><br>
        <Input/>
    </v-card>
</template>

<script>
import Input from '@/components/Input.vue'

export default {
    components: {
        Input
    }
}
</script>

<style>
.v-card {
    width: 80%;
    color: lightgray;
}
</style>
