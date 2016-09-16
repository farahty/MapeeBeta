<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;
use OwenIt\Auditing\AuditingTrait;

class MapPoint extends Model
{
    use Sluggable,AuditingTrait;

    public static function rules(){
        return [
            'title' => 'required',
            'lat' => 'required',
            'long' => 'required',
        ];
    }

    public function author(){
        return $this->belongsTo('App\User', 'user_id', 'id');
    }
    public function icon(){
        return $this->belongsTo('App\Models\MapIcon', 'icon_id', 'id');
    }

    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }
}
