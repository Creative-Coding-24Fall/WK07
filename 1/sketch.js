// TODO: load text
//       count words

let mString = [];

function preload() {
  mStrings = loadStrings("../assets/article.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);

  let mString =  mStrings[0]; 
  print(mString, mString.length);

  let mWords = mString.toLowerCase().split(" ");
  print(mWords, mWords.length);

  let wordCounts = {};

  for (let idx = 0; idx < mWords.length; idx++){
    let mWord = mWords[idx];
    if(mWord in wordCounts) {
      wordCounts[mWord] = wordCounts[mWord] + 1;
    } else {
      wordCounts[mWord] = 1;
    }
  }
  print(wordCounts)

}

function draw() {}
 