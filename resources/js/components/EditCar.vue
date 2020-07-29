<template>
    <div>
        <v-container>
            <v-form :lazy-validation="true" v-model="valid" ref="form">
                <v-text-field v-model="carEdit.client" label="Cliente"></v-text-field>
                    <v-text-field v-model="carEdit.document" label="Documento" type="number"></v-text-field>
                    <v-text-field v-model="carEdit.license_plate" label="Placa"></v-text-field>
                    <v-select :items="typeCar" item-text="name" item-value="id" v-model="carEdit.type_car_id" label="Tipo de carro"></v-select>
                    <v-select :items="brandCar" item-text="name" item-value="id" v-model="carEdit.brand_car_id" label="Tipo de marca"></v-select>
                    <v-select :items="modelCar" item-text="name" item-value="id" v-model="carEdit.model_car_id" label="Tipo de modelo"></v-select>
                    <v-btn @click="goToBack">Volver</v-btn>
                    <v-btn color="primary" @click="EditCar">Editar</v-btn>
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
        timeout: 6000,
        car: [],
    }),
    mounted(){
        this.getCar();
        this.param = this.$route.params.id
        this.getTypeCar();
        this.getBrandCar();
        this.getModelCar();
    },
    computed: {
        carEdit: function(){
            let car = {}
            this.car.map(item => {
                if(item.id == this.param){
                    car = item
                }
            })
            return car
        }
    },
    methods:{
        getCar(){
            axios.get('/api/car/getCar')
            .then(res => {
                this.car = res.data
            }).catch(error => {
                console.log(error)
            })
        },

        goToBack(){
            this.$router.push('/')
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

        EditCar(){
            if(!this.carEdit.client){
                this.notification = true;
                this.message = 'No has introcido el nombre del cliente';
                this.color = 'error';
            }else if(!this.carEdit.document){
                this.notification = true;
                this.message = 'No has introcido el documento';
                this.color = 'error';
            }else if(!this.carEdit.license_plate){
                this.notification = true;
                this.message = 'No has introcido la placa';
                this.color = 'error';
            }else if(!this.carEdit.type_car_id){
                this.notification = true;
                this.message = 'No has introcido el minimo pedido';
                this.color = 'error';
            }else if(!this.carEdit.brand_car_id){
                this.notification = true;
                this.message = 'No has introcido la direccion';
                this.color = 'error';
            }else if(!this.carEdit.model_car_id){
                this.notification = true;
                this.message = 'No has selecionado la ciudad';
                this.color = 'error';
            }else {
                let data = {id: parseInt(this.param), client: this.carEdit.client, document: this.carEdit.document, license_plate: this.carEdit.license_plate, type_car: this.carEdit.type_car_id, brand_car: this.carEdit.brand_car_id, model_car: this.carEdit.model_car_id }
                axios.post('/api/car/EditCar', data)
                .then(response => {
                        this.notification = true;
                        this.message = response.message;
                        this.color = 'success';
                        window.location = '/'
                }).catch(error => {
                    console.log(error)
                }) 
            }
        }
    }
}
</script>