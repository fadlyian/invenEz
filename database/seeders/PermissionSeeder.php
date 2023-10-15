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

        // create roles and assign existing permissions
        $role1 = Role::create(['name' => 'crew']);
        $role1->givePermissionTo('product.view');

        $role2 = Role::create(['name' => 'admin']);
        $role2->givePermissionTo('product.view');
        $role2->givePermissionTo('product.edit');
        $role2->givePermissionTo('product.delete');

        $role3 = Role::create(['name' => 'Super-Admin']);
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
            'name' => 'Super-Admin',
            'email' => 'superadmin@gmail.com',
            'password' => Hash::make('password'),
        ]);
        $user->assignRole($role3);
    }
}
