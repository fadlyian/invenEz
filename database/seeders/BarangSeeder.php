<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BarangSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $barangs = [
            [
                'name' => 'bebek',
                'category_id' => 1,
                'price' => 29000,
                'satuan' => 'ekor',
                'image' => null,
                'stok' => 30,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'ayam kampung',
                'category_id' => 1,
                'price' => 24000,
                'satuan' => 'ekor',
                'image' => null,
                'stok' => 30,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'ayam pejantan',
                'category_id' => 1,
                'price' => 18000,
                'satuan' => 'ekor',
                'image' => null,
                'stok' => 30,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'terong',
                'category_id' => 2,
                'price' => 5000,
                'satuan' => 'biji',
                'image' => null,
                'stok' => 30,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'garam',
                'category_id' => 3,
                'price' => 4000,
                'satuan' => 'plastik',
                'image' => null,
                'stok' => 30,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'merica',
                'category_id' => 3,
                'price' => 3000,
                'satuan' => 'plastik',
                'image' => null,
                'stok' => 30,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'teh',
                'category_id' => 4,
                'price' => 5000,
                'satuan' => 'plastik',
                'image' => null,
                'stok' => 30,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'jeruk',
                'category_id' => 4,
                'price' => 9000,
                'satuan' => 'biji',
                'image' => null,
                'stok' => 30,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ];

        foreach($barangs as $barang){
            // DB::table('barangs')->insert([
            //     'name' => $barang[$i],
            //     'category_id' => $barang[$i]->category_id,
            //     'price' => $barang[$i]->price,
            //     'satuan' => $barang[$i]->satuan,
            //     'image' => $barang[$i]->image,
            //     'stok' => $barang[$i]->stok,
            // ]);
            DB::table('barangs')->insert($barang);
        }

    }
}

// $barang = [
//     // Lauk
//     'bebek',
//     'ayam kampung',
//     'ayam pejantan',
//     'burung malon',
//     'menthok',
//     'iga sapi',
//     'ati ampela',
//     'kepala bebek',
//     'kepala ayam kampung',
//     'kepala ayam pejantan',
//     'tempe',
//     'tahu',
//     'telur',
//     'lele',
//     'beras',
//     //Sayuran
//     'terong',
//     'kangkung',
//     'tauge',
//     'pete',
//     'cabe',
//     // bumbu
//     'merica',
//     'garam',
//     'kunyit',

//     //MINUMAN
//     'air',
//     'gula',
//     'teh',
//     'jeruk',
//     'kopi',
//     'es batu',
// ];
