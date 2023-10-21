<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $user = Auth::user();

        return [
            ...parent::share($request),
            'auth' => [
                'user' => fn() => $user?->only('id','name', 'email'),
                'can' => [
                    // 'admin' => $user?->hasPermissionTo('product.view'),
                    // 'user' => $user?->hasPermissionTo('user.view'),
                    // 'role' => $user?->hasPermissionTo('role.view'),
                    // 'permission' => $user?->hasPermissionTo('permission.view'),
                    // 'product' => $user?->hasPermissionTo('product.view'),
                    'product' => fn() => $user?->hasPermissionTo('product.view'),
                    'user' => fn() => $user?->hasPermissionTo('user.view'),
                    'role' => fn() => $user?->hasPermissionTo('role.view'),
                    'permission' => fn() => $user?->hasPermissionTo('permission.view'),
                    'course' => fn() => $user?->hasPermissionTo('product.view'),
                ]
            ],
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
        ];
    }
}
