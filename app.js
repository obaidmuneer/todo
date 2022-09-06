
let item = document.querySelector('#item')
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
        let edit = `<input class="btn button edit" type="button" onclick="edit(${index})" value="Edit">`
        let dlt = `<input class="btn button delete" type="button" onclick="dlt(${index})" value="Delete">`
        result.innerHTML += `<li> <div class="list" > ${item} </div> ${edit} ${dlt}</li>`
    })
}

function update(index) {
    let updatebtn = document.querySelector('#updatebtn')
    list[index] = item.value
    console.log(list);
    show()
    item.value = ''
    updatebtn.remove()
}

function updateBtn(index) {
    let todo = document.querySelector('#todo')

    for (let i = 0; i < todo.children.length; i++) {
        const element = todo.children[i];
        if (element.value === 'Update') {
            return
        }
    }
    let button = `<input type="button" class="btn update button" id="updatebtn" onclick="update(${index})" value="Update">`
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
    list.splice(index, 1)
    show()
}