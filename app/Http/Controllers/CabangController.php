<?php

namespace App\Http\Controllers;

use App\Models\Cabang;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CabangController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        return Inertia::render('Cabangs/Cabang',[
            'can' => [
                'edit' => $user->hasPermissionTo('cabang.edit'),
                'delete' => $user->hasPermissionTo('cabang.delete'),
            ],
            'cabangs' => Cabang::all(),
        ]);
    }

    public function create()
    {
        $user = Auth::user();
        return Inertia::render('Cabangs/CabangEdit',[
            'id' => null,
            'can' => [
                'edit' => $user->hasPermissionTo('cabang.edit'),
                'delete' => $user->hasPermissionTo('cabang.delete'),
            ],
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'address' => 'required',
            'telp' => 'required|numeric',
        ]);

        Cabang::create($request->all());

        return to_route('cabang.view');
    }

    public function edit($id)
    {
        $user = Auth::user();
        return Inertia::render('Cabangs/CabangEdit',[
            'id' => $id,
            'can' => [
                'edit' => $user->hasPermissionTo('cabang.edit'),
                'delete' => $user->hasPermissionTo('cabang.delete'),
            ],
            'cabang' => Cabang::find($id),
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
            'address' => 'required',
            'telp' => 'required|numeric',
        ]);

        Cabang::find($id)->update($request->all());

        return to_route('cabang.view');
    }

    public function destroy($id)
    {
        Cabang::findOrFail($id)->delete();

        return to_route('cabang.view');
    }
}
