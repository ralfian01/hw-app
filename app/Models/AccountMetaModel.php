<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AccountMetaModel extends Model
{
    use HasFactory;

    const CREATED_AT = 'pam_createdAt';

    protected $primaryKey = 'pam_id';
    protected $table = 'account__meta';
    protected $fillable = [
        'pam_code', 'pam_value', 'pa_id', 'pam_expiredAt',
    ];
    protected $hidden = [
        'pam_createdAt'
    ];
}
