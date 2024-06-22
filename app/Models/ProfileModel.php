<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProfileModel extends Model
{
    use HasFactory;

    const CREATED_AT = 'ppr_createdAt';
    const UPDATED_AT = 'ppr_updatedAt';

    protected $primaryKey = 'ppr_id';
    protected $table = 'profile';
    protected $fillable = [
        'pa_id', 'ppr_name', 'ppr_phoneNumber'
    ];
    protected $hidden = [
        'ppr_createdAt', 'ppr_updatedAt'
    ];
}
