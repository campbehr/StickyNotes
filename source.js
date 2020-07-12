
const plusBtn = document.querySelector('.plus-btn')
const noteSection = document.querySelector('.note-sect')

//Creates and adds new sticky note to DOM
plusBtn.addEventListener('click', function() {
    createSticky()    
})

createSticky = () => {
    //Create sticky Note and all objects inside
    const delNoteBtn = document.createElement('button')
    delNoteBtn.setAttribute('class', 'del-note')
    delNoteBtn.textContent = 'X'

    const stickyNote = document.createElement('div')
    stickyNote.setAttribute('class', 'sticky-note')
    
    const list = document.createElement('ul')
    list.setAttribute('class', 'list')

    const inputSect = document.createElement('div')
    inputSect.setAttribute('class', 'input-sect')
    
    const input = document.createElement('input')
    input.setAttribute('class', 'sticky-input', 'placeholder', 'type notes here')
    
    const inputBtn = document.createElement('button')
    inputBtn.setAttribute('class', 'input-btn')
    inputBtn.textContent = '+' 
    
    //Ceates list item function for input section of sticky note
    inputBtn.addEventListener('click', function() {
        //objects used to store information within each stickyNote obj
        let myTask = []
        let listItem = document.createElement('li')
        let chkItem = document.createElement('input')
        chkItem.setAttribute('type', 'checkbox','class', 'del-item')
        //take input value store it in array and clear field
        myTask.push(input.value)
        input.value = ''
        //loop through array and and append items if not blank
        myTask.forEach(function(task){
            listItem.textContent = task
        })
        if(listItem.textContent !== ''){
            list.append(listItem)
        }
        listItem.appendChild(chkItem)
        
        //checkbox function for crossing out task completed
        chkItem.addEventListener('click', function(){
            let itemDecor = listItem.style

            if (itemDecor.color !== 'red' && itemDecor.textDecoration !== 'line-through'){
                itemDecor.color = 'red'
                itemDecor.textDecoration = 'line-through'
            } else {
                itemDecor.color = 'black'
                itemDecor.textDecoration = 'underline'
            }
        })
   
    })
    //Delete individual stickyNote
    delNoteBtn.addEventListener('click', function(){
        this.parentElement.remove(self) 
    })
    
    //Nest children in proper place for DOM viewport
    stickyNote.appendChild(delNoteBtn) 
    stickyNote.appendChild(list)
    stickyNote.appendChild(inputSect)
    inputSect.appendChild(input)
    inputSect.appendChild(inputBtn)
    noteSection.append(stickyNote)
    
}
