<template>
    <div class="flex justify-center gap-2 mt-2">
        <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter in letters" :key="letter">
            {{ letter }}
        </router-link>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <MealItem :meal="meal" v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-lg"></MealItem>
    </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import MealItem from '../components/MealItem.vue';
import store from '../store';

const route = useRoute()
const meals = computed(() => store.state.mealsByLetter)

const searchMealsByLetter = (() => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("")


watch(route, () => {
    searchMealsByLetter()
})

onMounted(() => {
    searchMealsByLetter()
})


</script>