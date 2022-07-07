
const selectorLista = document.getElementById('list')

const arrayLi = ['1', '2', '3', '4', '5']
arrayLi.forEach(item => {

  console.log(item)
  const li = document.createElement('li')
  li.textContent = item
  selectorLista.appendChild(li)

  li.addEventListener('click', ()=> {
    
    switch (item) {

      case '1':
        li.style.backgroundColor = 'green';
        console.log('click a 1');
        break;

      case '2':
        li.style.backgroundColor = 'green';
        console.log('click a 2');
        break;

      case '3':
        li.style.backgroundColor = 'green';
        console.log('click a 3');
        break;

      case '4':
        li.style.backgroundColor = 'green';
        console.log('click a 4');
        break;

      case '5':
        li.style.backgroundColor = 'green';
        console.log('click a 5');
        break;

      default:
        li.style.backgroundColor = 'green';
        console.log('error no se escogido nada');
      
    }  
  })  
})

const envio = document.getElementById('buttonSend')
envio.addEventListener('click', () => {
  console.log('se ha enviado el formualrio con la respuesta');
})
