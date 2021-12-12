<template>
    <v-card class="mx-auto my-12" elevation="6" color="#eeeeee" outlined shaped>
        <h4>{{ this.mensaje }}</h4>

        <v-card-actions>
            <v-btn color="green darken-2" text @click="predecir">
                Predecir
            </v-btn>
            <v-btn color="green darken-2" text @click="limpiar">
                Limpiar
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props: {
        mensaje: String
    },
    methods: {
        predecir() {
            console.log("Predecir")
        },
        limpiar() {
            console.log("Limpiar")
        }
    }
}
</script>

<style>
.v-card {
    width: 80%;
    height: 80%;
    text-align: center;
    color: gray;
}
</style>
