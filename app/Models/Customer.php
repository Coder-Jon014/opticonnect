<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Town;
use App\Models\CustomerType;

class Customer extends Model
{
    use HasFactory;

    protected $primaryKey = 'customer_id';

    protected $fillable = [
        'customer_name',
        'telephone',
        'town_id',
        'customer_type_id',
    ];

    public function town()
    {
        return $this->belongsTo(Town::class, 'town_id');
    }

    public function customerType()
    {
        return $this->belongsTo(CustomerType::class, 'customer_type_id');
    }

    public function olt()
    {
        return $this->belongsTo(OLT::class, 'town_id', 'town_id');
    }
}