<script setup>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
const showpPassword = ref(false)
const email = ref('')
const password = ref('')

const onSubmit = async () => {
	try {
		const auth = getAuth()
		const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value)
		if (userCredential.user) {
			await navigateTo('/dashboard')
		}
	} catch (error) {
		console.log(error)
	}
}
</script>

<template>
	<h1>Bem-Vindo</h1>
	<main>
		<form @submit.prevent="onSubmit">
			<input type="email" @value="email" v-model="email" />
			<input type="password" @value="password" v-model="password" />
			<button>Entrar</button>
		</form>
	</main>
</template>
