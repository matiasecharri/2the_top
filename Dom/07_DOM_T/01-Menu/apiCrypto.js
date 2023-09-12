export default function apiCrypto() {
  const $btcContainer = document.getElementById("btc");
  const $ethContainer = document.getElementById("eth");
  $btcContainer.innerText = "LOADING...";
  $ethContainer.innerText = "LOADING...";

  let wsBtc = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");
  let wsEth = new WebSocket("wss://stream.binance.com:9443/ws/ethusdt@trade");

  wsBtc.onmessage = event => {
    let stockObject = JSON.parse(event.data);
    console.log(stockObject.p);
    $btcContainer.innerText = `BTC ${parseFloat(stockObject.p).toFixed(2)}`;
  };
  wsEth.onmessage = event => {
    let stockObject = JSON.parse(event.data);
    console.log(stockObject.p);
    $ethContainer.innerText = `ETH ${parseFloat(stockObject.p).toFixed(2)}`;
  };
}
