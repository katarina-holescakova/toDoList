let inputfield = document.getElementById('inputfield');
let addTo=document.getElementById('addToDo');
let doContainer = document.getElementById('toDoContainer');

addTo.addEventListener('click',function(){
  var odstavec=document.createElement('p');
  var kosik=document.createElement('button');
  var hotovo=document.createElement('button');
  kosik.classList.add('button-remove');
  hotovo.classList.add('button-done');

  odstavec.innerText=inputfield.value;
  kosik.innerText='DEL';
  hotovo.innerText='DONE';
  doContainer.appendChild(odstavec);
  odstavec.appendChild(kosik);
  odstavec.appendChild(hotovo);
  inputfield.value="";
   hotovo.addEventListener('click',function(){
    odstavec.style.textDecoration="line-through"
  });
  odstavec.addEventListener('dblclick',function(){
    odstavec.style.textDecoration="none"
  });
 kosik.addEventListener('click',function(){
    doContainer.removeChild(odstavec);
 });
});