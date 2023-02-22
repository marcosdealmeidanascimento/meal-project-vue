<template>
    <div class="px-8 max-w-[700px] mx-auto">
        <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
        <div class="bg-white p-8 rounded-lg shadow">
            <img :src="meal.strMealThumb" alt="" srcset="" class="rounded-lg shadow">
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3">
            <div>
                <strong class="font-bold">Category</strong>: {{ meal.strCategory }}
            </div>
            <div>
                <strong class="font-bold">Area</strong>: {{ meal.strArea }}
            </div>
            <div>
                <strong class="font-bold">Tags</strong>: {{ meal.strTags }}
            </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2">
            <div>
                <h2 class="text-2x1 font-semibold my-5">Ingredients</h2>
                <ul>
                    <template v-for="(ingredients, ind) of new Array(20)">
                        <li v-if="meal[`strIngredient${ind+1}`] && meal[`strIngredient${ind+1}`] !== ' '">
                            {{ ind+1 }}. {{ meal[`strIngredient${ind+1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
            <div>
                <h2 class="text-2x1 font-semibold my-5">Measures</h2>
                <ul>
                    <template v-for="(measure, ind) of new Array(20)">
                        <li v-if="meal[`strMeasure${ind+1}`] && meal[`strMeasure${ind+1}`] !== ' '">
                            {{ ind+1 }}. {{ meal[`strMeasure${ind+1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
        </div>
        <div class="my-8">
            <h2 class="text-2xl font-bold mb-5">Instructions</h2>
            <p class="text-justify">{{ meal.strInstructions }}</p>
        </div>
        <div class="flex justify-around">
            <YoutubeLink :href="meal.strYoutube">Go to Youtube</YoutubeLink>
            <YoutubeLink :href="meal.strSource">Go to Source</YoutubeLink>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';
import apiClient from '../axiosClient';
import YoutubeLink from '../components/YoutubeLink.vue';


const route = useRoute()

const meal = ref([]);
const mealId = ref();

const getMeal = (async() => {
    const response = await apiClient.get(`lookup.php?i=${mealId.value}`)
    meal.value = response.data ? response.data.meals[0] : {}
})
onMounted(() => {
    mealId.value = route.params.id
    getMeal()
})

</script>