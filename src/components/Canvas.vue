<template>
    <canvas id="canvas" width="this.ancho" height="this.alto">
    </canvas>
</template>

<script>
export default {
    data: function (){
        return {
            vueCanvas: null
        }
    },
    props: {
        ancho: Number,
        alto: Number,
        colorFondo: String,
        colorDibujo: String,
        anchoLinea: String
    },
    computed: {
        cssProps() {
            return {
                "--background-color": this.colorFondo
            }
        }
    },
    mounted() {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = 'rgb(255, 0, 0)';
        ctx.fillRect(50, 50, 100, 150);
        this.vueCanvas = canvas.getContext("2d");  
    }
}
</script>

<style>
.canvas {
    background-color: var(--background-color);
}
</style>