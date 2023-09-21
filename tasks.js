
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

var listOfTasks = {"list":[]};
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
    var taskToRemove = text.substring(6).trim();
    remove(taskToRemove);
  }
  else if(txt === 'edit'){
    var newTask = text.substring(4).trim();
    edit(newTask);
  }

  else if (txt === 'check'){
    var taskToCheck = text.substring(5).trim();
    check(taskToCheck);
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

function list(){// this functio lists  all the tasks by accending order
  for(let i = 0; i < listOfTasks.list.length; i++){ // 'loop through the tasks and adds a
                                                //number to each task with a specific format => 1 [] drink milk
    if(listOfTasks.list[i].status == false){
      console.log(i+1 + "[ ]" + listOfTasks.list[i].name);
    }else{console.log(i+1 + "[✓]" + listOfTasks.list[i].name);}
    
  }
 
}
/**
 * @returns {void}
 */

function add(task){  // this function adds tasks to the list
  if(task == "" || task == " ")// checks if the user enters add "" or add with a space  it will generate an error
  {
    console.log('ERROR: task cannot be empty');
    return;
  }
  listOfTasks.list.push({name:task,status:false});
  console.log("list of task ",listOfTasks.list)
  console.log('task: '+ task + ' added successfully');


}

/**
 * @returns {void}
 */

function remove(taskNumber){ 
  
  console.log(taskNumber);
  if(taskNumber == "" || taskNumber == " "){ // if the task number is empty , it will assign it to zero
    taskNumber = 0;
    console.log(taskNumber+ 'last task removed');
  }
  else if(taskNumber > listOfTasks.list.length){
    console.log("ERROR: task number is out of range");
  }else{console.log('task removed');}
  
  listOfTasks.list.splice(taskNumber-1,1); // it will remove the task from the index entered , so if we enter remove 1, it will remove the first element in the list that has index 0 ( 1-1=0)
  
  
  

}

function edit(newtask){

  if(newtask == "" || newtask == " "){
    console.log('ERROR: task cannot be empty');
    return;
  }

  else if(isNaN(newtask[0]))
  {
    console.log(listOfTasks.list[listOfTasks.list.length-1].name)
    listOfTasks.list[listOfTasks.list.length-1].name = newtask
    console.log('task edited:  '+ listOfTasks.list.name);
  }

  else if(newtask[0] > listOfTasks.list.length)
  {
    console.log("Task doesn't exist, if you wanna add a new task, insert add + your task!!");
  }
  else
  {
    listOfTasks.list[newtask[0]-1].name = newtask.substring(1).trim();
    
  }

  
}


function check(number){
  var mode =  false;
  if(number == "" || number == " "){
    console.log("ERROR: please enter a valid number");
  }
  else if(number > listOfTasks.list.length){
    console.log("ERROR: task number is out of range");
  }
  else{
    if(listOfTasks.list[number-1].status == false){
      listOfTasks.list[number-1].status = true;
    }
    else{
      listOfTasks.list[number-1].status = false;
    }
     

  }console.log(listOfTasks.list)
}
/**
 * @returns {void}
 */


// this function lists all possible commands
function help(){
  console.log('list of commands: \n-hello \n-hello + your customized text \n-add + your task(to add a task) \n-remove + the number of the task to remove \n-list(to list all the tasks)\n-check + number of the task(to check/uncheck) \n-help \n-quit \n-exit\n')
}


// var task =
// {
//   name: "drink milk",
//   status: true,
// }

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
