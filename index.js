function  getFirstSelector(selector){
  return document.querySelector(selector);
}


function nestedTarget(){
  let element = document.querySelector('#nested .target')
  return element
}

function increaseRankBy(value){
  const elements = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = elements.length; i < l; i++) {
     let children = elements[i].children

      for (let j = 0, k = children.length; j < k; j++) {
       children[j].innerHTML = parseInt(children[j].innerHTML) + value
     }
   }
 }

function deepestChild(){
return document.querySelector('#grand-node').querySelectorAll('div')[3]
}
