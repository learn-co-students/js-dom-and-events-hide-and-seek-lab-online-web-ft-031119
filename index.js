function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
    return document.querySelector('div.target');
}

function increaseRankBy(n) {
    const lis = document
    .getElementById('app')
    .querySelectorAll('ul.ranked-list li');
   
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString();
  }
}


function deepestChild() {
    let node = document.querySelector('div#grand-node');
    let childNode = node.children[0];
  
    while(childNode) {
      node = childNode;
      childNode = node.children[0];
    }
    return node;
  }