<template>
    <div class="p-3">
        <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal } }">
            <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t h-60 w-full object-cover">
        </router-link>
        <h3 class="font-bold">{{ meal.strMeal }}</h3>
        <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque a itaque vitae debitis exercitationem, placeat voluptas alias amet at iste tenetur maiores excepturi quae hic dolorem fugit dolorum iusto accusamus.</p>
        <YoutubeLink :href="meal.strYoutube"></YoutubeLink>
    </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import store from '../store';
import YoutubeLink from '../components/YoutubeLink.vue';

const route = useRoute()
const { meal } = defineProps({meal: Object})

</script>