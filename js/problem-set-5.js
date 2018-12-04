/*
 * Mario. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style half-pyramid of that height.
 *
 *     ##
 *    ###
 *   ####
 *  #####
 * ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function mario() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 1 CODE HERE
 do {
    height = Number(prompt("Enter your preferred height"));
  } while (height < 1 || height > 23);

  let combined = "";
  for (let i=0; i<height; i++){
    let row = "";
    for (let i2=0; i2<(height-i-1); i2++){
      row = row+"&nbsp;";
    }
    row = row+"#";
    for (let i3=0; i3<(i+1); i3++){
      row = row+"#";
    }
    combined = combined+row+"<br/>";
  }
  let op = document.getElementById("mario-easy-output");
  op.innerHTML = "<code>" + combined + "</code>";




  ////////////////////////// DO NOT MODIFY
  check('mario', height); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Mario, Again. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style pyramid of that height.
 *
 *     ##  ##
 *    ###  ###
 *   ####  ####
 *  #####  #####
 * ######  ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function marioAgain() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 2 CODE HERE
do {
    height = prompt("Enter your preferred height");
  } while (height < 1 || height > 23 || height % 1 != 0);

  let marioHardResult = document.getElementById('mario-hard-output');
  let x = 1;
  let space1 = "";
  height = Number(height);

  while (x < height) {
    space1 = space1 + "&nbsp";
    x = x + 1;
  }

  let hashtag = "##";
  let resultTwo = space1 + hashtag + "&nbsp&nbsp" + hashtag + "<br/>";

  let y = 1;
  let z = 1;
  let zSub = 1;
  let space = "&nbsp";

  while (y < (height - 1)) {
    hashtag = hashtag + "#";
    while (z < (height - 2)) {
      space = space + "&nbsp";
      z = z + 1;
    }
    resultTwo = resultTwo + space + hashtag + "&nbsp&nbsp" + hashtag + "<br/>";
    space = "&nbsp";
    z = zSub + 1;
    zSub = zSub + 1;
    y = y + 1;
  }
  while (y < height) {
    hashtag = hashtag + "#";
    resultTwo = resultTwo + hashtag + "&nbsp&nbsp" + hashtag + "<br/>";
    y = y + 1;
  }

  marioHardResult.innerHTML = "<code>" + resultTwo + "</code>";
  //////////////////////////////// DO NOT MODIFY
  check('mario-again', height); // DO NOT MODIFY
  //////////////////////////////// DO NOT MODIFY
}

/*
 * Credit. 10 points.
 *
 * Write a function that prompts the user for a credit card number (valid
 * and invalid examples will be provided), and displays either:
 *   - an invalid image (provided)
 *   - an American Express image (provided)
 *   - a Mastercard image (provided)
 *   - a Visa image (provided)
 *
 * We'll use Luhn's algorithm to determine the validity of a credit card
 * number. Review the steps of the algorithm below.
 *
 *   0. Multiply every other digit by 2, starting with the number’s
 *      second-to-last digit, and then add those products' digits together.
 *   1. Add the sum to the sum of the digits that weren’t multiplied by 2.
 *   2. If the total’s last digit is 0 (or, put more formally, if the total
 *      modulo 10 is congruent to 0), the number is valid!
 *
 * American Express uses 15-digit numbers, starting with 34 or 37.
 * Mastercard uses uses 16-digit numbers, starting with 51, 52, 53, 54,
 * or 55. Visa uses 13- or 16-digit numbers, starting with 4.
 *
 * 378282246310005 should verify as American Express.
 * 371449635398431 should verify as American Express.
 * 5555555555554444 should verify as Mastercard.
 * 5105105105105100 should verify as Mastercard.
 * 4111111111111111 should verify as Visa.
 * 4012888888881881 should verify as Visa.
 *
 * Credit card numbers must be integers. Users should be continuously
 * re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function credit() {

  //////////// DO NOT MODIFY
  let card; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 3 CODE HERE
  let odd_sum=0;
  let even_sum=0;
  while (true){
    card = prompt("Enter your credit card number to determine if it is still valid or invalid");
      if ((card.length==16 || card.length==15 || card.length==13) && Number.isInteger(Number(card))){
      break;
    }
  }
  for(let i=card.length-2;i>=0;i-=2) {
    let num=Number(card[i])*2;
    let strnum=num.toString();
    let sum_num=0;
    for (let j=0;j<strnum.length;j++){
      sum_num=sum_num+Number(strnum[j]);
    }
    even_sum=sum_num+even_sum;
    console.log(even_sum);
  }
  for(let k=card.length-1; k>=0;k-=2){
    odd_sum=odd_sum+Number(card[k])
  }
  console.log(odd_sum);

  if (card.length==15 && (card[0]==3 &&(card[1]==7 || card[1]==4)) && (odd_sum+even_sum)%10==0){
    document.getElementById("credit-output").innerHTML="<img src ='./images/amex.png'/>";
  }
  else if ((card.length==13 || card.length==16) && card[0]==4 && (odd_sum+even_sum)%10==0){
    document.getElementById("credit-output").innerHTML="<img src ='./images/visa.png'/>";
  }
  else if (card.length==16 && (card[0]==5 && (card[1]==1 || card[1]==2 || card[1]==4 || card[1]==5)) && (odd_sum+even_sum)%10==0){
    document.getElementById("credit-output").innerHTML="<img src ='./images/mastercard.png'/>";
  }
  else {
    document.getElementById("credit-output").innerHTML="<img src ='./images/visa.png'/>";
  }

  card=Number(card);

  /*
   * NOTE: After reading in the card number and storing it in the 'card'
   *       variable, do not modify it. If you find it necessary to manipulate
   *       this value, you will need to create a second variable to serve
   *       as a copy of the 'card' variable.
   */

  ///////////////////////// DO NOT MODIFY
  check('credit', card); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Guess. 5 points.
 *
 * Write a function that generates a random number, and asks the user to
 * try to guess this number. When all is said and done, your function
 * should output the random number and the number of attempts it took the
 * user to correctly guess that number. Your function should also provided
 * helpful hints, indicating whether the most recent guess was greater than
 * or less than the target.
 *
 * Random numbers must be between 1 and 1000. User guesses must be integers
 * within the range [1, 1000], and users should be continuously re-prompted
 * until they comply with this restriction. In the event a user guesses
 * something that violates this restriction, an attempt should not be
 * recorded.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function guess() {

  // WRITE YOUR EXERCISE 4 CODE HERE
let attemptNumber = 0;
  let randomNumber = Math.floor(Math.random() * 999) + 1;
  let found = false;
  let userNumber;
  while(found == false) {
    userNumber = Number(prompt("A number has been generated between 1 and 1000. What do you think it is?"));
    if(userNumber <= 1000 && userNumber >= 1 && Number.isInteger(userNumber)) {
      if(userNumber > randomNumber) {
        alert("Oof your guess was too high!")
        attemptNumber += 1;
      }
      else if(userNumber < randomNumber) {
        alert("Oof your guess was too low!")
        attemptNumber += 1;
      }
      else if(userNumber == randomNumber) {
        alert("Good job! You guessed it right!")
        attemptNumber += 1;
        found = true;
        document.getElementById("guess-output").innerHTML = "Number: " + randomNumber + "<br/>Attempts: " + attemptNumber;
      }
    }
    else {
      continue;
    }

  }

  ////////////////// DO NOT MODIFY
  check('guess'); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hurricane. 5 points.
 *
 * Write a function that prompts the user to enter a windspeed, and prints
 * the hurricane category (if applicable) for that windspeed. We'll be
 * using the Saffir-Simpson scale, shown below in MPH.
 *   - Category 5: 157+
 *   - Category 4: 130-156
 *   - Category 3: 111-129
 *   - Catgeory 2: 96-110
 *   - Category 1: 74-95
 *   - Tropical Storm: 39-73
 *
 * Windspeeds must be non-negative integers in the range [0, INF), and
 * users should be continuously re-prompted until they comply with this
 * restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function hurricane() {

  ///////////////// DO NOT MODIFY
  let windspeed; // DO NOT MODIFY
  ///////////////// DO NOT MODIFY
do {
    windspeed = prompt(" Enter an Integer representing windspeed")
  } while ((Number(windspeed) % 1) != 0 || Number(windspeed) < 0);

  windspeed = Number(windspeed);
  let hurricaneOutput = document.getElementById('hurricane-output');

  if (windspeed >= 157) {
    hurricaneOutput.innerHTML = "Category 5 Hurricane.";
  } else if (windspeed >= 130 && windspeed < 157) {
    hurricaneOutput.innerHTML = "Category 4 Hurricane.";
    
  } else if (windspeed >= 111 && windspeed < 130) {
    hurricaneOutput.innerHTML = "Category 3 Hurricane.";
    
  } else if (windspeed >= 96 && windspeed < 111) {
    hurricaneOutput.innerHTML = "Category 2 Hurricane.";
    
  } else if (windspeed >= 74 && windspeed < 96) {
    hurricaneOutput.innerHTML = "Category 1 Hurricane.";
    
  } else if (windspeed >= 39 && windspeed < 74) {
    hurricaneOutput.innerHTML = "Tropical Storm.";
    
  } else if (windspeed < 39) {
    hurricaneOutput.innerHTML = "Nice, clear skies today";
  }

  ///////////////////////////////// DO NOT MODIFY
  check('hurricane', windspeed); // DO NOT MODIFY
  ///////////////////////////////// DO NOT MODIFY
}

/*
 * Gymnastics. 5 points.
 *
 * Write a function that prompts the user to enter six scores. From those
 * six scores, the lowest and highest should be discarded. An average score
 * should be computed from the remaining four. Your function should output
 * the discarded scores, as well as the average score.
 *
 * Scores must be real numbers in the range [0.0, 10.0], and users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function gymnastics() {

  /////////////////// DO NOT MODIFY
  let total = 0; //// DO NOT MODIFY
  let scores = []; // DO NOT MODIFY
  /////////////////// DO NOT MODIFY
let i=1;
	while(i<=6){
		let inputScore=Number(prompt("Please enter your scores"));
		if (inputScore>=1 && inputScore<=10 && Number.isInteger(inputScore)){
			scores.push(inputScore);
		i++;
		}
	}
	scores.sort(function(a,b){return a-b;})
	let max=scores[5];
	let min=scores[0];
	let revisedScores=[];
	for(let j=1;j<5;j++){
		revisedScores.push(scores[j]);
	}
	let averageScore=((revisedScores[0]+revisedScores[1]+revisedScores[2]+revisedScores[3])/4).toFixed(2);
	document.getElementById("gymnastics-output").innerHTML="Discarded: "+min+", "+max+"</br>Score: "+averageScore;
  /////////////////////////////// DO NOT MODIFY
  /*
   * NOTE: The 'total' variable should be representative of the sum of all
   *       six of the judges' scores.
   */

  /*
   * NOTE: You need to add each score (valid or not) to the 'scores' variable.
   *       To do this, use the following syntax:
   *
   *       scores.push(firstScore);   // your variable names for your scores
   *       scores.push(secondScore);  // will likely be different than mine
   */

  /////////////////////////////// DO NOT MODIFY
  check('gymnastics', scores); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Report Card. 5 points.
 *
 * Write a function that prompts the user to enter test, quiz, and homework
 * grades for the marking period. Users can enter as many grades of each
 * category, entering -1 to signal they are finished. Your function should
 * output the user's final grade, where tests, quizzes, and homework are
 * weighted at 60%, 30%, and 10%, respectively.
 *
 * Grades must be real numbers in the range [0.0, 100.0], and users should
 * be continuously re-prompted until they comply with this restriction. The
 * only exception is -1, which signals the user is finished entering grades
 * for that category.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function reportCard() {

  ///////////////////////// DO NOT MODIFY
  let testTotal = 0; ////// DO NOT MODIFY
  let quizTotal = 0; ////// DO NOT MODIFY
  let homeworkTotal = 0; // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'testTotal', 'quizTotal', and 'homeworkTotal' variables
   *       should be representative of the sum of the test scores, quiz
   *       scores, and homework scores the user enters, respectively.
   */

  ///////////////////// DO NOT MODIFY
  let tests = 0; ////// DO NOT MODIFY
  let quizzes = 0; //// DO NOT MODIFY
  let homeworks = 0; // DO NOT MODIFY
  ///////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'tests', 'quizzes', and 'homeworks' variables should be
   *       representative of the number of tests, quizzes, and homework
   *       grades the user enters, respectively.
   */
let valueOne = prompt("Please enter a homework grade between 0.0 and 100:");
  
  while (Number(valueOne) != -1) {
    while (Number(valueOne) < -1 || Number(valueOne) > 100) {
      valueOne = prompt("Please enter a homework grade between 0.0 and 100. If all homework grades have been inputted, enter -1:");
    } 
    if (Number(valueOne) == -1) {
      break;
    } else if (Number(valueOne) >= 0 && Number(valueOne) <= 100){
      valueOne = Number(valueOne);
      homeworkTotal = homeworkTotal + valueOne;
      homeworks = homeworks + 1;
    }
    valueOne = prompt("Please enter a homework grade between 0.0 and 100. If all homework grades have been inputted, enter -1:");
  }
  
  let valueTwo = prompt("Please enter a quiz grade between 0.0 and 100:");
  
  while (Number(valueTwo) != -1) {
    while (Number(valueTwo) < -1 || Number(valueTwo) > 100) {
      valueTwo = prompt("Input a quiz grade between 0.0 and 100. If all quiz grades have been entered, enter -1:");
    } 
    if (Number(valueTwo) == -1) {
      break;
    } else if (Number(valueTwo) >= 0 && Number(valueTwo) <= 100){
      valueTwo = Number(valueTwo);
      quizTotal = quizTotal + valueTwo;
      quizzes = quizzes + 1;
    }
    valueTwo = prompt("Input a quiz grade between 0.0 and 100. If all quiz grades have been entered, enter -1:");
  }
  
  let valueThree = prompt("Please enter a test grade between 0.0 and 100:");
  
  while (Number(valueThree) != -1) {
    while (Number(valueThree) < -1 || Number(valueThree) > 100) {
      valueThree = prompt("Input a test grade between 0.0 and 100. If all test grades have been entered, enter -1:");
    } 
     if (Number(valueThree) == -1) {
      break;
    } else if (Number(valueThree) >= 0 && Number(valueThree) <= 100){
      valueThree = Number(valueThree);
      testTotal = testTotal + valueThree;
      tests = tests + 1;
    }
    valueThree = prompt("Input a test grade between 0.0 and 100. If all test grades have been entered, enter -1:");
  }
  
  let homeworkGrade = homeworkTotal / homeworks;
  homeworkGrade = homeworkGrade.toFixed(2);
  
  let quizGrade = quizTotal / quizzes;
  quizGrade = quizGrade.toFixed(2);
  
  let testGrade = testTotal / tests;
  testGrade = testGrade.toFixed(2);
  
  let finalGrade = 0.1 * (homeworkGrade) + 0.3 * (quizGrade) + 0.6 * (testGrade);
  finalGrade = finalGrade.toFixed(2);
  let reportCardOutput = document.getElementById('report-card-output');
  reportCardOutput.innerHTML = "Tests: " + testGrade + "<br/>" + "Quizzes: " + quizGrade + "<br/>" + "Homework: " + homeworkGrade + "<br/>" + "Grade: " + finalGrade;
  /////////////////////// DO NOT MODIFY
  check('report-card', // DO NOT MODIFY
    testTotal, ////////// DO NOT MODIFY
    tests, ////////////// DO NOT MODIFY
    quizTotal, ////////// DO NOT MODIFY
    quizzes, //////////// DO NOT MODIFY
    homeworkTotal, ////// DO NOT MODIFY
    homeworks /////////// DO NOT MODIFY
  ); //////////////////// DO NOT MODIFY
  /////////////////////// DO NOT MODIFY
}
