
// https://jsonplaceholder.typicode.com/posts

// only for checking console

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response => response.json())
// .then(data => console.log(data)
// )


// @@@ method one create by li

// const titlesList = document.getElementById("titlesList")

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response => response.json())
// .then((data) => {
//     data.forEach(element => {
//          const listItem = document.createElement("li");
    
//     listItem.innerHTML = `
//     title:${element.title}<br>
//     body: ${element.body}`;
//     titlesList.appendChild(listItem);
//     titlesList.style.backgroundColor = "#c8d6d2"
//     });
// })

// @@@ end of method one

// ### method two  create by li

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

// ### end of method two

// %%% method three create by div

// const container = document.getElementById("container")
// container.style.display = "flex"
// container.style.flexWrap = "wrap"
// container.style.justifyContent = "space-around"
// container.style.alignItems = "center"
// container.style.padding = "10px"

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(res => res.json())
// .then(allData => {
//     allData.forEach(ele => {
//         const div = document.createElement("div")
//         container.appendChild(div)
//         div.style.width = "250px"
//         div.style.height = "200px"
//         div.style.backgroundColor = "#696969"
//         div.style.marginBottom = "10px"

//         const divh2 = document.createElement("h2")
//         divh2.style.color = "#fff"
//         divh2.style.fontFamily = "arial"
//         divh2.style.padding = "5px"
//         divh2.innerHTML = "ID:" + " " + ele.id
//         div.appendChild(divh2)

//         const divh4 = document.createElement("h4")
//         divh4.style.color = "#fff"
//         divh4.style.fontFamily = "arial"
//         divh4.style.padding = "5px"
//         divh4.innerHTML = "TITLE:" + " " + ele.title
//         div.appendChild(divh4);

//         const divp = document.createElement("p")
//         divp.style.color = "#fff"
//         divp.style.fontFamily = "arial"
//         divp.style.padding = "5px"
//         // divp.style.overflow = "hidden"
//         divp.innerHTML = "BODY:" + " " + ele.body
//         div.appendChild(divp)
        
//     });
// })

//%%% end of method three

// &&&& method four

// const container = document.getElementById("container")
// container.style.display = "flex" // when connect css, no need to style here.
// container.style.flexWrap = "wrap"
// container.style.justifyContent = "space-around"
// container.style.alignItems = "center"
// container.style.padding = "10px"

// const url = "https://jsonplaceholder.typicode.com/posts"

// fetch(url)
// .then(res => res.json())
// .then(dt => {
//     dt.forEach(element => {
//         const div = document.createElement("div")

//         // div.style.marginBottom = "10px"
//         // div.style.backgroundColor = "#696969"
//         // div.style.padding = "10px"
//         // div.style.color = "#fff"
//         // div.style.width = "200px"
//         // div.style.height = "180px"

//         div.innerHTML = `
//         ID: ${element.id}<br>
//         TITLE: ${element.title}<br>
//         BODY: ${element.body}<br>
//         `

//         container.appendChild(div)
//     });
// })