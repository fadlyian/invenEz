<?php

namespace App\Http\Controllers;

use App\Models\Barang;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class BarangController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        return Inertia::render('Barangs/Barang',[
            'can' => [
                'edit' => $user->hasPermissionTo('barang.edit'),
                'delete' => $user->hasPermissionTo('barang.delete'),
            ],
            'barangs' => Barang::all(),
        ]);
    }

    public function create()
    {
        $user = Auth::user();
        return Inertia::render('Barangs/BarangEdit',[
            'id' => null,
            'can' => [
                'edit' => $user->hasPermissionTo('barang.edit'),
                'delete' => $user->hasPermissionTo('barang.delete'),
            ],
            'categories' => Category::all(),
        ]);
    }

    public function store(Request $request)
    {
        // return $request->all();
        $request->validate([
            'name' => 'required',
            'category' => 'required',
            'price' => 'required|numeric',
            'satuan' => 'required',
            'stok' => 'required|numeric',
        ]);

        Barang::create([
            'name' => $request->name,
            'category_id' => $request->category,
            'price' => $request->price,
            'satuan' => $request->satuan,
            'stok' => $request->stok,
        ]);

        return to_route('barang.view');
    }

    public function edit($id)
    {
        $user = Auth::user();
        return Inertia::render('Barangs/BarangEdit',[
            'id' => $id,
            'can' => [
                'edit' => $user->hasPermissionTo('barang.edit'),
                'delete' => $user->hasPermissionTo('barang.delete'),
            ],
            'categories' => Category::all(),
            'barangs' => Barang::find($id),
        ]);
    }

    public function update(Request $request, $id)
    {
        // return $request->all();
        $request->validate([
            'name' => 'required',
            'category' => 'required',
            'price' => 'required|numeric',
            'satuan' => 'required',
            'stok' => 'required|numeric',
        ]);

        Barang::find($id)->update([
            'name' => $request->name,
            'category_id' => $request->category,
            'price' => $request->price,
            'satuan' => $request->satuan,
            'stok' => $request->stok,
        ]);

        return to_route('barang.view');
    }

    public function destroy($id)
    {
        Barang::findOrFail($id)->delete();

        return to_route('barang.view');
    }
}
