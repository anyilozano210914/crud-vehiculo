<?php

namespace App\Http\Controllers;

use App\BrandCar;
use App\Car;
use App\ModelCar;
use App\TypeCar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CarController extends Controller
{
    public function CreateCar(Request $request)
    {
        $status = false;
        $result = null;  
        DB::beginTransaction();
        try {
            $car = new Car();
            $car->client = $request->client;
            $car->document = $request->document;
            $car->license_plate = $request->license_plate;
            $car->type_car_id = $request->type_car;
            $car->brand_car_id = $request->brand_car;
            $car->model_car_id = $request->model_car;
            $car->save();

            $status = true;
            DB::commit();
        } catch (\Throwable $th) {
            $result = $th->getMessage();
            DB::rollBack();
        }if($status){
            return json_encode(['transation' => ['status' => $status], 'message' => 'se creo exitosamente el carro', 'data' => $car]);
        }else{
            return json_encode(['transation' => ['status' => $status], 'message' => 'se presento un error al momento de crear', 'data' => $result]);
        }
    }

    public function EditCar(Request $request)
    {
        $status = false;
        $result = null;  
        DB::beginTransaction();
        try {
            $car = Car::find($request->id);
            $car->client = $request->client;
            $car->document = $request->document;
            $car->license_plate = $request->license_plate;
            $car->type_car_id = $request->type_car;
            $car->brand_car_id = $request->brand_car;
            $car->model_car_id = $request->model_car;
            $car->save();

            $status = true;
            DB::commit();
        } catch (\Throwable $th) {
            $result = $th->getMessage();
            DB::rollBack();
        }if($status){
            return json_encode(['transation' => ['status' => $status], 'message' => 'se edito exitosamente el carro', 'data' => $car]);
        }else{
            return json_encode(['transation' => ['status' => $status], 'message' => 'se presento un error al momento de editar', 'data' => $result]);
        }
    }

    public function getTypeCar()
    {
        return TypeCar::all()->toArray();
    }
    public function getBrandCar()
    {
        return BrandCar::all()->toArray();
    }
    public function getModelCar()
    {
        return ModelCar::all()->toArray();
    }

    public function getCar()
    {
        return Car::with('type_car', 'model_car', 'brand_car')->get()->toArray();
    }

    public function deleteCar($id)
    {
        $Restaurant = Car::where('id',$id)->delete();
        return json_encode(['Se elimino exitosamente']);
    }
    
}
