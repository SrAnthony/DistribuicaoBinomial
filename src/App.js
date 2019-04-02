import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    p: null,
    n: null,
    x: null,
    result: null,
  }

  handleChange = (field, value) => {
    const { p, n, x } = this.state
    this.setState({ [field]: parseInt(value), result: p + n + x })
  }

  render() {
    const { p, n, x, result } = this.state

    return (
      <div className="body">
        <header className="app">
          <p>Distribuição binomial</p>
        </header>

        <main className="content">

          <div className="fields">
            <div className="field-title">
              P
              <input value={p} onChange={e => this.handleChange('p', e.target.value)} />
            </div>
            <div className="field-title">
              N
              <input value={n} onChange={e => this.handleChange('n', e.target.value)} />
            </div>
            <div className="field-title">
              X
              <input value={x} onChange={e => this.handleChange('x', e.target.value)} />
            </div>
          </div>

          <div className="answer">
            {result || 'Informe os valores'}
          </div>

        </main>
      </div>
    );
  }
}

export default App;
