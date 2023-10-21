<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;
use Illuminate\Support\Facades\Hash;


class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Reset cached roles and permissions
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        // create permissions
        Permission::create(['name' => 'product.view']);
        Permission::create(['name' => 'product.edit']);
        Permission::create(['name' => 'product.delete']);
        Permission::create(['name' => 'product.publish']);
        Permission::create(['name' => 'product.unpublish']);

        Permission::create(['name' => 'user.view']);
        Permission::create(['name' => 'user.edit']);
        Permission::create(['name' => 'user.delete']);

        Permission::create(['name' => 'role.view']);
        Permission::create(['name' => 'role.edit']);
        Permission::create(['name' => 'role.delete']);

        Permission::create(['name' => 'permission.view']);
        Permission::create(['name' => 'permission.edit']);
        Permission::create(['name' => 'permission.delete']);

        // create roles and assign existing permissions
        $role1 = Role::create(['name' => 'crew']);
        $role1->givePermissionTo('product.view');

        $role2 = Role::create(['name' => 'admin']);
        $role2->givePermissionTo('product.view');
        $role2->givePermissionTo('product.edit');
        $role2->givePermissionTo('product.delete');
        $role2->givePermissionTo('user.view');

        $role3 = Role::create(['name' => 'super-admin']);
        $role3->givePermissionTo(Permission::all());
        // gets all permissions via Gate::before rule; see AuthServiceProvider

        // create demo users
        $user = \App\Models\User::factory()->create([
            'name' => 'Crew',
            'email' => 'crew@gmail.com',
            'password' => Hash::make('password'),
        ]);
        $user->assignRole($role1);

        $user = \App\Models\User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('password'),
        ]);
        $user->assignRole($role2);

        $user = \App\Models\User::factory()->create([
            'name' => 'super-admin',
            'email' => 'superadmin@gmail.com',
            'password' => Hash::make('password'),
        ]);
        $user->assignRole($role3);
    }
}
