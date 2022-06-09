import React, { Component } from 'react';
import { loremIpsum } from 'lorem-ipsum';

import { AutoSizer, List } from "react-virtualized";

const ITEMS_COUNT = 98
const ITEM_SIZE = 100

const rowCount = 1000;
const listHeight = 600;
const rowHeight = 50;
const rowWidth = 1200;

class App extends Component {
  constructor() {
    super();
    this.renderRow = this.renderRow.bind(this);
    this.list = Array(rowCount).fill().map((val, idx) => {
      return {
        id: idx, 
        name: 'John Doe',
        image: 'http://via.placeholder.com/40',
        text: loremIpsum({
          count: 1, 
          units: 'sentences',
          sentenceLowerBound: 4,
          sentenceUpperBound: 8 
        })
      }
    });
  }
  
  renderRow({ index, key, style }) {
    return (
      <div key={key} style={{ width: 300, height: 200 }}>
        <div className="image">
          <img src={this.list[index].image} alt="" />
        </div>
        <div className="content">
          <div>{this.list[index].name}</div>
          <div>{this.list[index].text}</div>
        </div>
      </div>
    );
  }
  
  render() {

    console.log(this.window && this.window.innerHeight)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div style={{ height: 800, minWidth: "20vw" }}>
        <AutoSizer>
          {
            ({ width, height }) => {
              return <List
                style={{ width: 200 }}
                width={width}
                height={height}
                rowHeight={rowHeight}
                rowRenderer={this.renderRow}
                rowCount={this.list.length}
                overscanRowCount={3} />
            }
          }
          </AutoSizer>
        </div>
      </div>
    );
  }
}

export default App;