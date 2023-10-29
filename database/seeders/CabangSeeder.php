<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CabangSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $cabang = [
            [
                'name' => 'Gatot Subroto',
                'address' => 'Jl. Gatot Subroto No.52-62, Purwoyoso, Kec. Ngaliyan, Kota Semarang, Jawa Tengah 50184',
                'telp' => '081228507229',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Majapahit',
                'address' => 'Jl. Brigjen Sudiarto No.599, Pedurungan Kidul, Kec. Pedurungan, Kota Semarang, Jawa Tengah 50192',
                'telp' => null,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Kedung Mundu',
                'address' => 'Jl. Kedungmundu Raya, Sambiroto, Tembalang, Ruko Graha Wahid Nomor B-2, Sambiroto, Kec. Tembalang, Kota Semarang, Jawa Tengah 50276',
                'telp' => null,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Kartini',
                'address' => 'Jl. RA. Kartini No.9, Karangturi, Kec. Semarang Tim., Kota Semarang, Jawa Tengah 50124',
                'telp' => '081227111799',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Wolter Monginsidi',
                'address' => 'Jl. Wolter Monginsidi, Pedurungan Tengah, Kec. Pedurungan, Kota Semarang, Jawa Tengah',
                'telp' => null,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Sawah Besar',
                'address' => 'Jl. Hasanudin No.17, Panggung Lor, Kec. Semarang Utara, Kota Semarang, Jawa Tengah 50177',
                'telp' => null,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Hasanudin',
                'address' => 'Jl. Gatot Subroto No.52-62, Purwoyoso, Kec. Ngaliyan, Kota Semarang, Jawa Tengah 50184',
                'telp' => '082162853419',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ];

        foreach($cabang as $c){
            DB::table('cabangs')->insert($c);
        }
    }
}
