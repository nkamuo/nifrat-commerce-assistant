import FileInput from 'components/system/fileinput';

// leave the export, even if you don't use it
export default ({ app, router, Vue }) => {
  Vue.component('file-input',FileInput);
}
