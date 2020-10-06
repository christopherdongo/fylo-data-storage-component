//variables
const range = document.querySelector('#range')
const storage = document.querySelector('#storage-cloud')


range.addEventListener('input', function(e){
    console.log(e.target.value)
    let newvalor = 1000- e.target.value
    //
    storage.textContent = newvalor
  
    
})