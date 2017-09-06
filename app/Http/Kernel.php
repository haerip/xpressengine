<?php namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{

    /**
     * The bootstrap classes for the application.
     *
     * @var array
     */
    protected $bootstrappers = [
        'Illuminate\Foundation\Bootstrap\DetectEnvironment',
        'App\Bootstrappers\LoadConfiguration',
        'Illuminate\Foundation\Bootstrap\ConfigureLogging',
        'Illuminate\Foundation\Bootstrap\HandleExceptions',
        'Illuminate\Foundation\Bootstrap\RegisterFacades',
        'Illuminate\Foundation\Bootstrap\RegisterProviders',
        'Illuminate\Foundation\Bootstrap\BootProviders',
    ];

    /**
     * The application's global HTTP middleware stack.
     *
     * @var array
     */
    protected $middleware = [
        \Illuminate\Foundation\Http\Middleware\CheckForMaintenanceMode::class,
        \App\Http\Middleware\EncryptCookies::class,
        \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
        \Illuminate\Session\Middleware\StartSession::class,
        \Illuminate\View\Middleware\ShareErrorsFromSession::class,
        //\App\Http\Middleware\VerifyCsrfToken::class,
        \App\Http\Middleware\ExceptAppendableVerifyCsrfToken::class,
        \App\Http\Middleware\LangPreprocessor::class,
        \App\Http\Middleware\Purifying::class,
        \App\Http\Middleware\FreezeSEO::class,
        \App\Http\Middleware\LogMiddleware::class,

    ];

    /**
     * The application's route middleware.
     *
     * @var array
     */
    protected $routeMiddleware = [
        'auth' => \App\Http\Middleware\Authenticate::class,
        'auth.basic' => \Illuminate\Auth\Middleware\AuthenticateWithBasicAuth::class,
        'guest' => \App\Http\Middleware\RedirectIfAuthenticated::class,
        'settings' => \Xpressengine\Settings\SettingsMiddleware::class,
        'access' => \Xpressengine\Routing\AccessMiddleware::class
    ];

    /**
     * Bootstrap the application for artisan commands.
     *
     * @return void
     */
    public function bootstrap()
    {
        if ($this->isSafeMode() === true) {
            $this->resetForSafeMode();
        }

        if ($this->isInstalled() === false) {
            $this->resetForInstall();
        }


        parent::bootstrap();
    }

    /**
     * is safe mode
     *
     * @return bool
     */
    protected function isSafeMode()
    {
        $isSafe = false;

        $request = app('request');
        if ($request->segment(1) == '__safe_mode') {
            $isSafe = true;
        }

        return $isSafe;
    }

    /**
     * Reset for safe mode
     *
     * @return void
     */
    protected function resetForSafeMode()
    {
        $this->middleware = [
            \Illuminate\Foundation\Http\Middleware\CheckForMaintenanceMode::class,
            \App\Http\Middleware\EncryptCookies::class,
            \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
            \Illuminate\Session\Middleware\StartSession::class,
            \Illuminate\View\Middleware\ShareErrorsFromSession::class,
            \App\Http\Middleware\ExceptAppendableVerifyCsrfToken::class,
        ];

        $this->resetProviders([
            \App\Providers\SafeModeServiceProvider::class,
        ]);
    }

    /**
     * Is installed
     *
     * @return bool
     */
    protected function isInstalled()
    {
        return file_exists($this->app->storagePath() . '/app/installed');
    }

    /**
     * Reset for install
     *
     * @return void
     */
    protected function resetForInstall()
    {
        $this->middleware = [
            \Illuminate\Foundation\Http\Middleware\CheckForMaintenanceMode::class,
            \App\Http\Middleware\EncryptCookies::class,
            \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
            \Illuminate\Session\Middleware\StartSession::class,
            \Illuminate\View\Middleware\ShareErrorsFromSession::class,
            \App\Http\Middleware\ExceptAppendableVerifyCsrfToken::class,
        ];

        $this->resetProviders([
            \App\Providers\InstallServiceProvider::class
        ]);
    }

    /**
     * Define for providers of framework.
     *
     * @return void
     */
    protected function resetProviders(array $customs = [])
    {
        $this->app['events']->listen('bootstrapped: App\Bootstrappers\LoadConfiguration', function ($app) use ($customs) {
            $config = $app['config'];

            $providers = $config['app.providers'];
            $providers = array_filter($providers, function ($p) {
                return substr($p, 0, strlen('Illuminate')) == 'Illuminate';
            });

            foreach ($customs as $custom) {
                $providers[] = $custom;
            }

            $config->set('app.providers', $providers);
        });
    }
}
