/* 
  Mad Lib Starter (Beginner JS)

  GOAL:
  - Ask the user for several words using prompt()
  - Save each answer in a variable (use let or const)
  - Build a story string using a template literal (backticks) with ${variableName}
  - Put the finished story into the page by setting innerHTML on the element with id "madlib-output"

  IMPORTANT:
  - Do NOT use if/else or any other advanced JS yet.
  - Only variables, prompt(), strings, and innerHTML.
  - Write your own prompts and story!
*/

/* 1) CREATE VARIABLES 
   - Make one variable per word you need (e.g., a noun, a verb, an adjective, a place, a number, etc.)
   - Use prompt() to ask the user for each word.
   - EXAMPLE CATEGORIES (choose your own): noun1, adjective1, verbPast, place, animal, food
   - Name variables clearly so you remember what each one is for.
*/

// let ________ = prompt("Ask the user for ________");
// let ________ = prompt("Ask the user for ________");
// (Add as many as your story needs)

/* 2) BUILD YOUR STORY STRING
   - Use a template literal: it starts and ends with backticks (the ` key).
   - Insert variables with ${variableName} in your sentence.
   - Keep it fun! Make sure your story uses ALL the variables you collected.
*/

// let story = `Write your story here using ${_____} and ${_____} etc.`;

/* 3) DISPLAY THE STORY ON THE PAGE
   - Select the element with id "madlib-output" using document.getElementById(...)
   - Set its .innerHTML to your story variable from Step 2.
   - Optional: include simple <strong> or <em> tags inside your story string for emphasis.
*/

// document.getElementById("madlib-output").innerHTML = /* your story variable */ ;

/* 4) OPTIONAL POLISH
   - Add a title or intro line at the top of your story (still using the same innerHTML).
   - Use <br> tags inside your story string to control line breaks if you want multiple lines.
   - Keep your variable names, prompts, and story grammar consistent.
*/

/* 5) RUBRIC REMINDER (quick checklist)
   - Prompts: You ask for all required words with clear messages.
   - Variables: You use let/const with meaningful names.
   - Template Literals: You use backticks and ${} correctly.
   - Display: The story shows up clearly in #madlib-output.
   - Bootstrap: Don’t remove the .row/.col structure in index.html.
   - Comments: Explain each step in your code.
   - GitHub: Commit often with clear messages; publish on GitHub Pages.
*/


let person = prompt("Person (For example: grandma,mom)");
let gift1 = prompt("First gift they gave you (noun)");
let gift2 = prompt("Second gift they gave you (animal)");
let adjective1 =prompt("Adjective to describe gift (adjective)")
let gift3 = prompt("Third gift they gave you (noun plural)");
let verb1= prompt("Verb fourth gift is doing (verb)")
let gift4 = prompt("Fourth gift they gave you (animal plural)");
let gift5= prompt("Fifth gift they gave you (dream house)")
let gift6 = prompt("Sixth gift they gave you (celebrity crush)")
let gift7 = prompt("Seventh gift they gave you (favorite actor)")
let gift8 = prompt("Eighth gift they gave you (favorite food)")
let gift9 = prompt("Ninth gift they gave you (verb)")
let gift10 = prompt("Tenth gift they gave you (favorite sports team plural)")
let gift11 = prompt("Eleventh gift they gave you (noun plural)")
let gift12 = prompt("Twelfth gift they gave you (animal plural)")
let verb2 = prompt("Verb twelfth gift is doing (verb)")




let story=`

<p>On the first day of Christmas, my ${person} gave to me, a ${gift1}. On the second day of Christmas, my ${person} gave to me two ${gift2}, and a ${gift1}. On the third day of Christmas, ${person} gave to me three ${adjective1} ${gift3}, two ${gift2} and a ${gift1}. On the fourth day of Christmas, ${person} gave to me four ${verb1} ${gift4}, three ${adjective1} ${gift3} two ${gift2} and a ${gift1}. On the fifth day of Christmas, ${person} gave to me five ${gift5}, four ${verb1} ${gift4}, three ${adjective1} ${gift3}, two ${gift2} and a ${gift1}. On the sixth day of Christmas, ${person} gave to me six ${gift6}, five ${gift5}, four ${verb1} ${gift4}, three ${adjective1} ${gift3}, two ${gift2} and a ${gift1}. On the seventh day of Christmas, ${person} gave to me seven ${gift7}, six ${gift6}, five ${gift5}, four ${verb1} ${gift4}, three ${adjective1} ${gift3}, two ${gift2} and a ${gift1}. On the eighth day of Christmas, ${person} gave to me eight ${gift8}, seven ${gift7}, six ${gift6}, five ${gift5}, four ${verb1} ${gift4}, three ${adjective1} ${gift3}, two ${gift2} and a ${gift1}. On the ninth day of Christmas, nine ladies ${gift9}, eight ${gift8}, seven ${gift7}, six ${gift6}, five ${gift5}, four ${verb1} ${gift4}, three ${adjective1} ${gift3}, two ${gift2} and a ${gift1}. On the tenth day of Christmas, ${person} gave to me ten ${gift10}, nine ladies ${gift9}, eight ${gift8}, seven ${gift7}, six ${gift6}, five ${gift5}, four ${verb1} ${gift4}, three ${adjective1} ${gift3}, two ${gift2} and a ${gift1}. On the eleventh day of Christmas, ${person} gave to me eleven ${gift11}, ten ${gift10}, nine ladies ${gift9}, eight ${gift8}, seven ${gift7}, six ${gift6}, five ${gift5}, four ${verb1} ${gift4}, three ${adjective1} ${gift3}, two ${gift2} and a ${gift1}. On the twelfth day of Christmas ${person} gave to me twelve ${gift12} ${verb2}, eleven ${gift11}, ten ${gift10}, nine ladies ${gift9}, eight ${gift8}, seven ${gift7}, six ${gift6}, five ${gift5}, four ${verb1} ${gift4}, three ${adjective1} ${gift3}, two ${gift2} and a ${gift1}</p>`

document.getElementById("madlib-output").innerHTML= story