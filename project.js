// 1.deposit some money
// 2. determine no of lines to bet
// 3. collect a bet amt
// 4. spin the slot machine
// 5. check ik the user won
// 6. give the user their winnings
// 7. play again


const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8
}

const SYMBOL_VALUES = {
  A: 5,
  B: 4,
  C: 3,
  D: 2
}


// 1.deposit some money

const deposit = () => {
  while(true) {
    const depositamount = prompt("Enter a deposit Amount: ");
    const numberdepositamount = parseFloat(depositamount);

    if(isNaN(numberdepositamount) || numberdepositamount <=0) {
     console.log("Invalid deposit amount,try again");
    } else {
       return numberdepositamount;
      }
  }
};

// 2. determine no of lines to bet

const getnumberoflines = () => {
  while(true) {
    const lines = prompt("Enter the Number of Lines to bet on(1-3): ");
    const numberoflines = parseFloat(lines);
      
    if(isNaN(numberoflines) || numberoflines <= 0 || numberoflines > 3) {
      console.log("Invalid number of lines,try again");
    } else {
        return numberoflines;
      }
  }
};

      // 3. collect a bet amt
const getbet = (balance,lines) => {
  while(true) {
    const bet = prompt("Enter the bet per line: ");
    const numberbet = parseFloat(bet);
      
    if(isNaN(numberbet) || numberbet <= 0 || numberbet > balance / lines) {
      console.log("Invalid bet,try again");
    } else {
        return numberbet;
      }
  }
};


    // 4. spin the slot machine

const spin = () => {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }

  const reels = [];
  for (let i = 0; i < COLS; i++) {
    reels.push([]);
    const reelSymbols = [...symbols];
    for (let j = 0; j < ROWS; j++) {
      const randomindex = Math.floor(Math.random() * reelSymbols.length);
      const selectedSymbol = reelSymbols[randomindex];
      reels[i].push(selectedSymbol);
      reelSymbols.splice(randomindex, 1);
    }
  }

  return reels;
};

    
// console.log(reels);
let balance = deposit();
const numberoflines = getnumberoflines();
const bet = getbet(balance, numberoflines);
const reels = spin();

