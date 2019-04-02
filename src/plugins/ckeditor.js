// import something here

import VueCKEditor from '@ckeditor/ckeditor5-vue';

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';


import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';

import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';

//import '@ckeditor/ckeditor5-core/theme/icons/cancle.svg'
//import '@ckeditor/ckeditor5-core/theme/icons/check.svg'
//import '@ckeditor/ckeditor5-core/theme/icons/image.svg'

//import '@ckeditor/ckeditor5-theme-lark/theme/mixins/_rwd.css'
// <--- ADDED

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
    Essentials,
    UploadAdapter,
    Autoformat,
    Bold,
    Italic,
    BlockQuote,
    EasyImage,
    Heading,
    Image,
    ImageCaption,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    Link,
    List,
    Paragraph,
    Alignment                                                            // <--- ADDED
];



ClassicEditor.defaultConfig = {
  toolbar: {
      items: [
          'heading',
          '|',
          'alignment',                                                 // <--- ADDED
          'bold',
          'italic',
          'link',
          'bulletedList',
          'numberedList',
          'imageUpload',
          'blockQuote',
          'undo',
          'redo'
      ]
  },
  image: {
      toolbar: [
          'imageStyle:full',
          'imageStyle:side',
          '|',
          'imageTextAlternative'
      ]
  },
  // This value must be kept in sync with the language defined in webpack.config.js.
  language: 'en'
};

// leave the export, even if you don't use it
export default ({ app, router, Vue }) => {
  // something to do

Vue.use(VueCKEditor);
}

//export {ClassicEditor};