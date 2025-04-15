<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Category extends Model
{
    use HasFactory;

    protected $table = 'categories';
    protected $primaryKey = 'id';
    protected $fillable = [
        'id',
        'name',
        'description',
    ];

    public function books()
    {
        return $this->belongsToMany(Books::class, 'book_category');
    }
}1
