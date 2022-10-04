<script setup>
import { collection, getDoc } from '@firebase/firestore'
import { db } from '../firebase.config'
</script>

<template>
	<div>
		<h1 class="font-bold text-black text-3xl">Hello, Tailwind 3!</h1>

		<NuxtLink to="/comparador">Comparador</NuxtLink>
	</div>
</template>
