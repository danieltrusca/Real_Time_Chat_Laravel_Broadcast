<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Events\ChatEvent;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class ChatController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function chat(){
        return view('chat');
        // return 'dsgdgd';
    }

    // public function send(Request $request){
    //     $user = User::find(Auth::id());
    //     event(new ChatEvent($request->message, $user));
    // }

    public function send(){
        $message='hiiiii';
        $user = User::find(Auth::id());
        event(new ChatEvent($message, $user));
    }
}