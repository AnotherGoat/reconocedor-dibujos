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
import axios from 'axios';

export default {
    data: () => {
        return {
            BACKEND_URL: "https://reconocedor-dibujos-api.herokuapp.com"
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
            this.enviarImagen(this.BACKEND_URL + "/predecir", this.$refs.canvas.getImagen());
        },
        enviarImagen(url, imagen) {
            let formData = new FormData();
            formData.append("imagen", imagen);

            axios.post(url, formData)
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
