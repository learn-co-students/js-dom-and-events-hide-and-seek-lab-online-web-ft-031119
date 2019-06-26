function getFirstSelector(selector) {
 return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')
  for (let i = 0, a = rankedLists.length; i<a; i++) {
    let children = rankedLists[i].children
    for (let b = 0, c = children.length; b<c; b++) {
      children[b].innerHTML = parseInt(children[b].innerHTML) + n
    }
  }
}

function deepestChild() {
  let node = document.getElementById ('grand-node')
  let nextNode = node.children[0]
  while (nextNode) {
    node = nextNode
    nextNode = node.children [0]
  }
  return node
}