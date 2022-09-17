let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )


// check if the item in the localStorage is {truthy or falsy}
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

// clear local storage, array, and from the DOM/from display
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    renderLeads()
})

// push the value in the array and store it in the localStorage, also clear the array
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
})

// DOM manipulation. aka => show the values from DOM in the display.
function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}
