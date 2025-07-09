<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Prefetch aset dengan Vite
        Vite::prefetch(concurrency: 3);

        // Share auth data dan permissions ke semua halaman Inertia
        Inertia::share('auth', function () {
            $user = Auth::user();

            return [
                'user' => $user,
                'permissions' => $user?->getPermissionNames()->toArray() ?? [],
                'roles' => $user?->getRoleNames()->toArray() ?? [],
            ];
        });
    }
}
