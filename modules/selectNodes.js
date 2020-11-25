import { selectLinesBetweenNodes } from '/modules/main.js' 

export const selectNodes = (nodes, array) => {
    for(let i = 0; i < nodes.length; i++){

        // get current node
        let currentNode = document.getElementById(`node${i+1}`)

        // set the cursor to 'grab'
        currentNode.style.cursor = 'grab'

        currentNode.onmousedown = (e) => {
            let elementSelected = e.path[0]
            array.push(elementSelected)
            elementSelected.style.backgroundColor = 'red'
            if(array.length == 2){
                selectLinesBetweenNodes(array)
            }
        }
    }
}

export const stopNodeSelection = (nodes) => {
    for(let i = 0; i < nodes.length; i++){

        // get current node
        let currentNode = document.getElementById(`node${i+1}`)

        // set the cursor to 'grab'
        currentNode.style.cursor = 'default'

        // do nothing on mouse down
        currentNode.onmousedown = null
    }
}

export const showStartAndEnd = (array) => {

    let startNode = array[0]
    let endNode = array[1]

    startNode.innerHTML = '<p>Start Here</p>'
    endNode.innerHTML = '<p>End Here</p>'
}