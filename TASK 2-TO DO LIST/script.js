var item = document.querySelector("#item")
var todobox=document.querySelector("#to-do-box")
item.addEventListener(
    "keyup",
    function(event){
        if(event.key=="Enter"){
            let cleanlist = this.value.trim();
            if(cleanlist.length>0){
            addtodo(this.value)
            this.value="";
        }
        else
        return;
    }
}
)
const addtodo = item =>{
    const listitem = document.createElement("li");
    listitem.style.wordWrap = "break-word";
    listitem.innerHTML=`
    <div>${item}</div>
    <i class = "fas fa-times"></i>
    `
    listitem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done");
        }
    )
    listitem.querySelector("i").addEventListener(
        "click",
        function(){
            listitem.remove()
        }
    )
    todobox.appendChild(listitem)
}
