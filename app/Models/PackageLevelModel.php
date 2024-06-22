<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PackageLevelModel extends Model
{
    use HasFactory;

    const CREATED_AT = 'ppl_createdAt';
    const UPDATED_AT = 'ppl_updatedAt';

    protected $primaryKey = 'ppl_id';
    protected $table = 'package__level';
    protected $fillable = [
        'pps_id', 'ppl_code', 'ppl_name', 'ppl_description', 'ppl_photoPath', 'ppl_price'
    ];
    protected $hidden = [
        'ppl_createdAt', 'ppl_updatedAt',
    ];
}
