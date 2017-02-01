var w = window, player;

  // ここはドキュメントにある通り
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  w.onYouTubeIframeAPIReady = function() {
    player = new YT.Player('video', { // 置き換えるHTML要素のid
      height: '450',
      width: '800',
      videoId: 'SlRfwbD2riE',  // 再生したいvideoのid
      playerVars: {
					      rel: 0,
      					showinfo: 0,
                autoplay: 1, // 自動再生するかどうか設定
                loop: 1
            },
      events: {
        // プレイヤーの準備が出来た時に何かしたい場合
        onReady: function() {
        },
        // プレイヤーの状態が変わった時に何かしたい場合
        onStateChange: function(e) {
          // 再生が終わった時に何かしたい場合
          if ( e.data == YT.PlayerState.ENDED ) {
		        //alert("end");
           	e.target.playVideo();
          }
        },
        // エラーが起きた時(埋め込めない動画を指定したときなど)
        onError: function() {
        }
      }
    });
    player.setLoop(true);
  };