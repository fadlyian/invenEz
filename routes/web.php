<?php

use App\Http\Controllers\ProfileController;
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

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

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

    Route::prefix('users')->group(function(){
        Route::get('/', [UserController::class, 'index'])->middleware(['permission:product.view'])->name('user.view');
        Route::get('/create', [UserController::class, 'create'])->middleware(['permission:product.view'])->name('user.create');
        Route::post('/store', [UserController::class, 'store'])->middleware(['permission:product.view'])->name('user.store');
    });
});

require __DIR__.'/auth.php';
