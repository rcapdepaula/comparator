<script setup>
// toggle mobile menu
const isOpen = ref(false)

const toggleMenu = () => {
	isOpen.value = !isOpen.value
}
const path = useRoute()

// if route changes, close mobile menu
watch(path, () => {
	isOpen.value = false
})
</script>

<template>
	<nav class="bg-gray-800">
		<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
			<div class="relative flex h-16 items-center justify-between">
				<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
					<!-- Mobile menu button-->
					<button
						@click="toggleMenu"
						type="button"
						class="outline-none inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
						aria-controls="mobile-menu"
						aria-expanded="false"
					>
						<span class="sr-only">Open main menu</span>
						<!--
            Icon when menu is closed.

            Heroicon name: outline/bars-3

            Menu open: "hidden", Menu closed: "block"
          -->
						<div v-if="!isOpen">
							<img src="/assets/img/RiMenuFill.svg" class="w-6 h6" alt="" />
						</div>
						<!--
            Icon when menu is open.

            Heroicon name: outline/x-mark

            Menu open: "block", Menu closed: "hidden"
          -->
						<div v-if="isOpen">
							<img src="/assets/img/RiCloseCircleLine.svg" class="w-6 h6" alt="" />
						</div>
					</button>
				</div>
				<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
					<div class="flex flex-shrink-0 items-center">
						<img
							class="block h-8 w-auto lg:hidden"
							src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
							alt="Your Company"
						/>
						<img
							class="hidden h-8 w-auto lg:block"
							src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
							alt="Your Company"
						/>
					</div>
					<div class="hidden sm:ml-6 sm:block">
						<div class="flex space-x-4">
							<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
							<a
								href="#"
								class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
								aria-current="page"
								>Dashboard</a
							>

							<a
								href="#"
								class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
								>Team</a
							>

							<a
								href="#"
								class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
								>Projects</a
							>

							<a
								href="#"
								class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
								>Calendar</a
							>
						</div>
					</div>
				</div>
				<div
					class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
				>
					<!-- Profile dropdown -->
					<div class="relative ml-3">
						<div>
							<button
								type="button"
								class="text-white flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
								id="user-menu-button"
								aria-expanded="false"
								aria-haspopup="true"
							>
								<span class="sr-only">Open user menu</span>
								<NuxtLink to="/login">Login</NuxtLink>
							</button>
						</div>

						<!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --></div>
				</div>
			</div>
		</div>

		<!-- Mobile menu, show/hide based on menu state. -->

		<div class="sm:hidden" id="mobile-menu" v-if="isOpen">
			<div class="space-y-1 px-2 pt-2 pb-3">
				<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
				<a
					href="#"
					class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
					aria-current="page"
					>Dashboard</a
				>

				<a
					href="#"
					class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
					>Team</a
				>

				<a
					href="#"
					class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
					>Projects</a
				>

				<a
					href="#"
					class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
					>Calendar</a
				>
			</div>
		</div>
	</nav>
</template>
