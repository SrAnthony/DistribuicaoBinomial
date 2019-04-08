import React, { Component } from 'react'
import { distribuicaoBinomial } from './Calcs'
import './App.css'

// N = 5, X = 3, P = 0.25 === 8,79%

class App extends Component {
  state = {
    p: '',
    n: '',
    x: '',
  }

  handleChange = (field, value) => {
    this.setState({ [field]: value })
  }

  individual = () => {
    const { p, n, x } = this.state
    const N = parseFloat(n)
    const X = parseFloat(x)
    const P = parseFloat(p) / 100

    if (!P || !N || !X)
      return '0.00'

    return (distribuicaoBinomial(P, N, X) * 100).toFixed(2)
  }

  acumulado = () => {
    const { p, n, x } = this.state
    const N = parseFloat(n)
    const X = parseFloat(x)
    const P = parseFloat(p) / 100

    if (!P || !N || !X)
      return '0.00'

    let result = 0
    for (let i = 0; i <= X; i++) {
      result += distribuicaoBinomial(P, N, i)
    }

    return (result * 100).toFixed(2)
  }

  render() {
    const { p, n, x } = this.state

    return (
      <div className="body">
        <header className="app">
          <p>Distribuição binomial</p>
        </header>

        <main className="content">

          <div className="fields">
            <div className="field-title">
              N
              <input value={n} onChange={e => this.handleChange('n', e.target.value)} />
            </div>
            <div className="field-title">
              X
              <input value={x} onChange={e => this.handleChange('x', e.target.value)} />
            </div>
            <div className="field-title">
              P
              <input placeholder="%" value={p} onChange={e => this.handleChange('p', e.target.value)} />
            </div>
          </div>

          <div className="answer">
            {this.individual()} %
            <span>Individual</span>
          </div>

          <div className="answer">
            {this.acumulado()} %
            <span>Acumulado</span>
          </div>

        </main>
      </div>
    )
  }
}

export default App
