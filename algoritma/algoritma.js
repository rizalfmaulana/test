//Soal ke 1
/**
 * Returns reverse word exept the first and  character
 * @param {string} str
 * @returns {string}
 */

function reverseWord(str) {
  var len = str.length;
  var i = 0;

  var j = len - 2;

  var strchar = str.split("");

  while (i < j) {
    var temp = strchar[i];
    strchar[i] = strchar[j];
    strchar[j] = temp;
    i++;
    j--;
  }
  str = strchar.join("");
  return str;
}

var c = "NEGIE1";
console.log("Hasil Soal Pertama :" + reverseWord(c));
console.log("==============================");

// Soal ke 2
/**
 * Returns the longest word
 * @param {string} str
 * @returns {string}
 */

const sentence = "Saya sangat senang mengerjakan soal algoritma";

function longest(str) {
  let temp = str.split(" ");
  let long = "";
  for (let i = 0; i < temp.length; i++) {
    if (temp[i].length > long.length) {
      long = temp[i];
    }
  }
  return `${long}: ${long.length} character`;
}

console.log("Hasil Soal Kedua " + longest(sentence));
console.log("==============================");

//Soal ke 3
/**
 * Returns count the common element
 * @param {string[]} array1
 * @param {string[]} array2
 * @returns {string[]}
 */

INPUT = ["xc", "dz", "bbb", "dz"];
QUERY = ["bbb", "ac", "dz"];
function countCommonElement(array1, array2) {
  let arr = [];
  let count = 0;
  for (let i = 0; i < array2.length; i++) {
    count = 0;
    for (let j = 0; j < array1.length; j++) {
      if (array2[i] === array1[j]) {
        count++;
      }
    }
    arr.push(count);
  }
  return arr;
}

console.log(countCommonElement(INPUT, QUERY));
console.log("==============================");

//Silahkan cari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN Contoh:
//Soal ke 4
/**
 * Returns substract diagonal matrix
 * @param {number[]} matrix
 * @returns {number[]}
 */

const matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];

function diagonalSums(matrix) {
  let diagonalPertama = 0;
  let diagonalKedua = 0;
  for (let row = 0; row < matrix.length; row++) {
    diagonalPertama += matrix[row][row];
    diagonalKedua += matrix[row][matrix.length - row - 1];
  }
  return diagonalPertama - diagonalKedua;
}

console.log("Hasil Soal Keempat: " + diagonalSums(matrix));
