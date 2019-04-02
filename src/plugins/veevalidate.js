// import something here
import VeeValidate from 'vee-validate';
import {Validator} from 'vee-validate';

// leave the export, even if you don't use it
export default ({ app, router, Vue }) => {

	Vue.use(VeeValidate,{
		events: 'change|input'
	});

	Validator.extend('number',{
		getMessage(field,args){},
		validate(value,args){
			return (new Number(value) !== NaN)
		}
	})
  // something to do
}
