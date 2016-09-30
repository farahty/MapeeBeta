<?php

namespace App\Http\Controllers;

use Dingo\Api\Exception\ValidationHttpException;
use Dingo\Api\Http\Request;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /*Fixes dingo/api form request validation https://github.com/dingo/api/wiki/Errors-And-Error-Responses#form-requests*/
    public function validate(Request $request, array $rules, array $messages = [], array $customAttributes = [])
    {
        $validator = $this->getValidationFactory()->make($request->all(), $rules, $messages, $customAttributes);

        if ($validator->fails()) {
            throw new ValidationHttpException($validator->errors());
        }
    }
    public function logs($obj){
        $logs = array();
        foreach($obj as $log){
            foreach($log->new_value as $key => $value){
                //$data = $log;
                $data['id'] = $log['id'];
                $data['type'] = $log['type'];
                $data['ip'] = $log['ip'];
                $data['elapsed_time'] = $log['elapsed_time'];
                $data['user'] = $log['user'];
                $data['created_at'] = $log['created_at'];
                $data['updated_at'] = $log['updated_at'];
                $data['new'] = $value;
                $data['field'] = $key;
                $data['old'] = $log['old_value'][$key];
                array_push($logs,$data);
            }
        }
        return $logs;
    }
}
