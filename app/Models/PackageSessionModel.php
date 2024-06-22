<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PackageSessionModel extends Model
{
    use HasFactory;

    const CREATED_AT = 'pps_createdAt';
    const UPDATED_AT = 'pps_updatedAt';

    protected $primaryKey = 'pps_id';
    protected $table = 'package__session';
    protected $fillable = [
        'ppc_id', 'pps_code', 'pps_name', 'pps_description'
    ];
    protected $hidden = [
        'pps_createdAt', 'pps_updatedAt',
    ];

    /**
     * Relation with table package level
     */
    public function packageLevel()
    {
        return $this->hasMany(PackageLevelModel::class, 'ppl_id');
    }
}
