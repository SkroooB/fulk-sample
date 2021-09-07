<template>
<div class="flex justify-center lg:justify-between md:justify-between sm:justify-between">
	<div class="min-h-screen hidden sm:block md:block lg:block w-1/2 bg-no-repeat bg-cover bg-center"
	style="background-image: url('https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')">
</div>
	<div >
	<div class="bg-white min-h-screen flex justify-center items-center sm:pr-16 md:pr-28 lg:pr-44">
		<div >

				<form>
					<div>
						<span class="text-sm">Welcome back</span>
						<h1 class="text-2xl font-bold">Login to your account</h1>
					</div>
											<div class="my-3">
							<label class="block text-md mb-2" for="email">Email</label>
							<input class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="email" name="password" placeholder="Email">
        </div>
					<div class="mt-5">
						<label class="block text-md mb-2" for="password">Password</label>
						<input class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" name="password" placeholder="Password">
        </div>

							<div class="flex justify-between">
								<div>
									<input class="cursor-pointer"  type="radio" name="rememberme">
									<span class="text-sm">Remember Me</span>
								</div>
								<span class="text-sm text-fulk-dark hover:underline cursor-pointer">Forgot password?</span>
							</div>
							<div class="">
								<router-link to="/Account"><button class="mt-4 mb-3 w-full bg-fulk-dark hover:bg-fulk-light text-white py-2 rounded-md transition duration-100">Login now</button></router-link>
								<div class="flex  space-x-2 justify-center items-end bg-fulk-dark hover:bg-fulk-light text-white py-2 rounded-md transition duration-100">

            <img class=" h-5 cursor-pointer" src="https://i.imgur.com/arC60SB.png" alt="Google">
									<router-link to="/Account"><button >Or sign-in with google</button></router-link>
								</div>
							</div>
				</form>
				<p class="mt-8"> Dont have an account? <span class="cursor-pointer text-sm text-fulk-dark"> Join free today</span></p>
			</div>
	</div>
</div>
</div>
</template>

<script>
export default {
    name: 'Register'
}
</script>
