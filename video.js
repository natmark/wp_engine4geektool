var w = window, player;
// 再生したいyoutubeの動画id
var vid = 'SlRfwbD2riE';

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

w.onYouTubeIframeAPIReady = function() {
  player = new YT.Player('video', { // 置き換えるHTML要素のid
    videoId: vid,
    playerVars: {
      rel: 0, //動画再生後の関連動画を表示しない
      showinfo: 0, //動画再生前に動画情報を表示しない
      autoplay: 1, //動画準備後に自動再生
      loop: 1 //ループ設定
    },
    events: {
      onStateChange: function(e) {
        // 再生終了後
        if ( e.data == YT.PlayerState.ENDED ) {
	        //再生
         	e.target.playVideo();
        }
      }
    }
  });
  player.setLoop(true);
};