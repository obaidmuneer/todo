
let item = document.querySelector('#item')
let btn = document.querySelector('#btn')
let result = document.querySelector('#result')
let list = []

function add() {
    list.push(item.value)
    item.value = ''
    // console.log(list);
    show()
}

function show() {
    result.innerHTML = ''
    list.map((item, index) => {
        // console.log(item);
        let edit = `<input type="button" onclick="edit(${index})" value="Edit">`
        let dlt = `<input type="button" onclick="dlt(${index})" value="Delete">`
        result.innerHTML += `<li>${item} ${edit} ${dlt}</li>`
    })
}

function update(index) {
    let btn = document.querySelector('#btn')
    list[index] = item.value
    console.log(list);
    show()
    item.value = ''
    btn.remove()
}

function updateBtn(index) {
    let todo = document.querySelector('#todo')

    for (let i = 0; i < todo.children.length; i++) {
        const element = todo.children[i];
        if (element.value === 'update') {
            return
        }
    }
    let button = `<input type="button" id="btn" onclick="update(${index})" value="update">`
    todo.insertAdjacentHTML('beforeend', button)

    // const button = document.createElement('input')
    // button.type = 'button';
    // button.value = 'update';
    // button.id = 'btn';
    // button.onclick = function () {
    //     console.log(index);
    //     update(index)

    // }
    // todo.appendChild(button)
}

function edit(index) {
    console.log(index);
    item.value = list[index]
    updateBtn(index)
}



function dlt(index) {
    list.splice(index,1)
    show()
}
