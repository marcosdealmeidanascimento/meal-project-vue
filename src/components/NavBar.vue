<template>
    <header class="bg-white shadow-md h-16 flex justify-between items-stretch">
        <router-link :to="{name: 'home'}" class="inline-flex items-center h-full px-5 transition-colors hover:bg-rose-200">
            Home
        </router-link>
        <nav class="flex items-center">
            <router-link :to="{name: 'byName'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-rose-200">
                Search Meals
            </router-link>
            <router-link :to="{name: 'byLetter'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-rose-200">
                Meals by Letter
            </router-link>
            <router-link :to="{name: 'ingredients'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-rose-200">
                Meals by Ingredients
            </router-link>
        </nav>
    </header>
</template>