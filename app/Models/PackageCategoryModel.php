<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @method static mixed getWithAll() Get package with all data
 * @method mixed getWithAll() Get package with all data
 */
class PackageCategoryModel extends Model
{
    use HasFactory;

    const CREATED_AT = 'ppc_createdAt';
    const UPDATED_AT = 'ppc_updatedAt';

    protected $primaryKey = 'ppc_id';
    protected $table = 'package__category';
    protected $fillable = [
        'ppc_code', 'ppc_name', 'ppc_description'
    ];
    protected $hidden = [
        'ppc_createdAt', 'ppc_updatedAt',
    ];

    /**
     * Relation with table package session
     */
    public function packageSession()
    {
        return $this->hasMany(PackageSessionModel::class, 'pps_id');
    }

    /**
     * @return mixed
     */
    protected function scopeGetWithAll(Builder $query)
    {
        return  $query
            ->with(['packageSession.packageLevel'])
            ->addSelect(['pps_id', 'ppl_id'])
            ->get();
    }
}
