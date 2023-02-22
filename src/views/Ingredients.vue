<template>
    <div class="flex justify-center">
        <h1 class="text-5xl my-5">Ingredients</h1>
    </div>
    <div>
        <router-link :to="{name: 'byIngredient', params: {ingredient: ingredient.strIngredient}}"
         v-for="ingredient of ingredients" :key="ingredient.idIngredient" 
         class="block bg-white rounded-lg m-5 p-5 my-3 hover:bg-slate-50 transition-colors min-w-full shadow"
         >
            <h2 class="text-lg mb-3 font-semibold">
                {{ ingredient.strIngredient }}
            </h2>
            <h3 class="text-md">
                {{ ingredient.strDescription }}
            </h3>
        </router-link>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'

import apiClient from '../axiosClient';

const ingredients = ref();

const getIngredients = (async () => {
    const response = await apiClient.get('list.php?i=list')
    ingredients.value = response.data.meals
})

onMounted(() => {
    getIngredients()
})
</script>