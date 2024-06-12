function toAscii(input) {
  const result = [];
  for (let textAlpha of a) {
    const tempt = [];
    for (let charAlpa of textAlpha) {
      let x = charAlpa;
      let ascc = x.charCodeAt(0);
      // console.log(ascc);
      tempt.push(ascc);
    }
    result.push(tempt);
  }
  return result;
}

function sortingSaya(input) {
  for (let i = 0; i < input.length; i++) {
    let temp1;
    for (let j = 0; j < i; j++) {
      if (input[i] < input[j]) {
        temp1 = input[j];
        input[j] = input[i];
        input[i] = temp1;
      }
    }
  }
  return input;
}

function textToAscii(input) {
  const result = toAscii(input);
  for (let i = 0; i < result.length; i++) {
    result[i] = sortingSaya(result[i]);
  }
  const finalIndex = finalIndexing(result);
  return finalIndex;
}

function finalIndexing(test) {
  const sudahMasuk = [];
  const semua = [];
  for (let i = 0; i < test.length; i++) {
    const the = [];
    let flagatas = false;
    for (let l = 0; l < sudahMasuk.length; l++) {
      if (i == sudahMasuk[l]) {
        flagatas = true;
        break;
      }
    }
    if (flagatas) {
      continue;
    }
    the.push(i);
    sudahMasuk.push(i);
    for (let j = i + 1; j < test.length; j++) {
      if (test[i].length == test[j].length) {
        let temp1 = test[i];
        let temp2 = test[j];
        let flag = true;
        for (let k = 0; k < test[i].length; k++) {
          if (temp1[k] != temp2[k]) {
            flag = false;
            break;
          }
        }
        if (flag) {
          the.push(j);
          sudahMasuk.push(j);
        }
      }
    }
    semua.push(the);
  }
  return semua;
}

function finalAnswer(input) {
  const test = textToAscii(input);
  for (let i = 0; i < test.length; i++) {
    for (let j = 0; j < test[i].length; j++) {
      let a = test[i][j];
      test[i][j] = input[a];
    }
  }
  console.log(test);
}

const a = ["cook", "save", "taste", "aves", "vase", "state", "map"];
finalAnswer(a);
