<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OLT extends Model
{
    protected $fillable = [
        'olt_name',
        'parish_id',
        'town_id',
        'customer_count',
        'business_customer_count',
        'residential_customer_count',
        'resource_id',
        'olt_value',
        'rank',
        'level'
    ];

    public static function boot()
    {
        parent::boot();

        static::saving(function ($olt) {
            // Calculate rank
            if ($olt->customer_count <= 5000) {
                $olt->rank = 1;
            } elseif ($olt->customer_count <= 10000) {
                $olt->rank = 2;
            } elseif ($olt->customer_count <= 15000) {
                $olt->rank = 3;
            } elseif ($olt->customer_count <= 20000) {
                $olt->rank = 4;
            } else {
                $olt->rank = 5;
            }

            // Calculate level
            if ($olt->business_customer_count > 0 && $olt->olt_value > 0) {
                $olt->level = 'High';
            } else {
                $olt->level = 'Low';
            }
        });
    }
}