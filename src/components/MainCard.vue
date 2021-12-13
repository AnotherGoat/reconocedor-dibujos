<template>
    <v-card class="mx-auto my-12" elevation="6" color="#eeeeee" outlined shaped>
        <br><h4>{{ this.mensaje }}</h4><br>

        <Canvas ancho=224 alto=224 colorDibujo="black"
                anchoLinea=15, union="round" ref="canvas"/>

        <br>
        <v-card-actions class="justify-center">
            <v-btn color="green darken-2" text @click="predecir">
                Predecir
            </v-btn>
            <v-btn color="green darken-2" text @click="$refs.canvas.limpiar()">
                Limpiar
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import Canvas from '@/components/Canvas.vue';
import * as tf from '@tensorflow/tfjs';

export default {
    data: () => {
        return {
            modelo: null
        }
    },
    props: {
        mensaje: String
    },
    components: {
        Canvas
    },
    mounted() {
        this.loadModel();
    },
    methods: {
        predecir() {
            console.log("Predecir")
        },
        loadModel: async function() {
            // Vacía el modelo
            this.modelo = undefined; 
            // load the model using a HTTPS request (where you have stored your model files)
            this.modelo = await tf.loadLayersModel("@/assets/model.json").catch(error => {
                console.log(error);
            });
        }
    }
}
</script>

<style>
.v-card {
    width: 80%;
    height: 80%;
    text-align: center;
    color: lightgray;
}
</style>
