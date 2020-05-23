<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class OauthAccessToken extends Model
{
    protected $table = 'oauth_access_tokens';

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
