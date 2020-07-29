<template>
    <div>
        <v-container>
            <v-form :lazy-validation="true" v-model="valid" ref="form">
                <v-text-field v-model="client" label="Cliente"></v-text-field>
                    <v-text-field v-model="document" label="Documento" type="number"></v-text-field>
                    <v-text-field v-model="license_plate" label="Placa"></v-text-field>
                    <v-select :items="typeCar" item-text="name" item-value="id" v-model="type_car_id" label="Tipo de carro"></v-select>
                    <v-select :items="brandCar" item-text="name" item-value="id" v-model="brand_car_id" label="Tipo de marca"></v-select>
                    <v-select :items="modelCar" item-text="name" item-value="id" v-model="model_car_id" label="Tipo de modelo"></v-select>
                    <v-btn @click="goToBack">Volver</v-btn>
                    <v-btn color="primary" @click="CreateCar">Crear</v-btn>
            </v-form>
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
        typeCar: [],
        brandCar: [],
        modelCar: [],
        client: '',
        document: '',
        license_plate: '',
        type_car_id: '',
        brand_car_id: '',
        model_car_id: '',
        notification: false,
        message: '',
        color: '',
        timeout:''
    }),
    mounted(){
        this.getTypeCar();
        this.getBrandCar();
        this.getModelCar();
    },
    methods:{

        goToBack(){
            this.$router.push('/')
        },

        CreateCar(){
            if(!this.client){
                this.notification = true;
                this.message = 'No has introcido el nombre del cliente';
                this.color = 'error';
            }else if(!this.document){
                this.notification = true;
                this.message = 'No has introcido el documento';
                this.color = 'error';
            }else if(!this.license_plate){
                this.notification = true;
                this.message = 'No has introcido la placa';
                this.color = 'error';
            }else if(!this.type_car_id){
                this.notification = true;
                this.message = 'No has introcido el tipo de vehiculo';
                this.color = 'error';
            }else if(!this.brand_car_id){
                this.notification = true;
                this.message = 'No has introcido la marca';
                this.color = 'error';
            }else if(!this.model_car_id){
                this.notification = true;
                this.message = 'No has selecionado el nodelo';
                this.color = 'error';
            }else {
                let data = { client: this.client, document: this.document, license_plate: this.license_plate, type_car: this.type_car_id, brand_car: this.brand_car_id, model_car: this.model_car_id }
                axios.post('/api/car/CreateCar', data)
                .then(response => {
                    // if(response.transaction.status == true){
                    //     this.notification = true;
                    //     this.message = response.message;
                    //     this.color = 'success';
                        window.location = '/'
                    // }else {
                    //     this.notification = true;
                    //     this.message = 'No se proceso exitosamente el registro';
                    //     this.color = 'error'
                    // }
                }).catch(error => {
                    console.log(error)
                }) 
            }
        },
        getTypeCar(){
            axios.get('/api/car/getTypeCar')
            .then(res => {
                this.typeCar = res.data
            }).catch(err => {
                console.log(err)
            })
        },
         getBrandCar(){
            axios.get('/api/car/getBrandCar')
            .then(res => {
                this.brandCar = res.data
            }).catch(err => {
                console.log(err)
            })
        },
        getModelCar(){
            axios.get('/api/car/getModelCar')
            .then(res => {
                this.modelCar = res.data
            }).catch(err => {
                console.log(err)
            })
        },
    }
}
</script>