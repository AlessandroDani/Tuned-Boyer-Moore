const ASIZE = 256;

export function myAlgorithm(text, pattern) {
  const executedLines = [];

  function trackLine(lineNumber) {
    executedLines.push(lineNumber);
  }

  function preBmBc(pattern, m, bmBc) {
    trackLine(3);

    trackLine(4);
    for (let i = 0; i < ASIZE; ++i) {
      trackLine(5);
      bmBc[i] = m;
      trackLine(4);
    }
    trackLine(6);

    trackLine(7);
    for (let i = 0; i < m - 1; ++i) {
      trackLine(8);
      bmBc[pattern.charCodeAt(i)] = m - i - 1;
      trackLine(7);
    }
  }

  function memset(text, character, m) {
    trackLine(11);

    trackLine(12);
    let aux = '';
    
    trackLine(13);
    for (let i = 0; i < m; i++) {
      trackLine(14);
      aux += character;
      trackLine(13);
    }

    trackLine(15);
    trackLine(16);
    return text + aux;
  }


  function memcmp(text, j, m, pattern) {
    trackLine(18);

    trackLine(19);
    for (let i = 0; i < m; i++) {
      trackLine(20);
      if (text[j + i] !== pattern[i]) {
        trackLine(21);
        return false;
      }
      trackLine(19);
    }

    trackLine(24);
    return true;
  }

  function TUNEDBM(pattern, m, text, n) {
    trackLine(26);
    let j, k, shift;
    trackLine(27);
    const bmBc = new Array(ASIZE);
    trackLine(28);
    const indices = [];
    trackLine(29);

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

    trackLine(35);
    while (j <= n - m) {
      trackLine(36);
      k = bmBc[text.charCodeAt(j + m - 1)];

      trackLine(37);
      while (k !== 0) {
        trackLine(38);
        j += k;
        trackLine(39);
        k = bmBc[text.charCodeAt(j + m - 1)];
        trackLine(40);
        j += k;
        trackLine(41);
        k = bmBc[text.charCodeAt(j + m - 1)];
        trackLine(42);
        j += k;
        trackLine(43);
        k = bmBc[text.charCodeAt(j + m - 1)];
        trackLine(44);
        trackLine(37);
      }

      trackLine(45);
      if (j <= n - m && memcmp(text, j, m, pattern)) {
        trackLine(46);
        indices.push(j);
        trackLine(47);
      }

      trackLine(48);
      j += shift;
      trackLine(49);
      trackLine(35);
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
