<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CarTableMigration extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cars', function(Blueprint $table){
            $table->id();
            $table->string('client');
            $table->integer('document');
            $table->string('license_plate');
            $table->integer('type_car_id');
            $table->integer('brand_car_id');
            $table->integer('model_car_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
