const ASIZE = 256;

export function myAlgorithm(text, pattern) {
  const executedLines = [];

  function trackLine(lineNumber) {
    executedLines.push(lineNumber);
  }

  function preBmBc(pattern, m, bmBc) {
    trackLine(3);
    for (let i = 0; i < ASIZE; ++i) {
      trackLine(4);
      trackLine(5);
      bmBc[i] = m;
    }

    trackLine(6);
    for (let i = 0; i < m - 1; ++i) {
      trackLine(7);
      bmBc[pattern.charCodeAt(i)] = m - i - 1;
    }
  }

  function memset(text, character, m) {
    trackLine(11);
    let aux = '';

    for (let i = 0; i < m; i++) {
      trackLine(13);
      aux += character;
    }

    trackLine(15);
    return text + aux;
  }

  function memcmp(text, j, m, pattern) {
    trackLine(18);
    for (let i = 0; i < m; i++) {
      trackLine(19);
      if (text[j + i] !== pattern[i]) {
        trackLine(20);
        return false;
      }
    }

    trackLine(24);
    return true;
  }

  function TUNEDBM(pattern, m, text, n) {
    trackLine(26);
    let j, k, shift;
    const bmBc = new Array(ASIZE);
    const indices = [];

    trackLine(30);
    preBmBc(pattern, m, bmBc);
    trackLine(31);
    shift = bmBc[pattern.charCodeAt(m - 1)];
    trackLine(32);
    bmBc[pattern.charCodeAt(m - 1)] = 0;

    trackLine(33);
    text = memset(text, pattern[m - 1], m);

    trackLine(34);
    j = 0;

    while (j <= n - m) {
      trackLine(35);
      k = bmBc[text.charCodeAt(j + m - 1)];

      while (k !== 0) {
        trackLine(37);
        j += k;
        k = bmBc[text.charCodeAt(j + m - 1)];
        j += k;
        k = bmBc[text.charCodeAt(j + m - 1)];
        j += k;
        k = bmBc[text.charCodeAt(j + m - 1)];
      }

      if (j <= n - m && memcmp(text, j, m, pattern)) {
        trackLine(46);
        indices.push(j);
      }

      trackLine(48);
      j += shift;
    }

    trackLine(50);
    return indices;
  }

  trackLine(52);
  const n = text.length;
  trackLine(53);
  const m = pattern.length;
  trackLine(54);
  const indices = TUNEDBM(pattern, m, text, n);

  trackLine(55);
  return {
    indices,
    executedLines,
  };
}
