import apiClient from '../axiosClient';

export function searchMeals({ commit }, keyword) {
    apiClient.get(`search.php?s=${keyword}`).then(({ data }) => {
        commit('setSearchedMeals', data.meals)
    })
}

export function searchMealsByLetter({ commit }, letter) {
    apiClient.get(`search.php?f=${letter}`).then(({ data }) => {
        commit('setMealsByLetter', data.meals)
    })
}

export function searchMealsByIngredient({ commit }, ingredient) {
    apiClient.get(`filter.php?i=${ingredient}`).then(({ data }) => {
        commit('setMealsByIngredient', data.meals)
    })
}