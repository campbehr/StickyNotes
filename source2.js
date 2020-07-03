const plusBtn = document.querySelector('.plus-btn')

const noteSection = document.querySelector('.note-section')

plusBtn.addEventListener('click', function () {
    createSticky()
})

createSticky = () => {
    //creates sticky note div
    
    const stickyNote = document.createElement('div')
    stickyNote.setAttribute('class', 'sticky-note')
    
    const list = document.createElement('ol')
    list.setAttribute('class', 'list')
    
    const input = document.createElement('input')
    input.setAttribute('class', 'sticky-input')
    
    const inputBtn = document.createElement('button')
    inputBtn.setAttribute('class', 'input-btn')
    inputBtn.textContent = 'Add'
    
    stickyNote.appendChild(list)
    stickyNote.appendChild(input)
    stickyNote.appendChild(inputBtn)
    noteSection.appendChild(stickyNote)
    inputBtn.addEventListener('click', function() {
        addTask()
    })
}

addTask = () => {
    //takes input.value and creates list item
    console.log(input.value)

}

