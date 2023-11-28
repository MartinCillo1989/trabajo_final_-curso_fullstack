const form = document.querySelector('form')
const email = document.getElementById('email')
const password = document.getElementById('password')

form.addEventListener('submit',(event)=>{
    console.log('user',submit)
    event.preventDefault()
    fetch('http://localhost:3000/api/user/login',{
        method:'POST',
        body:JSON.stringify({
            email:email.value,
            password:password.value,
            photoURL:photoURL.value,
            name:nombre.value,
        }),
        headers:{
            "Content-Type": "application/json",
        }
    }).then((res)=>{
        console.log('res:',res)
    })
})