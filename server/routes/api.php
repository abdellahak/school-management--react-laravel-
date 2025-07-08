<?php

use App\Http\Controllers\auth\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::controller(AuthController::class)->group(function(){
    Route::post('/register', 'register');
    Route::post('/login', 'login');
});

Route::middleware(['auth:sanctum'])->group(function(){

    // authentication
    Route::controller(AuthController::class)->group(function(){
        Route::get("/logout", "logout");
        Route::get("/user", "user");
    });
});
