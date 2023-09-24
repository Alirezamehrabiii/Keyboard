const input = document.querySelector('input');
const p = document.querySelector('p');
const contianer=document.querySelector('.container');
const key = document.querySelectorAll('#key1');



    input.addEventListener('keydown' , (event)=>{
        
            for(var i =0;i<key.length;i++){
                if(event.code==key[i].title){
                    key[i].classList.toggle('press');
                    
                }
            
            }
})

input.addEventListener('keyup' , (event)=>{
        
    for(var i =0;i<key.length;i++){
        if(event.code==key[i].title ){
            key[i].classList.remove('press');
            
        }
    
    }
})

            
           
        
        




// input.addEventListener('keydown' , (event)=>{
//   if(event.code == 'KeyQ'){
//     key[0].classList.toggle('press')
//   }

// })

// input.addEventListener('keyup' , (event)=>{
//     if(event.code == 'KeyQ'){
//       key[0].classList.remove('press')
//     }
  
//   })
  

