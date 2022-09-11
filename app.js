let item = document.querySelector('#item')
let result = document.querySelector('#result')
let addBtn = document.querySelector('#addBtn')
let todo = document.querySelector('#todo')

let list = []

function addItem(index) {
    if (!item.value) {
        return
    }
    index > -1 ? update(index) : list.push(item.value)
    item.value = ''
    showItems()
}

function showItems() {
    result.innerHTML = ''
    list.map((item, index) => {
        let edit = `<input class="btn button edit" type="button" onclick="editItem(${index})" value="Edit">`
        let dlt = `<input class="btn button delete" type="button" onclick="dltItem(${index})" value="Delete">`
        result.innerHTML += `<li> <div class="list" > ${item} </div> ${edit} ${dlt}</li>`
    })
}

function formSetting(index) {
    if (index > -1) {
        addBtn.innerHTML = 'Update'
        todo.onsubmit = function () {
            addItem(index);
            return false
        }
    } else {
        addBtn.innerHTML = 'Add'
        todo.onsubmit = function () {
            addItem();
            return false
        }
    }
}

function update(index) {
    list[index] = item.value
    formSetting()
}

function editItem(index) {
    item.value = list[index]
    formSetting(index)
}

function dltItem(index) {
    list.splice(index, 1)
    showItems()
}
