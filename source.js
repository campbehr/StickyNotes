//Start with blank page and "pluss" button in bottom center of page
//When plus button is clicked, create new page element that floats left
//Within new element there will be an input that creates a new task 

const plusBtn = document.querySelector('.plus-btn')

const noteSection = document.querySelector('.note-sect')


plusBtn.addEventListener('click', function() {
    createSticky()    
})
        
createSticky = () => {
    const stickyNote = document.createElement('div')
    stickyNote.setAttribute('class', 'sticky-note')
    
    const list = document.createElement('ul')
    list.setAttribute('class', 'list')
    
    const input = document.createElement('input')
    input.setAttribute('class', 'sticky-input')

    const inputBtn = document.createElement('button')
    inputBtn.setAttribute('class', 'input-btn')
    inputBtn.textContent = 'Add'

    
    inputBtn.addEventListener('click', function() {
        //Adds task to the related "sticky note"
        let myTask = []
        
        let listItem = document.createElement('li')
       
        myTask.push(input.value)
        
        input.value = ''
       
        myTask.forEach(function(task){
            listItem.textContent = task
        })
        
        list.append(listItem)
    })
    
    stickyNote.appendChild(list)
    stickyNote.appendChild(input)
    stickyNote.appendChild(inputBtn) 
    noteSection.appendChild(stickyNote)
}
