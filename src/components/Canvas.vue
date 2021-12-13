<template>
    <canvas id="canvas" v-bind:width="this.ancho + 'px'" v-bind:height="this.alto + 'px'">
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
    props: ["ancho", "alto", "colorDibujo", "anchoLinea", "union"],
    mounted() {
        this.canvas = document.getElementById("canvas");

        $("#canvas").mousedown(this.mousedown);
        $("#canvas").mousemove(this.mousemove);
        $("#canvas").mouseup(this.mouseup);
        $("#canvas").mouseleave(this.mouseleave);

        this.canvas.addEventListener("touchstart", this.touchstart, false);
        this.canvas.addEventListener("touchmove", this.touchmove, false);
        this.canvas.addEventListener("touchend", this.touchend, false);
        this.canvas.addEventListener("touchleave", this.touchleave, false);
    },
    methods: {
        ctx: function() {
            return this.canvas.getContext("2d");
        },
        mousedown: function(e) {
            let rect = this.canvas.getBoundingClientRect();
            let mouseX = e.clientX- rect.left;
            let mouseY = e.clientY- rect.top;
            this.dibujando = true;
            this.addUserGesture(mouseX, mouseY);
            this.drawOnCanvas();
        },
        mousemove: function(e) {
            if (this.dibujando) {
                let rect = this.canvas.getBoundingClientRect();
                let mouseX = e.clientX - rect.left;
                let mouseY = e.clientY - rect.top;
                this.addUserGesture(mouseX, mouseY, true);
                this.drawOnCanvas();
            }
        },
        mouseup: function() {
            this.dibujando = false;
        },
        mouseleave: function() {
            this.dibujando = false;
        },
        touchstart: function (e) {
            if (e.target == this.canvas) {
                e.preventDefault();
            }
        
            let rect = this.canvas.getBoundingClientRect();
            let touch = e.touches[0];
        
            let mouseX = touch.clientX - rect.left;
            let mouseY = touch.clientY - rect.top;
        
            this.dibujando = true;
            this.addUserGesture(mouseX, mouseY);
            this.drawOnCanvas();
        },
        touchmove: function(e) {
            if (e.target == this.canvas) {
                    e.preventDefault();
            }
            if (this.dibujando) {
                var rect = this.canvas.getBoundingClientRect();
                var touch = e.touches[0];
        
                var mouseX = touch.clientX - rect.left;
                var mouseY = touch.clientY - rect.top;
        
                this.addUserGesture(mouseX, mouseY, true);
                this.drawOnCanvas();
            }
        },
        touchend: function(e) {
            if (e.target == this.canvas) {
                e.preventDefault();
            }
            this.dibujando = false;
        },
        touchleave: function(e) {
            if (e.target == this.canvas) {
                e.preventDefault();
            }
            this.dibujando = false;
        },
        addUserGesture: function(x, y, dragging) {
            this.clickX.push(x);
            this.clickY.push(y);
            this.clickD.push(dragging);
        },
        drawOnCanvas: function() {
            let ctx = this.ctx();
            ctx.clearRect(0, 0, this.ancho, this.alto);
        
            ctx.strokeStyle = this.colorDibujo;
            ctx.lineJoin = this.union;
            ctx.lineWidth = this.anchoLinea;
        
            for (let i = 0; i < this.clickX.length; i++) {
                ctx.beginPath();
                if (this.clickD[i] && i) {
                    ctx.moveTo(this.clickX[i-1], this.clickY[i-1]);
                } else {
                    ctx.moveTo(this.clickX[i]-1, this.clickY[i]);
                }
                ctx.lineTo(this.clickX[i], this.clickY[i]);
                ctx.closePath();
                ctx.stroke();
            }
        },
        limpiar: function() {
            // Limpia el canvas
            let ctx = this.ctx();
            ctx.clearRect(0, 0, this.ancho, this.alto);
            
            this.clickX = new Array();
            this.clickY = new Array();
            this.clickD = new Array();
        },
        // Devuelve el canvas como una imagen
        getImagen: function() {
            return this.canvas.toDataURL("image/png");
        }
    }
}
</script>

<style>
#canvas {
    border: 1px solid black;
    background-color: white;
}
</style>