<template>
    <div style="min-height:100%">
        <v-container>
            <v-data-table style="margin-top: 70px;" :headers="headers" :items="rows" :items-per-page="5" class="elevation-1">
                <template v-slot:item.action="{ item }">
                    <v-btn color="primary" x-small @click="goToEdit(item)" v-on="on" v-bind="attrs">editar</v-btn>
                    <v-btn color="blue" x-small @click="deleteCar(item)">
                        eliminar
                    </v-btn>
                </template>
            </v-data-table>
            <v-snackbar v-model="notification" :timeout="timeout" :top="true" :right="true">
                {{ message }}

                <template v-slot:action="{ attrs }">
                <v-btn
                    color="blue"
                    text
                    v-bind="attrs"
                    @click="notification = false"
                >
                    x
                </v-btn>
                </template>
                </v-snackbar>
        </v-container>
    </div>
</template>
<script>
export default {
    data: () => ({
        rows: [],
        headers: [
            { text: 'id', value: 'id' },
            { text: 'Cliente', value: 'client' },
            { text: 'Documento', value: 'document' },
            { text: 'Placa', value: 'license_plate' },
            { text: 'Tipo de carro', value: 'type_car.name' },
            { text: 'Marca', value: 'brand_car.name' },
            { text: 'Modelo', value: 'model_car.name' },

            { text: 'Acciones', value: 'action' },
        ],
        notification: false,
        message: '',
        color: '',
        timeout: 6000,
        fab:false,

    }),
    created() {
        this.getCar();
    },
    methods: {
        getCar(){
            axios.get('/api/car/getCar')
            .then(res => {
                this.rows = res.data
            }).catch(err => {
                console.log(err)
            })
        },
        deleteCar(item){
            axios.delete('/api/car/deleteCar/' + item.id)
            .then(res => {
                this.notification = true;
                this.message = res.data;
                this.color = 'success';
                this.getCar()
            }).catch(err => {
                this.notification = true;
                this.message = 'Ocurrio un error al momento de eliminar.'
                this.color = 'error';
            })
        },
        goToEdit(item){ 
            this.$router.push('/editCar/'+item.id)
        }
    }
}
</script>