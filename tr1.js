let search= document.getElementById('search')
let form = document.querySelector('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let value=search.value
    if(value == "Air Jordan 1High 85 Metallic"){
        window.location.href = './tr3.html'
    }else if(value == "Air Jordan 1 Zoom CMFT 2"){
        window.location.href = './tr4.html'
    }else if(value == "Air Jordan 1 Mid SE"){
        window.location.href = './tr5.html'
    }else if(value == "Air Jordan 1 Low SE"){
        window.location.href = './tr6.html'
    }

    
    
    
    
    else{
        alert("Khong tim thay")
    }
})