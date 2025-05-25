
//https:jsonplaceholder.typicode.com/posts


// fetch("https:jsonplaceholder.typicode.com/posts")
// .then(res => res.json())
// .then(dt => console.log(dt)
// )

// method one: creating li and ol

// const titlesList = document.getElementById("titlesList")

// fetch("https://jsonplaceholder.typicode.com/todos")
// .then(res => res.json())
// .then(data =>{
//     data.forEach(element => {
//         const listItem = document.createElement("li")

//         listItem.innerHTML = `
//         id: ${element.id}
//         title: ${element.title}<br>
//         completed: ${element.completed} `;
        
//         titlesList.appendChild(listItem);
//     });
// })

// const listTitle = document.getElementById("titlesList")

// fetch("https://jsonplaceholder.typicode.com/todos")
// .then(res => res.json())
// .then(dt => {
//     dt.forEach(element => {
//         const list = document.createElement("li")

//         list.innerHTML = `
//         id: ${element.id}<br>
//         title: ${element.title}<br>
//         completed: ${element.completed}
//         `

//         listTitle.appendChild(list)
//     });
// })

// li creating method two

// const olList = document.getElementById("titlesList");

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((response) => response.json())
// .then((data) =>{
//     data.forEach(post => {
//         const liList = document.createElement("li")
//         olList.appendChild(liList)
//         liList.style.width = "100%"
//         liList.style.height = "150px"
//         liList.style.backgroundColor = "#c8d6d9"
//         liList.style.padding = " 0 10px "

        
//         const lih2 = document.createElement("h2")
//         lih2.innerHTML = "Title:" + " " + post.title
//         lih2.style.marginBottom = "10px"
//         liList.appendChild(lih2)

//         const lip = document.createElement("p")
//         lip.innerHTML = "Body:" + " " + post.body
//         liList.appendChild(lip)
//     });
// })

// const listTitle = document.getElementById("titlesList")

// fetch("https://jsonplaceholder.typicode.com/todos")
// .then(res => res.json())
// .then(dt => {
//     dt.forEach(element => {
//         const liLst = document.createElement("li")
//         listTitle.appendChild(liLst)

//         const lih2 = document.createElement("h2")
//         liLst.appendChild(lih2)
//         lih2.innerHTML = "ID:" + " " + element.id

//         const lih3 = document.createElement("h3")
//         liLst.appendChild(lih3)
//         lih3.innerHTML = "Title:" + " " + element.title

//         const liP = document.createElement("p")
//         liLst.appendChild(liP)
//         liP.innerHTML = "Body:" + " " + element.completed
//     });
// })

// const listTitle = document.getElementById("titlesList")

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
// .then(dt => {
//     dt.forEach(element => {
//         const list = document.createElement("li")
//         listTitle.appendChild(list)
//         const lih2 = document.createElement("h2")
//         list.appendChild(lih2)
//         lih2.innerHTML = `
//         Id: ${element.id}
//         `
//         const lih3 = document.createElement("h3")
//         list.appendChild(lih3)
//         lih3.innerHTML = `
//         Name: ${element.name}
//         `
//         const lih4 = document.createElement("h4")
//         list.appendChild(lih4)
//         lih4.innerHTML = `
//         UserName: ${element.username}
//         `
//         const lip = document.createElement("p")
//         list.appendChild(lip)
//         lip.innerHTML = `
//         Address: ${element.address}
//         `
//     });
// })

// const listTitle = document.getElementById("titlesList")

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
// .then(data => {
//     data.forEach(element => {
//         const listLi = document.createElement("li")
//         listTitle.appendChild(listLi)

//         const lih2 = document.createElement("h2")
//         listLi.appendChild(lih2)
//         lih2.innerHTML = "Id:" + " " + element.id 

//         const lih3 = document.createElement("h3")
//         listLi.appendChild(lih3)
//         lih3.innerHTML = "Name" + " " + element.name

//         const lih4 = document.createElement("h4")
//         listLi.appendChild(lih4)
//         lih4.innerHTML = "UserName:" + " " + element.username

//         const lip = document.createElement("p")
//         listLi.appendChild(lip)
//         lip.innerHTML = "Address: " + "" + element.address 

//     });
// })

// $$$$ method three creating div

// const container = document.getElementById("container")

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
// .then(dt => {
//     dt.forEach(element => {
//         const newDiv = document.createElement("div")
//         container.appendChild(newDiv)

//         const divH2 = document.createElement("h2")
//         newDiv.appendChild(divH2)
//         divH2.innerHTML = `
//         Id: ${element.id}
//         `

//         const divH3 = document.createElement("h3")
//         newDiv.appendChild(divH3)
//         divH3.innerHTML = `
//         Name: ${element.name}
//         `

//         const divH4 = document.createElement("h4")
//         newDiv.appendChild(divH4)
//         divH4.innerHTML = `
//         UserName: ${element.username}
//         `

//         const divp = document.createElement("p")
//         newDiv.appendChild(divp)
//         divp.innerHTML = `
//         Email: ${element.email}
//         `
//     });
// })

// const dataList = document.getElementById("titlesList")

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
// .then(data => {
//     data.forEach(element => {
//         const liList = document.createElement("li")
//         dataList.appendChild(liList)

//         liList.innerHTML = `
//         Id: ${element.id}<br>
//         Name: ${element.name}
//         `
//     });
// })

// const dataList = document.getElementById("titlesList")

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
// .then(dt => {
//     dt.forEach(element => {
//         const list = document.createElement("li")
//         dataList.appendChild(list)

//         const lih2 = document.createElement("h2")
//         list.appendChild(lih2)
//         // lih2.innerHTML = "Id: " + "" + element.id // or
//         lih2.innerHTML = `id: ${element.id}`

//     });
// })

// const container = document.getElementById("container")

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
// .then(dt => {
//     dt.forEach(element => {
//         const newDiv = document.createElement("div")
//         container.appendChild(newDiv)

//         const divh2 = document.createElement("h2")
//         newDiv.appendChild(divh2)
//         // divh2.innerHTML = "id: " + "" + element.id
//         divh2.innerHTML = `
//         ID: ${element.id}`
//     });
// })

const container = document.getElementById("container")

const url = "https://jsonplaceholder.typicode.com/users"

fetch(url)
.then(res => res.json())
.then(dt => {
    dt.forEach(element => {
        const newDiv = document.createElement("div")
        container.appendChild(newDiv)

        const divh2 = document.createElement("h2")
        newDiv.appendChild(divh2)
        divh2.innerHTML = `
        Id: ${element.id}`

        const divh3 = document.createElement("h2")
        newDiv.appendChild(divh3)
        divh3.innerHTML = `
        Name: ${element.name}`
    });
})