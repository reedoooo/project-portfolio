'use strict';

let allFolders = [];

function Folder(name, src) {
  this.name = name;
  this.src = src;

  this.removedFiles = [];
  console.log(this.removedFiles);

  allFolders.push(this);
}

function folderCreator() {
  for (let i = 0; i < allFolders.length; i++) {
    folderLocationClick(allFolders[i].name, allFolders[i].src);
  }
}

function folderLocationClick(id, url) {
  document.getElementById(id).addEventListener('click', function () {
    window.location.href = url;
  });
}

let folderContainer = document.getElementsByClassName('folderRow')[0];

Folder.prototype.renderFolder = function () {

  let renderedFolder = document.createElement('button');

  renderedFolder.innerText = this.name;
  renderedFolder.setAttribute('src', this.src);
  renderedFolder.setAttribute('id', this.name);
  renderedFolder.setAttribute('class', 'folder');

  folderContainer.appendChild(renderedFolder);

};

let newFolder = document.getElementById('addFolders');

newFolder.addEventListener('submit', createNewFolder);

function createNewFolder(event) {
  event.preventDefault();

  let inputOne = event.target.name.value;
  let inputTwo = event.target.src.value;

  let newFolderValues = new Folder(inputOne, inputTwo);

  allFolders.push(newFolderValues);

  newFolderValues.renderFolder();
  folderCreator();
}

let deleteFolder = document.getElementById('deleteFolders');

deleteFolder.addEventListener('submit', this.deleteFolders);

Folder.prototype.deleteFolders = function (event) {
  event.preventDefault();
  let removedFile = event.target.name.value;
  console.log(removedFile);

  this.removedFiles = allFolders.splice(removedFile);

};

allFolders.push(new Folder('folder1', 'https://reedoooo.github.io/Anime-Website/index.html'));
allFolders.push(new Folder('folder2', 'https://reedoooo.github.io/guessing-game/index.html'));
allFolders.push(new Folder('folder3', 'https://reedoooo.github.io/salmon-cookies/index.html'));
allFolders.push(new Folder('folder4', 'https://reedoooo.github.io/chocolate-pizza/'));
allFolders.push(new Folder('folder5', 'https://reedoooo.github.io/odd-duck-product/index.html'));

folderCreator();


// let allFolders = [folderContainer[0].children];
// let projectArray = ['Anime-Website', 'guessing-game', 'salmon-cookies', 'chocolate-pizza', 'odd-duck-product'];
// let projectAddress = ['https://reedoooo.github.io/Anime-Website/index.html', 'https://reedoooo.github.io/guessing-game/index.html', 'https://reedoooo.github.io/salmon-cookies/index.html', 'https://reedoooo.github.io/chocolate-pizza/', 'https://reedoooo.github.io/odd-duck-product/index.html'];

// let siteOne = new Folder('odd-duck-product', 'https://reedoooo.github.io/Anime-Website/index.html')

// let src = projectAddress.indexOf();

// console.log(src);   let src = folderSrc(url);




// function folderCounter() {
//   let folderContainer = document.getElementsByClassName('folderRow');
//   let allFolders = [folderContainer[0].children];
//   let maxFolders = folderContainer[0].childElementCount;
//   //console.log(maxFolders);

//   let projectArray = ['Anime-Website', 'guessing-game', 'salmon-cookies', 'chocolate-pizza', 'odd-duck-product'];
//   let projectAddress = ['https://reedoooo.github.io/Anime-Website/index.html', 'https://reedoooo.github.io/guessing-game/index.html', 'https://reedoooo.github.io/salmon-cookies/index.html', 'https://reedoooo.github.io/chocolate-pizza/', 'https://reedoooo.github.io/odd-duck-product/index.html'];

//   const button = document.querySelector('button');

//   button.addEventListener('click', (event) => {
//     Location.href = projectAddress[0];
//     if (Location.href === onclick().projectAddress[0])
//       console.log(projectAddress);
//   });

//   onclick = (event) => { };

// }

//console.log(folderContainer[0].childElementCount);
//console.log(folderContainer[0]);
//let aFolder = document.getElementsByClassName('folder');



    // for (let i = 0; i < projectArray.length; i++) {
    //   console.log(projectArray.indexOf(i));
    //   if (projectArray.indexOf(i) === projectAddress.indexOf(i)) {
    //     console.log(projectArray.indexOf(i));
    //     location.href = projectAddress.indexOf(i);
    //   }
    //   console.log(projectArray.indexOf(i));

    // }
    // console.log(aFolder);
     //document.getElementsByClassName('folder').onclick = function () {
       //     folderCount.push[folderCount++];


    //   if
    //   console.log(projectAddress[i]);
    // };
// console.log('numFolders');

//  for (let i = 0; i <= numFolders; i++)
//    document.getElementsByClassName('folder').onclick = function () {
//      location.href = 'https://reedoooo.github.io/odd-duck-product/index.html';
//    };


//let allFolders = [];

//let aFolder = document.getElementsByClassName('folder');

//let numFolders = aFolder.children.length;

//let numFolders = parentElement.getElementsByClassName('folder').length;


// function countFolders(folderRow) {
//   let node = folderRow.firstChild;
//   let count = 0;

//   while (node && node !== folderRow) {
//     if (node === 3) {
//       count++;
//       count += countFolders(node);
//     }
//     node = node.nextSibling;
//   }
//   return (count);

// }
//document.getElementById('result').innerHTML += countFolders(document.getElementsByClassName('folderRow'));