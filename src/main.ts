// solution goes here 

let state = {
    images: [],
}


type comment = {
    id: number
    content: string
    imageId: number
}
type image = {
    id: number
    title:string
    likes:number
    image:string
    comments: comment[]
}

type State = {
    images:image[]
}
function getimagesfromsrv (){
    fetch('http://localhost:3000/images')
    .then(resp => resp.json())
    .then(imgfromsrv => {

        state.images = imgfromsrv;
    })

}


function render () {

    let sectioncontainer = document.querySelector(".image-container");
    if(sectioncontainer === null) return

for (let image of state.images){



let articleel = document.createElement('article')
articleel.className = "image-card"

let titleEl = document.createElement('h2')
titleEl.className = "title"
titleEl.innerText = "Title of image"

let imageEl = document.createElement('img')
imageEl.className = "image"
imageEl.src = "./assets/image-placeholder.jpg"

let likesdivel = document.createElement('div')
likesdivel.className = "likes-section"

let likespanel = document.createElement('span')
likespanel.className = "likes"
likespanel.innerText = "0 likes"


let likebtnel = document.createElement('button')
likebtnel.className = "like-button"

let comentulel = document.createElement('ul')
comentulel.className ="comments"

let commentliel = document.createElement('li')
commentliel.innerText = "comment 1 "


comentulel.append(commentliel)
likesdivel.append(likespanel , likebtnel)

articleel.append(titleEl, imageEl ,likespanel , comentulel)

sectioncontainer.append(articleel)

  }
 }
getimagesfromsrv()
render()