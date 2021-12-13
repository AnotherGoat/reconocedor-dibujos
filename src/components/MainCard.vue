<template>
    <v-card class="mx-auto my-12" elevation="6" color="#eeeeee" outlined shaped>
        <br><h4>{{ this.mensaje }}</h4><br>

        <Canvas ancho=224 alto=224 colorDibujo="black"
                anchoLinea=7 union="round" ref="canvas"/>

        <br>
        <v-card-actions class="justify-center">
            <v-btn color="green darken-2" text @click="predecir($refs.canvas.getImagen())">
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
import axios from 'axios';

export default {
    data: () => {
        return {
            BACKEND_URL: "https://reconocedor-dibujos.herokuapp.com"
        }
    },
    props: {
        mensaje: String
    },
    components: {
        Canvas
    },
    methods: {
        predecir(dibujo) {
            this.enviarImagen(this.BACKEND_URL + "/predict", {"uri": dibujo});
            console.log({"dibujo": dibujo});
        },
        async enviarImagen(url, imagen) {
            await axios.post(url, imagen)
                .then(response => {
                    alert(response.data);
            })
                .catch(error => {
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
