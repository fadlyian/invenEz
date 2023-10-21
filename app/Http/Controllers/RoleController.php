<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = Auth::user();
        return Inertia::render('Roles/Index',[
            'can' => [
                'edit' => $user->hasPermissionTo('role.edit'),
                'delete' => $user->hasPermissionTo('role.delete'),
            ],
            'roles' => Role::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Roles/Create',[
            'permissions' => Permission::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // return $request;
        try {
            $request->validate([
                'name' => 'required',
            ]);

            $role = new Role();
            $role->name = $request->name;
            for($i=0; $i<count($request->permission); $i++){
                $role->givePermissionTo($request->permission[$i]);
            }

            $role->save();

            return to_route('role.view');

        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        // return Role::findOrFail($id)
        $role = Role::findOrFail($id);
        // return $role->permissions->pluck('name');
        return Inertia::render('Roles/Edit', [
            'roles' => $role,
            'permissions' => Permission::all(),
            'permissionInRole' => $role->permissions->pluck('name'),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required',
        ]);

        $role = Role::findOrFail($id);
        $role->name = $request->name;
        $role->syncPermissions($request->permission);
        $role->save();

        return to_route('role.view');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Role::findOrFail($id)->delete();

        return to_route('role.view');
    }
}
