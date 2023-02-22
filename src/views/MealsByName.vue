<template>
    <div class="p-6 pb-0">
        <input v-model="keyword" @change="searchMeals()" type="text" class="rounded border-2 border-gray-400 w-full" placeholder="Search Meals">
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <MealItem :meal="meal" v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-lg"></MealItem>
    </div>
</template>

<script setup>

import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import store from '../store';
import MealItem from '../components/MealItem.vue';

const route = useRoute()

const meals = computed(() => store.state.searchedMeals)
const keyword = ref('');

const searchMeals = (() => {
    store.dispatch('searchMeals', keyword.value)
})

onMounted(() => {
    keyword.value = route.params.name
    if(keyword.value) {
        searchMeals()
    }
})

</script>