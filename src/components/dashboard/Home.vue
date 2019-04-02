<template>
    <div class="row">
        <div>
            <line-chart :data="data" ref="chart"/>
        </div>
    </div >
</template>

<script>
import {Bar as LineChart} from 'vue-chartjs';

export default {
    components: {  LineChart },

    data(){
        return {
            data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],

      datasets:[{
            label: 'Number Of Sales',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
          /*  borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
          ],*/
            borderWidth: 1
        },
        {
            label:"Number"
        }
        ]
    },

    options: {
        layout: {
            padding: {
                left: 50,
                right: 0,
                top: 0,
                bottom: 0
            }
        },

        title: {
            display: true,
            text: 'Custom Chart Title'
        }
    }
        }
    },

    mounted() {
        this.$refs.chart.renderChart(this.data,this.options);
    },
    
}
</script>