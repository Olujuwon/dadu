const data =(localStorage.getItem('daduList')) ? JSON.parse(localStorage.getItem('daduList')): {
    todo: [],
    done: []
};
console.log(JSON.parse(localStorage.getItem('daduList')) );

//input form elements
const butn = document.getElementById('butt');
const itemInput = document.getElementById("itm");
const qtyInput = document.getElementById("qty");

//remove and complete icons SVG 
const removeSVG = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 59 59" style="enable-background:new 0 0 59 59;" xml:space="preserve" width="512px" height="512px" class=""><g transform="matrix(0.989307 0 0 0.989307 0.315437 0.315437)"><g> <path d="M29.5,51c0.552,0,1-0.447,1-1V17c0-0.553-0.448-1-1-1s-1,0.447-1,1v33C28.5,50.553,28.948,51,29.5,51z" data-original="#000000" class="active-path" data-old_color=" rgb(0, 0, 0)" fill="#C0392B"/> <path d="M19.5,51c0.552,0,1-0.447,1-1V17c0-0.553-0.448-1-1-1s-1,0.447-1,1v33C18.5,50.553,18.948,51,19.5,51z" data-original="#000000" class="active-path" data-old_color=" rgb(0, 0, 0)" fill="#C0392B"/> <path d="M39.5,51c0.552,0,1-0.447,1-1V17c0-0.553-0.448-1-1-1s-1,0.447-1,1v33C38.5,50.553,38.948,51,39.5,51z" data-original="#000000" class="active-path" data-old_color=" rgb(0, 0, 0)" fill="#C0392B"/> <path d="M52.5,6H38.456c-0.11-1.25-0.495-3.358-1.813-4.711C35.809,0.434,34.751,0,33.499,0H23.5c-1.252,0-2.31,0.434-3.144,1.289 C19.038,2.642,18.653,4.75,18.543,6H6.5c-0.552,0-1,0.447-1,1s0.448,1,1,1h2.041l1.915,46.021C10.493,55.743,11.565,59,15.364,59 h28.272c3.799,0,4.871-3.257,4.907-4.958L50.459,8H52.5c0.552,0,1-0.447,1-1S53.052,6,52.5,6z M21.792,2.681 C22.24,2.223,22.799,2,23.5,2h9.999c0.701,0,1.26,0.223,1.708,0.681c0.805,0.823,1.128,2.271,1.24,3.319H20.553 C20.665,4.952,20.988,3.504,21.792,2.681z M46.544,53.979C46.538,54.288,46.4,57,43.636,57H15.364 c-2.734,0-2.898-2.717-2.909-3.042L10.542,8h37.915L46.544,53.979z" data-original="#000000" class="active-path" data-old_color=" rgb(0, 0, 0)" fill="#C0392B"/> </g></g> </svg>';
const completeSVG = '<svg class="check" height=512px style="enable-background:new 0 0 52 52"version=1.1 viewBox="0 0 52 52"width=512px x=0px xml:space=preserve xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink y=0px><g><g><path class=active-path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26   S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z"data-original=#000000 fill=#000000 /><path class=active-path d="M38.252,15.336l-15.369,17.29l-9.259-7.407c-0.43-0.345-1.061-0.274-1.405,0.156c-0.345,0.432-0.275,1.061,0.156,1.406   l10,8C22.559,34.928,22.78,35,23,35c0.276,0,0.551-0.114,0.748-0.336l16-18c0.367-0.412,0.33-1.045-0.083-1.411   C39.251,14.885,38.62,14.922,38.252,15.336z"data-original=#000000 fill=#000000 /></g></g></svg>';

const addElements = ()=>{
    itmValue = itemInput.value;
    qtyValue = qtyInput.value;
    let val = `${itmValue} - ${qtyValue}`;
    if(itmValue && qtyValue){
        addItemTodo(val);       //function takes text from input and add it to list and add list to elements

        document.getElementById("itm").value = "";                //resets the form after taking input values
        document.getElementById("qty") .value='';

        data.todo.push(val);                                                        //push the values into the data object for storage later
        dataStore();
        console.log(`${itmValue} - ${qtyValue}`)
    }
};

butn.addEventListener('click', addElements);

const dataStore = ()=>{
    localStorage.setItem('daduList', JSON.stringify(data));         //stores data as JSON string in local storage
}

const removeList = (e)=>{
    let li = e.target.parentNode.parentNode.parentNode;
    let parentUl = li.parentNode;                                                               //function that removes a childnode from the parent node *delete*
    let id = parentUl.id;
    if (id==='todo'){
        data.todo.splice(data.todo.indexOf(li.innerText), 1);           //takes todo element off the list for good and updates this  in the local storage
    } else{
        data.done.splice(data.todo.indexOf(li.innerText), 1);           //Reverse of line 41
    }

    dataStore();

    parentUl.removeChild(li);
    console.log("DeleteItem: clip it off" + data) 
}
//Function to reassign a todo item to done list after completion of the task
const completeTask = (e)=>{
    let li = e.target.parentNode.parentNode.parentNode;
    let parentUl = li.parentNode; 
    let id = parentUl.id;

    if (id==='todo'){
        data.todo.splice(data.todo.indexOf(li.innerText), 1);           //takes todo element off the list to put in the done segment
        data.done.push(li.innerText);                                   //pushes the value of the inner text into the completed list after splicing
    } else{
        data.done.splice(data.todo.indexOf(li.innerText), 1);           //Reverse of line 57
        data.todo.push(li.innerText);                                   //Reverse of line 58
    }

    dataStore();

    let target = (id === 'todo') ? document.getElementById('done'):document.getElementById('todo');
    parentUl.removeChild(li);
    target.insertBefore(li, target.childNodes[0]);
    //console.log(e);
    //console.log("Datali :"+ data);
};

//Add Elements
const addItemTodo = (text, done) => {
    let list = (done) ? document.getElementById('done'):document.getElementById('todo');
    let listElement = document.createElement('li');
    listElement.innerText = text;                                       //creates li element and its class
    
    let buttons = document.createElement('div');
    buttons.classList.add('buttons');                               //creates div tag for the buttons and it class
    
    let remove = document.createElement('button');
    remove.classList.add('remove'); 
    remove.innerHTML = removeSVG  ;                              //creates the remove button & class
    remove.addEventListener('click', removeList);            //event listner that removes a list item  after a click
    
    let complete = document.createElement('button');
    complete.classList.add('complete'); 
    complete.innerHTML = completeSVG;                            //creates the complete button &  class
    complete.addEventListener('click', completeTask);       //event listner that removes a done list item  from todo => done list
    
    buttons.appendChild(remove);
    buttons.appendChild(complete);
    
    listElement.appendChild(buttons);
    list.insertBefore(listElement, list.childNodes[0]);
};
const renderDaduList = ()=>{
    if(!data.todo.length && !data.done.length) return;
    data.todo.forEach(elemtodo => {
        addItemTodo(elemtodo);
         console.log("todo-elements : " +elemtodo)
    });
    data.done.forEach(elemdone => {
        addItemTodo(elemdone, true);
         console.log("done-elements : " + elemdone)
    });
};
renderDaduList();