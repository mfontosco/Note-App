//function for targeting and creating elements
const userInfo =(el)=> document.querySelector(el);
const createEl =(el)=> document.createElement(el);
const userI =(el)=> document.querySelectorAll(el);



//targeted elements
const displayArticleBtn = userInfo("#sidebar-add-btn");
const removeBtn = userInfo("#discard")
const addBlog = userInfo("#add")
const blogContainer = userInfo(".blog-container")
const removeArticleContainer = userInfo(".fa-times")
const deleteBtn=userI(".fa-trash-can")
const blogArticle=userInfo("article")
const favouriteIcon=userI(".fa-star")
const favourites=userInfo(".favourite")
const blogTitle =userInfo(".title")
const blogText =userInfo("#text")
const discardBtn=userInfo("#discard")
const optionIcon=userI(".fa-ellipsis-v")
const personal =userInfo("#personal")
const work =userInfo("#work")
const social =userInfo("#social");
const important =userInfo("#important")

//Array of different blog items
const favourite=[];
const personalArr = []
const socialArr = []
const workArr = [];
const importantArr =[]

//Add eventlistener
favouriteIcon.forEach(function(btn){
    btn.addEventListener("click",(e)=>{
    let currentTarget=e.target
    currentTarget.classList.toggle("favourite")
     favourite.push(currentTarget.parentElement.parentElement.parentElement.parentElement)
     console.log(favourite)
    })  
})

//show blog-container
displayArticleBtn.addEventListener("click",(e)=>{
 blogContainer.classList.add("showblog-container")
})

//dropdown box
optionIcon.forEach(function(btn){
    btn.addEventListener("click",function(e){
    console.log(e.target)
    let divEl = createEl("div");
    console.log(divEl)
    const divContent=`
       
        <ul class="dropdown">
        <li>Personal<span><i id="personal" class="fa-solid fa-circle-dot"></i></span></li>
                            <li>Work<span><i id="work" class="fa-solid fa-circle-dot"></i></span></li>
                            <li>Social<span><i id="social" class="fa-solid fa-circle-dot"></i></span></li>
                            <li>Important<span><i id="important" class="fa-solid fa-circle-dot"></i></span></li>
                            <li> <i class="fa fa-times"></i></li>
                 </ul>
        `
        divEl.innerHTML=divContent;
        console.log(divEl)
        const rightIcon=userInfo(".right-icon")
        const dropD=userInfo(".dropd")
        rightIcon.insertBefore(divEl,dropD)
        
        divEl.querySelectorAll(".fa-times").forEach(btn=>{btn.addEventListener("click",function(e){
            divEl.remove()
        })

        userInfo("personal")
    })
    })
    //divEl.innerHTML = divContent;


   
})

//remove content in the blog inputs 
discardBtn.addEventListener("click",function(){
    blogTitle.value="";
    blogText.value=""
})
removeArticleContainer.addEventListener("click",()=>{
    blogContainer.classList.remove("showblog-container")
})
deleteBtn.forEach(function(btn){
    btn.addEventListener("click",function(e){
     console.log(e.target)
     let confirmDelete = confirm("Are you sure you want to delete")
     if(confirmDelete == true){btn.parentElement.parentElement.parentElement.remove()}
    })
})

 const date= new Date();
 const day= date.toLocaleDateString();
 console.log(date)
addBlog.addEventListener("click",(e)=>{
if( blogTitle.value==="" &&blogText.value===""){
    alert("All input fields required")
}
    let main = userInfo(".main");
    console.log(main)
    let article = createEl("article");
    article.innerHTML =`<div class="post">
    <h2>${blogTitle.value}</h2>
    <h4>${day}</h4>
    <p class="p">${blogText.value.slice(0,100)}...</p>
  <div class="icons">
    <div class="left-icons">
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-trash-can"></i>
      </div>
      <div class="right-icon">
        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
        <i class="fa-solid fa-circle-dot"></i>
      </div>
      </div>
  </div>`
  
main.appendChild(article)
article.querySelector(".fa-trash-can").addEventListener("click",function(e){
    console.log(e.target)
    let confirmDelete = confirm("Are you sure you want to delete")
    if(confirmDelete == true){
        article.remove()
    }
    
})
    addBlog.parentElement.parentElement.parentElement.parentElement.style.display="none"
})
//function for deleting blog
function deleteBlog(){

   let trashIcon= userI("fa-trash-can");
   trashIcon.forEach(function(btn){
    
   btn.addEventListener("click",e=>{
  
        trashIcon.parentElement.parentElement.parentElement.remove();
    })
   })

   //function for displaying favourite elements
   favourite.map(item=>{
   favourites.addEventListener("click",function(){
    let main = userInfo(".main");
    main.innerHTML =""  
    main.appendChild(item)
   })
   })
   }

//function for creating blog content
function articleContent(){
return `<div class="post">
<h2>Meeting with Kelly</h2>
<h4>11/01/2020</h4>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque molestiae quos nobis modi, reiciendis nulla!</p>
<div class="icons">
<div class="left-icons">
    <i class="fa-regular fa-star"></i>
    <i class="fa-regular fa-trash-can"></i>
  </div>
  <div class="right-icon">
    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
  </div>
  </div>
</div>
 `
}