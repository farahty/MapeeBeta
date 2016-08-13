<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    public static function rules(){
        return [
            'path' => 'required',
            'title' => 'required',
        ];
    }

    public function author(){
        return $this->belongsTo('App\User', 'user_id', 'id');
    }
}
