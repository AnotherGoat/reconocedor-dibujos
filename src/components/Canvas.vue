<template>
    <canvas id="canvas" width="this.ancho" height="this.alto">
    </canvas>
</template>

<script>
import * as $ from 'jquery';

export default {
    data: () => {
        return {
            canvas: null,
            clickX: new Array(),
            clickY: new Array(),
            clickD: new Array(),
            dibujando: false
        }
    },
    props: {
        ancho: Number,
        alto: Number,
        colorFondo: String,
        colorDibujo: String,
        anchoLinea: String,
        union: String
    },
    computed: {
        cssProps() {
            return {
                "--background-color": this.colorFondo
            }
        }
    },
    mounted() {
        this.canvas = document.getElementById("canvas");
        
        console.log(this.dibujando);
        console.log(this.clickX);
        console.log(this.clickY);

        $("#canvas").mousedown(this.mouseDown);
        $("#canvas").mousemove(this.mousemove);
        $("#canvas").mouseup(this.mouseup);
        $("#canvas").mouseleave(this.mouseleave);
    },
    methods: {
        ctx: () => {
            return this.canvas.getContext("2d");
        },
        mousedown: e => {
            let rect = this.canvas.getBoundingClientRect();
            let mouseX = e.clientX- rect.left;
            let mouseY = e.clientY- rect.top;
            this.dibujando = true;
            this.addUserGesture(mouseX, mouseY);
            this.drawOnCanvas();
        },
        mousemove: e => {
            if (this.dibujando) {
                let rect = this.canvas.getBoundingClientRect();
                let mouseX = e.clientX- rect.left;
                let mouseY = e.clientY- rect.top;
                this.addUserGesture(mouseX, mouseY, true);
                this.drawOnCanvas();
            }
        },
        mouseup: () => {
            this.dibujando = false;
        },
        mouseleave: () => {
            this.dibujando = false;
        },
        addUserGesture: (x, y, dragging) => {
            this.clickX.push(x);
            this.clickY.push(y);
            this.clickD.push(dragging);
        },
        drawOnCanvas: () => {
            this.canvas.clearRect(0, 0, this.ancho, this.alto);
        
            this.canvas.strokeStyle = this.colorDibujo;
            this.canvas.lineJoin    = this.union;
            this.canvas.lineWidth   = this.anchoLinea;
        
            for (let i = 0; i < this.clickX.length; i++) {
                this.canvas.beginPath();
                if (this.clickD[i] && i) {
                    this.canvas.moveTo(this.clickX[i-1], this.clickY[i-1]);
                } else {
                    this.canvas.moveTo(this.clickX[i]-1, this.clickY[i]);
                }
                this.canvas.lineTo(this.clickX[i], this.clickY[i]);
                this.canvas.closePath();
                this.canvas.stroke();
            }
        },
        limpiar: async () => {
            this.canvas.clearRect(0, 0, this.ancho, this.alto);
            this.clickX = new Array();
            this.clickY = new Array();
            this.clickD = new Array();
            //$(".prediction-text").empty();
            //$("#result_box").addClass('d-none');
        }
    }
}
</script>

<style>
.canvas {
    background-color: var(--background-color);
}
</style>