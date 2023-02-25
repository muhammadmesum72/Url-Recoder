const saveInputEl = document.querySelector('.input-btn')
const inputEl = document.querySelector('.input-el')
const leadsUlEl = document.querySelector('.my-leads-el')
const msg = document.querySelector('.msg')
const clearBtn = document.querySelector('.clear-btn')
// const saveTabBtn = document.querySelector('.save-tab-btn')

let myLeads = []

// const tabs = [
//     {url : 'web.com'}
// ]


// saveTabBtn.addEventListener('click', () => {
//     const tabUrl = tabs[0].url
//     myLeads.push(tabUrl)
//     localStorage.setItem('myLeads', JSON.stringify(myLeads))
//     render(myLeads)
// })

const render = (leads) => {
    let listItems = ''
    for(let i = 0; i < leads.length; i++){
        listItems += `<li> <a href='${leads[i]}' target="_blank">${leads[i]}</a></li>`
    }
    
    leadsUlEl.innerHTML = listItems
}
const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}


clearBtn.addEventListener('click', () => {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

saveInputEl.addEventListener('click', () => {
    if(inputEl.value !== ''){
        const newLead = inputEl.value
        myLeads.push(newLead)
        inputEl.value = ''
        localStorage.setItem('myLeads', JSON.stringify(myLeads))

        render(myLeads)
    } else{
        msg.textContent = 'Please fill the input!'
        setTimeout(() => {
            msg.textContent = ''
        }, 2000);
    }
})



