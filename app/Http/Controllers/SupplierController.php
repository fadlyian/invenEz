<?php

namespace App\Http\Controllers;

use App\Models\Supplier;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SupplierController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        return Inertia::render('Suppliers/Supplier',[
            'can' => [
                'edit' => $user->hasPermissionTo('supplier.edit'),
                'delete' => $user->hasPermissionTo('supplier.delete'),
            ],
            'suppliers' => Supplier::all(),
        ]);
    }

    public function create()
    {
        $user = Auth::user();
        return Inertia::render('Suppliers/SupplierEdit',[
            'id' => null,
            'can' => [
                'edit' => $user->hasPermissionTo('supplier.edit'),
                'delete' => $user->hasPermissionTo('supplier.delete'),
            ],
            // 'supplier' => Supplier::find(1),
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'address' => 'required',
            'telp' => 'required|numeric',
        ]);

        Supplier::create([
            'name' => $request->name,
            'address' => $request->address,
            'telp' => $request->telp,
        ]);

        return to_route('supplier.view');
    }

    public function edit($id)
    {
        $user = Auth::user();
        return Inertia::render('Suppliers/SupplierEdit',[
            'id' => $id,
            'can' => [
                'edit' => $user->hasPermissionTo('supplier.edit'),
                'delete' => $user->hasPermissionTo('supplier.delete'),
            ],
            'supplier' => Supplier::find($id),
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
            'address' => 'required',
            'telp' => 'required|numeric',
        ]);

        Supplier::find($id)->update($request->all());

        return to_route('supplier.view');
    }

    public function destroy($id)
    {
        Supplier::find($id)->delete();

        return to_route('supplier.view');
    }
}
