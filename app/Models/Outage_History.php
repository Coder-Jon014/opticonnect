<?php

// app/Models/OutageHistory.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\OLT;
use App\Models\Team;

class OutageHistory extends Model
{
    use HasFactory;

    protected $fillable = [
        'olt_id',
        'team_id',
        'start_time',
        'end_time',
        'duration',
        'resolution_details',
    ];

    // Define the relationship with OLT
    public function olt()
    {
        return $this->belongsTo(OLT::class);
    }

    // Define the relationship with Team
    public function team()
    {
        return $this->belongsTo(Team::class);
    }
}
