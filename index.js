function getFirstSelector(selector){
  return document.querySelector(selector)
}
function nestedTarget(){
  return document.querySelector('#nested .target')
}
function increaseRankBy(n){
  const rls = document.querySelectorAll(".ranked-list")
  for (let i = 0,l = rls.length ; i < l; i++) {
    let children = rls[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}

function deepestChild(){
  let node = document.querySelector('div#grand-node')
  let nextNode = node.firstElementChild
  while (nextNode) {
    node = nextNode
    nextNode = node.firstElementChild
  }
  return node
}
