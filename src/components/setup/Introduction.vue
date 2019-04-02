<template>
	<q-card>
		<q-card-title>
		<h4>Getting Started With <br v-if="!$q.platform.is.desktop"/><b>Nifrat Commerce Assistant</b></h4>
		<p>
			Manage Your Store(s) with great ease and mobility
		</p>
		</q-card-title>
		<q-card-main>
		

		</q-card-main>
		<q-card-seperator/>
		<q-card-action>

			<p> Thank You For downloading our app.<br/> You can check some more of our work at <a href="http://nifrat.com" target="_blank">www.nifrat.com</a>.</p>
			<p>Setup your Application</p>
			<q-btn @click="procced" color="blue">Procced</q-btn>


			<q-modal v-model="isOpen" :no-backdrop-dismiss="false" :no-esc-dismiss="false">
			Now Open
			</q-modal>

		</q-card-action>
	</q-card>
			

</template>

<script>
	export default {

		data(){
			return {
				setup: {

				},
				isOpen: false
			}
		},

		methods: {
			procced(){

			}
		}
	};
</script>