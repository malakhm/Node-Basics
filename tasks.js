
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {

  const txt = text.split(" ")[0].trim(); //this splits the entered string , takes the first index and removes white spaces
  // console.log(text.split(" ")[0].trim());
  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if(txt === 'hello') {
    hello(text.replace('\n',""));//removes \n from the entered text
  }
  else if(text === 'help\n'){
    help();
  }
  else if(text === 'add\n'){
    add();
  }
  else if(text === 'list\n'){
    list();
  }
  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text){// functio hello takes text as argument and return it with '!'
  console.log(text + "!"); 
}

/**
 * @returns {void}
 */

function list(task){

  for(let i = 0; i < task.length; i++){
    console.log(i+1 + "[ ]"+task[i]);
  }
 
}
/**
 * @returns {void}
 */

function add(){

}

/**
 * @returns {void}
 */

function remove(){

}

/**
 * @returns {void}
 */


// this function lists all possible commands
function help(){
  console.log('list of commands: \n hello \n hello + your customized text \n help \n quit \n exit \n')
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("Malak Hamwi")
