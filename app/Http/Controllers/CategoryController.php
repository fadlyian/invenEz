<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        return Inertia::render('Categories/Category',[
            'can' => [
                'edit' => $user->hasPermissionTo('category.edit'),
                'delete' => $user->hasPermissionTo('category.delete'),
            ],
            'categories' => Category::all(),
        ]);
    }

    public function create()
    {
        $user = Auth::user();
        return Inertia::render('Categories/CategoryEdit',[
            'id' => null,
            'can' => [
                'edit' => $user->hasPermissionTo('category.edit'),
                'delete' => $user->hasPermissionTo('category.delete'),
            ],
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
        ]);

        Category::create([
            'name' => $request->name,
        ]);

        return to_route('category.view');
    }

    public function edit($id)
    {
        $user = Auth::user();
        return Inertia::render('Categories/CategoryEdit',[
            'id' => $id,
            'can' => [
                'edit' => $user->hasPermissionTo('category.edit'),
                'delete' => $user->hasPermissionTo('category.delete'),
            ],
            'category' => Category::find($id),
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
        ]);

        Category::find($id)->update($request->all());

        return to_route('category.view');
    }

    public function destroy($id)
    {
        Category::findOrFail($id)->delete();

        return to_route('category.view');
    }
}
