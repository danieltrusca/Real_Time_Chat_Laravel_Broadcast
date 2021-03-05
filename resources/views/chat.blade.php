<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <title>Document</title>
    <style>
		.list-group{
			overflow-y: scroll;
			height: 200px;
		}
	</style>
</head>
<body>
    <div class="container">
        <div class="row" id="app">
            <div class="offset-4 col-4 offset-sm-1 col-sm-10">
                <li class="list-group-item active">Chat Room <span class="badge  badge-pill badge-danger">10 users</span> </li>
                <ul class="list-group">
                    <message v-for="message, index in chat.messages" :key="index" :message="message"></message>

                </ul>
                <input type="text" class="form-control" placeholder="Type your message here..."
                    v-model="message" @keyup.enter="send" />
            </div>


        </div>
    </div>
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
