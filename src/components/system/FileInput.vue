<template>
    <div>
        <q-btn icon="add" label="" @click="openFileSystem"></q-btn>
        <input type="file" @input="getSelectedFile" :accept="(accept.length > 0)? accept.toString() :'*/*'" style="display:none" ref="fileInput" :disabled="disabled" multiple/>
        <q-list highlight>
          <q-list-header>Files</q-list-header>
          <q-item v-for="file in files" :key="file.name">
            <q-item-side :image="file.src" />
            <q-item-main :label="file.name" />
            <q-item-side right>
                <q-btn color="" icon="remove" label="" @click="removeFile(file)" />
            </q-item-side>
          </q-item>
        </q-list>

    </div>
</template>



<script>
export default {
    model:{
        name: 'files',
        event: 'change'
    },
    props:{
        accept:{
            type:Array,
            default: () => {
                return [];
            },
        },
        disabled: {
            type: Boolean,
            default:() =>{ return false;}
        }

    },

    data(){
        return {
            files: [],
            htmlFiles: [],
        }
    },

    methods: {
        openFileSystem(){
            this.$refs.fileInput.click();
        },

        getSelectedFile(event){
            console.log(event.target.files[0]);
            var htmlFiles = event.target.files;

        var index;
        var numOfFiles = htmlFiles.length;
        var htmlFile,fileReader;

        for(index = 0; index < numOfFiles; index++){
            htmlFile = htmlFiles[index];


            fileReader = new FileReader();
            fileReader.addEventListener('load',(data)=>{
              //  console.log(data)

          var base64Data = btoa(fileReader.result);
          

            var file = {
                name: htmlFile.name,
                type: htmlFile.type,
                src: 'data:'+htmlFile.type+';base64,'+base64Data,
            }

            this.files.push(file);
            console.log(file.src)

            });
            
            fileReader.readAsBinaryString(htmlFile);

            
            
        }

        },

        removeFile(file){
            this.files.remove(file)
        }
            
    },

}
</script>