<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BarangMasuk extends Model
{
    use HasFactory;

    protected $table = 'barang_masuks';

    public $timestamps = false;

    protected $fillable = [
        'kode',
        'barang_id',
        'supplier_id',
        'user_id',
        'price',
        'quantity',
        'totalPrice',
        'description',
        'tanggal',
    ];
}
