<template>
    <div id="home">
        <FileInputCard/>
        <MainCard mensaje="Dibuja un componente de interfaz gráfica" colorFondo="#eeeeee"/>
    </div>
</template>

<script>
import FileInputCard from '@/components/FileInputCard.vue'
import MainCard from '@/components/MainCard.vue'

export default {
    components: {
        FileInputCard,
        MainCard
    }
}
</script>