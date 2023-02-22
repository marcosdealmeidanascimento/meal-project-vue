<template>
    <div class="flex justify-center pt-5">
        <h1 class="text-5xl">Meals</h1>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <MealItem :meal="meal" v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-lg"></MealItem>
    </div>
</template>

<script setup>

import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import apiClient from '../axiosClient';
import YoutubeLink from '../components/YoutubeLink.vue';
import MealItem from '../components/MealItem.vue';

const route = useRoute()
var randomMeal
const meals = ref([]);

const getMeals = (async() => {
    const response = await apiClient.get('random.php')
    meals.value.push(response.data.meals[0])
})

randomMeal = setInterval(getMeals, 100)

onMounted(() => {
    randomMeal
    setTimeout(() => {
        clearInterval(randomMeal)
    }, 1500)
})

</script>