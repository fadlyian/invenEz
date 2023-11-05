<?php

namespace App\Http\Controllers;

use App\Models\Barang;
use App\Models\BarangMasuk;
use App\Models\Supplier;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class BarangMasukController extends Controller
{

    public function index()
    {
        return Inertia::render('BarangMasuk/index');
    }

    public function create()
    {
        return Inertia::render('BarangMasuk/BarangMasukCreate',[
            'can' => [
                'create' => true,
            ],
            'barangs' => Barang::all(),
            'suppliers' => Supplier::all(),
        ]);
    }

    public function store(Request $request)
    {
        // return $request->all();
        try{
            $request->validate([
                'barang' => 'required',
                'supplier' => 'required',
                'price' => 'required',
                'quantity' => 'required',
                'totalPrice' => 'required',
                'description' => 'nullable'
            ]);

            date_default_timezone_set("Asia/Jakarta");

             // Generate kode dengan format "BA" + tanggal dan waktu
            $kode = "BA" . now()->format('YmdHis'); // Format tanggal dan waktu sesuai kebutuhan Anda

            BarangMasuk::create([
                'kode' => $kode,
                'barang_id' => $request->barang,
                'supplier_id' => $request->supplier,
                'user_id' => Auth::user()->id,
                'price' => $request->price,
                'quantity' => $request->quantity,
                'totalPrice' => $request->totalPrice,
                'description' => $request->description,
                'tanggal' => now()->format("Y-m-d h:i:sa"),
            ]);

            return to_route('dashboard');
        }catch(Exception $e){
            return $e->getMessage();
        }
    }
}
