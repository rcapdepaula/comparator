<script setup>
import { getAuth } from 'firebase/auth'

// init firebase
const auth = getAuth()
const user = ref(null)

watch(() => {
	if (auth.currentUser) {
		user.value = auth.currentUser
		console.log(auth)
	}
})

//display user name
console.log(user.value?.displayName)
</script>

<template>
	<div>
		<h1>Dashboard</h1>
		<main>
			<h2>{{ user.value?.displayName }}</h2>
		</main>
	</div>
</template>
