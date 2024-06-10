
document.addEventListener("DOMContentLoaded", function(){
    code()
})


function code(){
    const submit = document.getElementById("submit-data")
    let table = document.getElementById("data")
    let dataRows = 3
    

    submit.addEventListener("click", function() {
        let i = 1
        let isOldUser = false
        
        do {
            if(dataRows == 0) {
                break
            }
            if(document.querySelector('#row'+i).innerText == document.getElementById("input-username").value) {
                isOldUser = true
                break
            }
            i++
        } while(i <= dataRows)

        let newData = document.createElement("tr")
        let newUser = document.createElement("td")
        newUser.id ="row" + (dataRows + 1)
        let oldUser = document.createElement("td")
        oldUser.id ="row" + i
        let newEmail = document.createElement("td")
        let newAdmin = document.createElement("td")

        newUser.innerText = document.getElementById("input-username").value
        oldUser.innerText = document.getElementById("input-username").value
        newEmail.innerText = document.getElementById("input-email").value

        if(document.getElementById("input-admin").checked){
            newAdmin.innerText = "X"
        } else {
            newAdmin.innerText = "-"
        }
        
        

        if (isOldUser) {
            newData.appendChild(oldUser)
            newData.appendChild(newEmail)
            newData.appendChild(newAdmin)
            let oldData = document.querySelector('#row'+i).parentNode
            table.replaceChild(newData, oldData)
        } else {
            dataRows++
            console.log(dataRows)
            newData.appendChild(newUser)
            newData.appendChild(newEmail)
            newData.appendChild(newAdmin)
            table.appendChild(newData)
        }
        
    })
    
    const empty = document.getElementById("empty-table")
    
    
    empty.addEventListener("click", function(){
        let emptyTable = document.createElement("tbody")
        emptyTable.id = "data"
        table.replaceWith(emptyTable)
        table = document.getElementById("data")
        dataRows = 0
        
    })
}
