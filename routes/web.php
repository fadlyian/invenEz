<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::get('/dashboard', function () {
    // return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/dashboard', [DashboardController::class, 'dashboard'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    //profile
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    //admin
    Route::get('/admin', function(){
        return 'halaman admin';
    })->name('admin');

    Route::prefix('product')->group(function(){
        Route::get('/', function(){
            return "ini halaman product";
        });
        Route::get('/edit', function(){
            return "ini halaman edit product";
        })->middleware(['permission:edit.products']);
        Route::get('/delete', function(){
            return "ini halaman delete product";
        })->middleware(['permission:publish']);
    });

    // USER
    Route::prefix('users')->group(function(){
        Route::get('/', [UserController::class, 'index'])->name('user.view');
        Route::get('/create', [UserController::class, 'create'])->name('user.create');
        Route::post('/store', [UserController::class, 'store'])->name('user.store');
        Route::get('/{id}/edit', [UserController::class, 'edit'])->name('user.edit');
        Route::put('/{edit}', [UserController::class, 'update'])->name('user.update');
        Route::delete('/{id}', [UserController::class, 'destroy'])->name('user.destroy');
        // Route::delete('/{id}', [UserController::class, 'destroy'])->name('user.destroy');
    })->middleware(['permission:user.view']);

    // ROLE
    Route::prefix('roles')->group(function(){
        Route::get('/', [RoleController::class, 'index'])->name('role.view');
        Route::get('/create', [RoleController::class, 'create'])->name('role.create');
        Route::post('/store', [RoleController::class, 'store'])->name('role.store');
        Route::get('/{id}/edit', [RoleController::class, 'edit'])->name('role.edit');
        Route::put('/{edit}', [RoleController::class, 'update'])->name('role.update');
        Route::delete('/{id}', [RoleController::class, 'destroy'])->name('role.destroy');
    })->middleware('permission:role.view');

    // PERMISSION
    Route::prefix('permissions')->group(function(){
        Route::get('/', [PermissionController::class, 'index'])->name('permission.view');
        Route::get('/create', [PermissionController::class, 'create'])->name('permission.create');
        Route::post('/store', [PermissionController::class, 'store'])->name('permission.store');
        Route::get('/{id}/edit', [PermissionController::class, 'edit'])->name('permission.edit');
        Route::put('/{edit}', [PermissionController::class, 'update'])->name('permission.update');
        Route::delete('/{id}', [PermissionController::class, 'destroy'])->name('permission.destroy');
    })->middleware('permission:permission.view');
});

require __DIR__.'/auth.php';
