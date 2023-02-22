<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <MealItem :meal="meal" v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-lg"></MealItem>
    </div>
</template>
<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router';
import apiClient from '../axiosClient';
import store from '../store';
import MealItem from '../components/MealItem.vue';

const route = useRoute()
const meals = computed(() => store.state.mealsByIngredient);

const getMeals = (async () => {
    store.dispatch('searchMealsByIngredient', route.params.ingredient)
})

onMounted(() => {
    getMeals()
})
</script>