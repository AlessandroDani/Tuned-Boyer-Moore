const ASIZE = 256;

export function myAlgorithm(text, pattern) {
  function preBmBc(pattern, m, bmBc) {
    for (let i = 0; i < ASIZE; ++i) {
      bmBc[i] = m;
    }

    for (let i = 0; i < m - 1; ++i) {
      bmBc[pattern.charCodeAt(i)] = m - i - 1;
    }
  }

  function memset(text, character, m) {
    let aux = "";

    for (let i = 0; i < m; i++) {
      aux += character;
    }

    return text + aux;
  }

  function memcmp(text, j, m, pattern) {
    for (let i = 0; i < m; i++) {
      if (text[j + i] !== pattern[i]) {
        return false;
      }
    }

    return true;
  }

  function TUNEDBM(pattern, m, text, n) {
    let j, k, shift;
    const bmBc = new Array(ASIZE);
    const indices = [];

    preBmBc(pattern, m, bmBc);
    shift = bmBc[pattern.charCodeAt(m - 1)];
    bmBc[pattern.charCodeAt(m - 1)] = 0;

    text = memset(text, pattern[m - 1], m);

    j = 0;

    while (j <= n - m) {
      k = bmBc[text.charCodeAt(j + m - 1)];

      while (k !== 0) {
        j += k;
        k = bmBc[text.charCodeAt(j + m - 1)];
        j += k;
        k = bmBc[text.charCodeAt(j + m - 1)];
        j += k;
        k = bmBc[text.charCodeAt(j + m - 1)];
      }

      if (j <= n - m && memcmp(text, j, m, pattern)) {
        indices.push(j);
      }

      j += shift;
    }

    return indices;
  }

  const n = text.length;
  const m = pattern.length;
  const indices = TUNEDBM(pattern, m, text, n);

  return indices;
}
