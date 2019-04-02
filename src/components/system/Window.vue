<template>
	<q-modal v-model="window.open" :maximized="window.maximized" :minimized="window.minimized">
          
          <q-layout>
           <!--q-layout-header-->

          <q-toolbar color="base" align="right"  style="float: left; position: relative; top:0px;" v-if="$q.platform.is.desktop">
            <!--q-image name="add"></q-image-->
            <!--q-toolbar-title-->{{title}}<!--q-toolbar-title-->
            <!--q-item-side right v-if="$q.platform.is.desktop"-->
            <q-btn-group class="" style="float: left; position: absolute; right:1px; border: px" rounded>
            <q-btn  flat :icon="window.maximized? '' : 'maximize'" @click="window.maximized = !window.maximized" :title="window.maximized? 'Minimize' : 'Maximize'" :label="window.maximized? '__': ''"/>
            <q-btn  hcolor="red" icon="close"  @click="newItem = {}; window.open = false" style="" title="Close" />
            <!--q-btn flat hcolor="red" icon=""  @click="window.minimized = true">__</q-btn-->
            </q-btn-group>
            <!--/q-item-side-->
          </q-toolbar>
          <!--q-scroll-area class="fit q-pa-sm"-->
          <slot></slot>
          <!--/q-scroll-area-->
          </q-layout>
       

       </q-modal>
</template>

<script>
	export default {
		name: 'Window',

		props: {
			value: {
				type: Boolean,
				required: false,
				default(){
					return false;
				}
			},

			title: {
				type: String,
				required: false,
				default(){
					return 'PopUp Window';
				}
			}
		},

		model: {
			prop: 'value',
			event: 'change',
		},

		data(){
			return {
				window: {
					open: this.value,
					maximized: false,
					minimized: false,
				}
			}
		},

		methods: {
			open(){
				this.value = true;
				console.log("Window State Change: "+this.value);
			},

			close(){
				this.value = false;
			},

			toggle(){
				this.value = ! this.value;
			}
		},

		watch: {

			value(value){
				this.window.open = value;
				console.log("Window prop, value changed: "+ value)
				this.$emit('change',value);
			},

			'window.open': function(value){
				console.debug('window.open: '+ value)
				if(this.window.open !== this.value){
					this.value = this.window.open;
				}
			}


		}
	}
</script>