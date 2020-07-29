<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    public function type_car()
    {
        return $this->belongsTo(TypeCar::class, 'type_car_id', 'id');
    }

    public function model_car()
    {
        return $this->belongsTo(ModelCar::class, 'model_car_id', 'id' );
    }

    public function brand_car()
    {
        return $this->belongsTo(BrandCar::class, 'brand_car_id', 'id' );
    }
}
