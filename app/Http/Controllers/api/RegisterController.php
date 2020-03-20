<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        $validatedUser = $request->validate([
            'name' => 'required|min:3',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed'
        ]);

        if ($validatedUser->fails()) {
            return response()->json([
                'error' => $validatedUser->errors()
            ], 401);
        }

        $validatedUser['password'] = Hash::make($request->password);

        $user = User::create($validatedUser);

        $accessToken = $user->createToken('access_token')->accessToken;

        // $user->save();

        return response()->json([
            'message' => 'Successfully register user',
            'user' => $user,
            'accessToken' => $accessToken
        ], 200);
    }
}
