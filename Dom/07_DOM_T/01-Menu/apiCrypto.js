export default function apiCrypto() {
  const $btcContainer = document.getElementById("btc");
  const $ethContainer = document.getElementById("eth");
  const $bnbContainer = document.getElementById("bnb");

  const playAudioMessage = file => {
    let messageSound = new Audio(file);
    messageSound.play();
  };

  $btcContainer.innerText = "LOADING...";
  $ethContainer.innerText = "LOADING...";
  $bnbContainer.innerText = "LOADING...";

  let wsBtc = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");
  let wsEth = new WebSocket("wss://stream.binance.com:9443/ws/ethusdt@trade");
  let wsBnb = new WebSocket("wss://stream.binance.com:9443/ws/bnbusdt@trade");
  let targetReached = false;

  wsBtc.onmessage = event => {
    let stockObject = JSON.parse(event.data);
    // console.log(stockObject.p);
    $btcContainer.innerText = `BTC ${parseFloat(stockObject.p).toFixed(2)}`;
    document.title = `BTC/USDT ${parseFloat(stockObject.p).toFixed(2)}`;
    if (targetReached === true) {
      return;
    }
    if (stockObject.p > 26350 || stockObject.p < 26000) {
      targetReached = true;
      setTimeout(() => {
        playAudioMessage("/Dom/07_DOM_T/01-Menu/eurodollar_transfer.mp3");
      }, 1000);
      return;
    }
  };

  wsEth.onmessage = event => {
    let stockObject = JSON.parse(event.data);
    // console.log(stockObject.p);
    $ethContainer.innerText = `ETH ${parseFloat(stockObject.p).toFixed(2)}`;
  };
  wsBnb.onmessage = event => {
    let stockObject = JSON.parse(event.data);
    // console.log(stockObject.p);
    $bnbContainer.innerText = `BNB ${parseFloat(stockObject.p).toFixed(2)}`;
  };
}
