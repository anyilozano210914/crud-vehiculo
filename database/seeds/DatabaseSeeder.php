<?php

use App\BrandCar;
use App\ModelCar;
use App\TypeCar;
use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // User::create([
        //     'name' => 'Anyi lozano',
        //     'email' => 'arelozano210914@gmail.com',
        //     'password' => Hash::make('123456')
        // ]); 

        // BrandCar::create([
        //     'name' => 'Chevrolet'
        // ]);

        // BrandCar::create([
        //     'name' => 'Renault'
        // ]);

        // BrandCar::create([
        //     'name' => 'Fiat'
        // ]);

        // BrandCar::create([
        //     'name' => 'Mazda'
        // ]);

        // BrandCar::create([
        //     'name' => 'BMW'
        // ]);

        // TypeCar::create([
        //     'name' => 'Pequeño'
        // ]);

        // TypeCar::create([
        //     'name' => 'Mediano'
        // ]);

        // TypeCar::create([
        //     'name' => 'Camioneta'
        // ]);

        // TypeCar::create([
        //     'name' => 'Grande'
        // ]);

        // TypeCar::create([
        //     'name' => 'Servicio publico'
        // ]);

        ModelCar::create([
            'name' => 'Sandero',
            'brand_car_id' => 2
        ]);

        ModelCar::create([
            'name' => 'Onix',
            'brand_car_id' => 1
        ]);

        ModelCar::create([
            'name' => 'Mazda3',
            'brand_car_id' => 4
        ]);

        ModelCar::create([
            'name' => 'Bmw2 convertible',
            'brand_car_id' => 5
        ]);

        ModelCar::create([
            'name' => 'Uno way',
            'brand_car_id' => 3
        ]);
    }
}
