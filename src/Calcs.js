export const fatorial = x => {
  let total = 1;
	for (let i = 1; i <= x; i++) {
		total = total * i;
	}
	return total;
}

export const binomioNewton = (n, x) => {
  const fatorial_n = fatorial(n)
  const fatorial_x = fatorial(x)
  return fatorial_n / (fatorial_x * (fatorial(n - x)))
}

export const distribuicaoBinomial = (P, N, X) => {
  return binomioNewton(N, X) * Math.pow(P, X) * Math.pow(1 - P, N - X)
}
