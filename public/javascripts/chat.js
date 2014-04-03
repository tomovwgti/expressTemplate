/**
 * Created by tomo on 2014/04/03.
 */
var socket = io.connect();

// WebSocketでの接続
socket.on('connect', function(msg) {
    console.log("connect");
    $('#type').html('接続方式::' + socket.socket.transport.name);
});

// メッセージを受信
socket.on('message', function(msg) {
    // メッセージを画面に表示する
    $('#receiveMsg').prepend(msg.value + '<br>');
});

$(function() {
    $('#send').click(function() {
        var msg = $('#command').val();
        // メッセージを送信する
        socket.emit('message', { value: msg });
        $('#command').val('');
    });

    $('#button1').click(function() {
        // メッセージを送信する
        socket.emit('message', { value: 'BUTTON1' });
    });
    $('#button2').click(function() {
        // メッセージを送信する
        socket.emit('message', { value: 'BUTTON2' });
    });
    $('#button3').click(function() {
        // メッセージを送信する
        socket.emit('message', { value: 'BUTTON3' });
    });
});
