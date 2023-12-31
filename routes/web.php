<?php

use App\Http\Controllers\BarangController;
use App\Http\Controllers\BarangMasukController;
use App\Http\Controllers\CabangController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\SupplierController;
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

    // SUPPLIER
    Route::prefix('suppliers')->group(function(){
        Route::get('/', [SupplierController::class, 'index'])->middleware('permission:supplier.view')->name('supplier.view');
        Route::get('/create', [SupplierController::class, 'create'])->middleware('permission:supplier.edit')->name('supplier.create');
        Route::post('/store', [SupplierController::class, 'store'])->middleware('permission:supplier.edit')->name('supplier.store');
        Route::get('/{id}/edit', [SupplierController::class, 'edit'])->middleware('permission:supplier.edit')->name('supplier.edit');
        Route::patch('/{id}', [SupplierController::class, 'update'])->middleware('permission:supplier.edit')->name('supplier.update');
        Route::delete('/delete/{id}', [SupplierController::class, 'destroy'])->middleware('permission:supplier.delete')->name('supplier.destroy');
    });

    // BARANG
    Route::prefix('barangs')->group(function(){
        Route::get('/', [BarangController::class, 'index'])->middleware('permission:barang.view')->name('barang.view');
        Route::get('/create', [BarangController::class, 'create'])->middleware('permission:barang.edit')->name('barang.create');
        Route::post('/store', [BarangController::class, 'store'])->middleware('permission:barang.edit')->name('barang.store');
        Route::get('/{id}/edit', [BarangController::class, 'edit'])->middleware('permission:barang.edit')->name('barang.edit');
        Route::patch('/{id}', [BarangController::class, 'update'])->middleware('permission:barang.edit')->name('barang.update');
        Route::delete('/delete/{id}', [BarangController::class, 'destroy'])->middleware('permission:barang.delete')->name('barang.destroy');
    });

    // CATEGORY
    Route::prefix('categories')->group(function(){
        Route::get('/', [CategoryController::class, 'index'])->middleware('permission:category.view')->name('category.view');
        Route::get('/create', [CategoryController::class, 'create'])->middleware('permission:category.edit')->name('category.create');
        Route::post('/store', [CategoryController::class, 'store'])->middleware('permission:category.edit')->name('category.store');
        Route::get('/{id}/edit', [CategoryController::class, 'edit'])->middleware('permission:category.edit')->name('category.edit');
        Route::patch('/{id}', [CategoryController::class, 'update'])->middleware('permission:category.edit')->name('category.update');
        Route::delete('/delete/{id}', [CategoryController::class, 'destroy'])->middleware('permission:category.delete')->name('category.destroy');
    });

    // CABANG
    Route::prefix('cabangs')->group(function(){
        Route::get('/', [CabangController::class, 'index'])->middleware('permission:cabang.view')->name('cabang.view');
        Route::get('/create', [CabangController::class, 'create'])->middleware('permission:cabang.edit')->name('cabang.create');
        Route::post('/store', [CabangController::class, 'store'])->middleware('permission:cabang.edit')->name('cabang.store');
        Route::get('/{id}/edit', [CabangController::class, 'edit'])->middleware('permission:cabang.edit')->name('cabang.edit');
        Route::patch('/{id}', [CabangController::class, 'update'])->middleware('permission:cabang.edit')->name('cabang.update');
        Route::delete('/delete/{id}', [CabangController::class, 'destroy'])->middleware('permission:cabang.delete')->name('cabang.destroy');
    });

    // BARANG MASUk
    Route::prefix('barangMasuk')->group(function(){
        Route::get('/', [BarangMasukController::class, 'index'])->name('');
        Route::get('/create', [BarangMasukController::class, 'create'])->name('barangMasuk.create');
        Route::post('/store', [BarangMasukController::class, 'store'])->name('barangMasuk.store');
    });
});

require __DIR__.'/auth.php';
