var list = document.getElementById("list")

    

function addTodo(){
    var item = document.getElementById("items");
    if (item.value == ""){
        alert("this field can't be empty")
       
    } 
  




    // created LI
    var li = document.createElement('li')
    li.setAttribute("class" , "listing")

    var listText = document.createTextNode(item.value)
    li.appendChild(listText)
  
    //Buttons
    var delbtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delbtn.setAttribute("class" , "sec")
  
    delbtn.setAttribute("onclick" , "deleteItem(this)")
    delbtn.appendChild(delText)

    //Edit Button 


    var editBTN = document.createElement("button")
    var editTEXT = document.createTextNode("EDIT")
    editBTN.setAttribute("class" , "sec")
   

    editBTN.appendChild(editTEXT)
    editBTN.setAttribute("onclick" , "editITEM(this)")



   li.appendChild(delbtn)
    li.appendChild(editBTN)



    list.appendChild(li)
    items.value = ""
   
    
}


function deleteItem(e){
    e.parentNode.remove()
    
}

function deleteALL(){
    list.innerHTML = ""
}

function editITEM(e){
    var val =  e.parentNode.firstChild.nodeValue

    var editValue = prompt("Enter edit value", val)

    e.parentNode.firstChild.nodeValue  = editValue
    console.log(e.parentNode.firstChild)

}
