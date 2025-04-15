<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Book extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'author', 'publisher', 'year',
    ];

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'book_category');
    }
}1
