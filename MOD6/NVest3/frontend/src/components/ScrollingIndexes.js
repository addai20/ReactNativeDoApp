import React, { Component } from 'react';
import Iframe from 'react-iframe';

class ScrollingIndexes extends Component {


  render(){
    return(
        <div>
        <Iframe
          width={window.innerWidth}
          length="100px"
          scrolling="no" allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22title%22%3A%22S%26P%20500%22%2C%22proName%22%3A%22INDEX%3ASPX%22%7D%2C%7B%22title%22%3A%22Shanghai%20Composite%22%2C%22proName%22%3A%22INDEX%3AXLY0%22%7D%2C%7B%22description%22%3A%22DOW%22%2C%22proName%22%3A%22DJ%3ADJI%22%7D%2C%7B%22description%22%3A%22NASDAQ%20100%22%2C%22proName%22%3A%22NASDAQ%3ANDX%22%7D%2C%7B%22description%22%3A%22EUR%2FUSD%22%2C%22proName%22%3A%22FX%3AEURUSD%22%7D%2C%7B%22description%22%3A%22EUR%2FGBP%22%2C%22proName%22%3A%22FX%3AGBPUSD%22%7D%2C%7B%22description%22%3A%22USD%2FCAD%22%2C%22proName%22%3A%22FX%3AUSDCAD%22%7D%5D%2C%22isTransparent%22%3Atrue%2C%22displayMode%22%3A%22adaptive%22%2C%22colorTheme%22%3A%22dark%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A76%2C%22utm_source%22%3A%22%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22ticker-tape%22%7D" style="box-sizing: border-box; height: 44px; width: 100%;"
        />
        </div>
    )
  }
}

export default ScrollingIndexes

// <div className="tradingview-widget-container">
//   <div className="tradingview-widget-container__widget"></div>
//   <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com" rel="noopener" target="_blank"><span className="blue-text">Ticker Tape</span></a> by TradingView</div>
//   <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" async>
//   {
//   "symbols": [
//     {
//       "title": "S&P 500",
//       "proName": "OANDA:SPX500USD"
//     },
//     {
//       "title": "Shanghai Composite",
//       "proName": "INDEX:XLY0"
//     },
//     {
//       "title": "EUR/USD",
//       "proName": "FX_IDC:EURUSD"
//     },
//     {
//       "title": "BTC/USD",
//       "proName": "BITFINEX:BTCUSD"
//     },
//     {
//       "title": "ETH/USD",
//       "proName": "BITFINEX:ETHUSD"
//     }
//   ],
//   "colorTheme": "light",
//   "isTransparent": false,
//   "displayMode": "adaptive",
//   "locale": "en"
// }
//   </script>
// </div>
