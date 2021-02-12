
const modalTrigger = document.querySelector('[data-modal]'),
      modal = document.getElementById('createModal'),
      modalCloseBtn = document.querySelector('[data-close]');

      modalTrigger.addEventListener('click', (event) => {
            event.preventDefault()
            modal.classList.toggle('show');
      });

      modalCloseBtn.addEventListener('click', (event) => {
           event.preventDefault()
           modal.classList.toggle('show');
           localStorage.clear();
    });

  

const name1 = document.getElementById('name');

const all =   document.getElementsByClassName('all');
const john =  document.getElementsByClassName('john');
const petr =  document.getElementsByClassName('petr');
const maria = document.getElementsByClassName('maria');


 name1.addEventListener('click', (event) => {
    event.preventDefault();
    if(+name1.value == 1){
        for(let i = 0; i < john.length; i++){
              john[i].classList.add('showEvent');   
        }
        for(let i = 0; i < petr.length; i++){
              petr[i].classList.add('showEvent');
        }
        for(let i = 0; i < maria.length; i++)
              maria[i].classList.add('showEvent');
        }
    if(+name1.value == 2){
        for(let i = 0; i < john.length; i++){
              john[i].classList.add('showEvent');
        }
        for(let i = 0; i < petr.length; i++){
              petr[i].classList.add('hideEvent');
        }
        for(let i = 0; i < maria.length; i++)
              maria[i].classList.add('hideEvent');
        }
    if(+name1.value == 3){
        for(let i = 0; i < john.length; i++){
              john[i].classList.add('hideEvent');
        }
        for(let i = 0; i < petr.length; i++){
              petr[i].classList.add('showEvent');
        }
        for(let i = 0; i < maria.length; i++)
              maria[i].classList.add('hideEvent');
        }
    
    if(+name1.value == 4){
        for(let i = 0; i < john.length; i++){
              john[i].classList.add('hideEvent');
        }
        for(let i = 0; i < petr.length; i++){
              petr[i].classList.add('hideEvent');
        }
        for(let i = 0; i < maria.length; i++)
              maria[i].classList.add('showEvent');
        }    
})




  

const eventPush = document.getElementById('eventPush');
const participant = document.getElementById('participant');
const dayValue = document.getElementById('dayValue');
const timeValue = document.getElementById('timeValue');
const create = document.getElementById('create');


 const  dataRas1 =  document.querySelectorAll('[data-ras1]');
 const  dataRas2 =  document.querySelectorAll('[data-ras2]');
 const  dataRas3 =  document.querySelectorAll('[data-ras3]');
 const  dataRas4 =  document.querySelectorAll('[data-ras4]');
 const  dataRas5 =  document.querySelectorAll('[data-ras5]');
 const  dataRas6 =  document.querySelectorAll('[data-ras6]');
 const  dataRas7 =  document.querySelectorAll('[data-ras7]');
 const  dataRas8 =  document.querySelectorAll('[data-ras8]');
 const  dataRas9 =  document.querySelectorAll('[data-ras9]');
 const  dataRas = [dataRas1, dataRas2, dataRas3, dataRas4, dataRas5, dataRas6, dataRas7, dataRas8, dataRas9];

 const a = [1, 2, 3, 4, 5];
 const b = [1, 2, 3, 4, 5, 6, 7, 8, 9];



create.addEventListener('click', (event) => {
    event.preventDefault();
    const value = eventPush.value;
    const value1 = participant.value;
    const value2 = dayValue.value;
    const value3 = timeValue.value; 


  
    function create (velue3, value2){

        for(let i = 0; i < b.length; i++){
           a.forEach((item, index) => {
            if(value3 == b[i] && value2 == item){
                
                const f = dataRas[i];
                const k = f[index];
            
                if(k.firstElementChild){
                    alert('Error: this event exist!!!!');
                } else {
                const div = document.createElement('div');
                const p = document.createElement('p');
                p.append(value);
                div.append(p);
                const buttonDel = document.createElement('button');
                const textBtn = document.createTextNode('del');
                buttonDel.append(textBtn);
                div.append(buttonDel);
                buttonDel.addEventListener('click', (event) => {
                    event.preventDefault();
                    buttonDel.parentElement.remove(); 

                });
               
                switch(+value1){
                    case 1:
                         div.classList.add('all');
                         k.append(div);
                         break;
                    case 2:
                         div.classList.add('john');  
                         k.append(div);
                         break;
                    case 3:
                         div.classList.add('petr');
                         k.append(div);
                         break
                    case 4: 
                         div.classList.add('maria');
                         k.append(div);   
                         break;     
                } 
            }       
            }
        })
        }
    }

create(value3, value2);

})

   