
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

var listOfTasks = [];
function onDataReceived(text) {
  
  const txt = text.split(" ")[0].trim(); //this splits the entered string , takes the first index and removes white spaces
  // console.log(text.split(" ")[0].trim());
  // console.log(text.substring(3));
  console.log();
  
  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if(txt === 'hello') {
    hello(text.replace('\n',""));//removes \n from the entered text
  }
  else if(text === 'help\n'){
    help();
  }
  else if(txt === 'add'){
    var taskToAdd = text.substring(3).trim();
    add(taskToAdd);
  }
  else if(text === 'list\n'){
    list();
  }
  else if(txt === 'remove'){
    const taskToRemove = text.substring(6).trim();
    remove(taskToRemove);
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

function list(){
  for(let i = 0; i < listOfTasks.length; i++){
    console.log(i+1 + "[ ]"+listOfTasks[i]);
  }
 
}
/**
 * @returns {void}
 */

function add(task){
  if(task == "" || task == " ")
  {
    console.log('ERROR: task cannot be empty');
    return;
  }
  listOfTasks.push(task);
  console.log('task: '+ task + ' added successfully');


}

/**
 * @returns {void}
 */

function remove(taskNumber){
  console.log(taskNumber);
  if(taskNumber == "" || taskNumber == " "){
    taskNumber = 0;
  }
  listOfTasks.splice(taskNumber-1,1);
  console.log('task removed');

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
