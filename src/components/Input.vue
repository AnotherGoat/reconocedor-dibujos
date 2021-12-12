<template>
    <v-layout row wrap>
        <v-flex xs6>
            <v-file-input id="upload-json" label="Modelo"/>
        </v-flex>
        <v-flex xs6>
            <v-file-input id="upload-weights" label="Pesos"/>
        </v-flex>
    </v-layout>
</template>

<style>
.v-file-input {
    padding-left: 5%;
    padding-right: 5%;
}
</style>