const userInfo =(el)=> document.querySelector(el);

//target html elements

const email=userInfo("#email");
const password=userInfo("#password");
const btn = userInfo("#btn");
const showBtn =userInfo(".fa-eye-slash")



btn.addEventListener("click",function(e){
    e.preventDefault();
    validate()
    })



//toggle between password visibility
showBtn.addEventListener("click",function(e){
    console.log(e.target)
if(password.type ==="password"){
        password.type="text";
    }else{
        password.type="password";
 }   
})

//api
const url="https://jsonplaceholder.typicode.com/users";
//api call
fetch(url)
.then(response=>response.json())
.then(data=>{
    console.log(data)
   
   data.forEach(function(dataItem){
    btn.addEventListener("click",function(e){
        localStorage.setItem("data",JSON.stringify(data))
        e.preventDefault();
        const pswd = 1234;
        if(dataItem.email===email.value && Number(password.value) === pswd){
            setTimeout(()=>{
                window.location.href="index.html"
                alertMessage("login successful","success")
              }, 3000)
           
        }
    
    })
})
}).catch(err=>{
    console.log(err)
})

//validate
function validate(){
    if(!email.value ||!password.value){
        alertMessage("All input field must be field","danger")
        return
   }
}

function alertMessage(message, className){
    const div = document.createElement('div')
          div.className = `alert alert-${className}`
          div.textContent = `
          ${message}
          `

          const container = userInfo(".form-action")
          const calculatorScreen = document.querySelector('#h1')
          container.insertBefore(div, calculatorScreen)

          setTimeout(()=>{
            document.getElementsByClassName('alert')[0].remove()
          }, 3000)
}


