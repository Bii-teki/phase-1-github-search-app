document.addEventListener('DOMContentLoaded',function(){


const form = document.getElementById('github-form')
form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    e.preventDefault()
document.getElementById('user-list').innerHTML=""
const inputName= document.getElementById('search')
let user=inputName.value
// let original = user.split(' ').join('')
// remove space

fetch(`https://api.github.com/search/users?q=${user}`,{
headers: {
    Authorization: `Bearer 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`,
  },
})
.then(response=>response.json())
.then(function(data){
//  console.log(data) 
data.items.forEach(function(user){
    
    const ul = document.getElementById('user-list')
    const li =document.createElement('li')
    li.innerHTML =`
    <h4>${user.login}</h4>
    <a href=<img src=${user.avatar_url}>    
    <a href="https://www.github.com/${user.login}"
    target="_blank">
    <img src=${user.avatar_url}> 
 </a>
    `
    ul.appendChild(li)
    const load =document.createElement('button')
    load.innerHTML= `${user.login}`
    li.append(load)
    
    load.addEventListener('click', handleUser)
})
})

}})

function handleUser(e) {
   
  const user = e.target.innerHTML
 
  fetchLinks(user)
}

function fetchLinks(user) {
  fetch(`https://api.github.com/users/${user}/repos`)
   .then(response => response.json())
   .then(data => getLinks(data) )
}


function getLinks(data) {  
   
        const jk = document.getElementById("repos-list");
        data.forEach((char) => {
                const p = document.createElement("a");
                p.classList.add("char");
                p.href = char.html_url;
                p.target = "_blank";
                p.innerText = char.name;
                jk.appendChild(p);
            });
      
     

}

