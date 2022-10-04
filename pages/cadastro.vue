<script setup>
import { async } from '@firebase/util'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase.config'
const showpPassword = ref(false)

const name = ref('')
const email = ref('')
const password = ref('')

const onSubmit = async () => {
	try {
		const auth = getAuth()
		const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value)
		const user = userCredential.user
		await updateProfile(auth.currentUser, { displayName: name.value })

		await setDoc(doc(db, 'users', user.uid), {
			name: name.value,
			email: email.value,
			timestamp: serverTimestamp()
		})

		await navigateTo('/')
	} catch (error) {
		console.log(error)
	}
}
</script>

<template>
	<h1>Bem-Vindo</h1>
	<main>
		<form @submit.prevent="onSubmit">
			<input type="text" @value="name" v-model="name" />
			<input type="email" @value="email" v-model="email" />
			<input type="password" @value="password" v-model="password" />
			<button>Registrar Usuário</button>
		</form>
	</main>
</template>
