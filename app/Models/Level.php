<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;
use OwenIt\Auditing\AuditingTrait;

class Level extends Model
{
    use Sluggable,AuditingTrait;

    public static function rules(){
        return [
            'level_start' => 'required|numeric|max:21|min:0',
            'level_end' => 'required|numeric|max:21|min:0',
            'title' => 'required',
        ];
    }

    public function author(){
        return $this->belongsTo('App\User', 'user_id', 'id');
    }

    public function points(){
        return $this->hasMany('App\Models\MapPoint', 'icon_level_id', 'id');
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
