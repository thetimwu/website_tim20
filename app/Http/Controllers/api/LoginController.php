<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Contracts\Session\Session;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $credential = $request->only('email', 'password');

        if (Auth::attempt($credential)) {
            $accessToken = Auth::user()->createToken('access_token')->accessToken;
            return response()->json([
                'message' => 'Logged in',
                'user' => Auth::user(),
                'accessToken' => $accessToken
            ], 200);
        } else {
            return response()->json([
                'message' => 'Invalid credentials'
            ], 401);
        }
    }

    public function logout()
    {
        dd(Auth::user());
        if (Auth::check()) {
            Auth::user()->AauthAcessToken()->delete();
            return response()->json([
                'message' => 'Successfully logged out'
            ], 200);
        } else {
            return response()->json([
                'message' => 'cannot find user'
            ]);
        };
    }
}
