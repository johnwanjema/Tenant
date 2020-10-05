<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tenant extends Model
{
    use HasFactory;

    protected $fillable=[
        'firstName','lastName','phoneNumber','email','unitId'
    ];

    public function unit(){
        return $this->belongsTo(Unit::class, 'unitId');
    }
}
