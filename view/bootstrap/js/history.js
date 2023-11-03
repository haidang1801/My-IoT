function getTableAllData(){
    fetch('http://localhost:9000/Iot/history?page=1')
        .then(function(response) {
            return response.json();
        })
        .then(function(posts) {
            const tbodyElement = document.querySelector("tbody");
            let string=" ";
            console.log(posts.totalPage);
            const listItem = posts.historyData;
            for(let key of listItem){
                string +=`<tr> <td>${key.id}</td>  <td>${key.name}</td>   <td>${key.action}</td> <td>${key.time}</td> </tr>`;
            }
            //  console.log(string)
            tbodyElement.innerHTML=string;
        })
        .catch(function(err) {
            console.log(err);
        })
   }  
  //  const h1 = document.querySelector("th").innerHTML="60"
getTableAllData();

const first = document.querySelector("#first");
const last = document.querySelector("#last");
const second = document.querySelector("#second");
const sortTimeDesc = document.querySelector("#sortTimeDesc");
const sortTimeAsc = document.querySelector("#sortTimeAsc");
const sortIdDesc = document.querySelector("#sortIdDesc");
const sortIdAsc = document.querySelector("#sortIdAsc");
const pagingDatabase = document.querySelector("#pagingDatabase");
const totalPage = document.getElementById("totalPage");
pagingDatabase.addEventListener('keypress', function(event) {
    if(event.keyCode === 13) {
        const page = pagingDatabase.value;
        console.log(page);
        fetch(`http://localhost:9000/Iot/history?page=${page}`)
            .then(function(response) {
                return response.json();
            })
            .then(function(posts) {
                const tbodyElement = document.querySelector("tbody");
                let string=" ";
                console.log(posts.totalPage);
                const listItem = posts.historyData;
                for(let key of listItem){
                    string +=`<tr> <td>${key.id}</td>  <td>${key.name}</td>   <td>${key.action}</td> <td>${key.time}</td> </tr>`;
                }
                //  console.log(string)
                tbodyElement.innerHTML=string;
                totalPage.innerHTML="/"+posts.totalPage;
            })
    }
})
function dateFormat(input_D, format_D) {
    // input date parsed
    const date = new Date(input_D);

    //extracting parts of date string
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();    

    //to replace month
    format_D = format_D.replace("MM", month.toString().padStart(2,"0"));        

    //to replace year
    if (format_D.indexOf("yyyy") > -1) {
        format_D = format_D.replace("yyyy", year.toString());
    } else if (format_D.indexOf("yy") > -1) {
        format_D = format_D.replace("yy", year.toString().substr(2,2));
    }

    //to replace day
    format_D = format_D.replace("dd", day.toString().padStart(2,"0"));

    return format_D;
}
console.log('Converted date: '+ dateFormat('10/10/2023', 'MM-dd-yyyy'));
function searchDate() {
    const from = dateFormat(document.getElementById("search-date-from").value, 'yyyy-MM-dd');
    const to = dateFormat(document.getElementById("search-date-to").value, 'yyyy-MM-dd');
    console.log(from);
    console.log(to);
    fetch(`http://localhost:9000/Iot/history/searchDate?from=${from}&to=${to}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(posts) {
            const tbodyElement = document.querySelector("tbody");
            let string=" ";
            console.log(1)
            for(let key of posts){
                string +=`<tr> <td>${key.id}</td>  <td>${key.name}</td>   <td>${key.action}</td> <td>${key.time}</td> </tr>`;
            }
            //  console.log(string)
            tbodyElement.innerHTML=string;
        })
        .catch(error => {
            console.error("Lỗi: ", error);
        });
}
first.addEventListener("click", function() {
    fetch('http://localhost:9000/Iot/history?page=1')
        .then(function(response) {
            return response.json();
        })
        .then(function(posts) {
            const tbodyElement = document.querySelector("tbody");
            let string=" ";
            console.log(posts.totalPage);
            const listItem = posts.historyData;
            for(let key of listItem){
                string +=`<tr> <td>${key.id}</td>  <td>${key.name}</td>   <td>${key.action}</td> <td>${key.time}</td> </tr>`;
            }
            //  console.log(string)
            tbodyElement.innerHTML=string;
        })
        .catch(function(err) {
            console.log(err);
        })
})
second.addEventListener("click", function() {
    fetch('http://localhost:9000/Iot/history?page=2')
        .then(function(response) {
            return response.json();
        })
        .then(function(posts) {
            const tbodyElement = document.querySelector("tbody");
            let string=" ";
            console.log(posts.totalPage);
            const listItem = posts.historyData;
            for(let key of listItem){
                string +=`<tr> <td>${key.id}</td>  <td>${key.name}</td>   <td>${key.action}</td> <td>${key.time}</td> </tr>`;
            }
            //  console.log(string)
            tbodyElement.innerHTML=string;
        })
        .catch(function(err) {
            console.log(err);
        })
})
last.addEventListener("click", function() {
    fetch('http://localhost:9000/Iot/history?page=1')
      .then(function(response){
        return response.json();
      }) 
      .then(function(posts){
        let page = posts.totalPage;
        let post = `http://localhost:9000/Iot/history?page=${page}`;
        fetch(post)
          .then(function(response){
              return response.json();
          })
          .then(function(posts){
              const tbodyElement = document.querySelector("tbody");
              let string=" ";
              console.log(posts.totalPage);
              const listItem = posts.historyData;
              for(let key of listItem){
                string +=`<tr> <td>${key.id}</td>  <td>${key.name}</td>   <td>${key.action}</td> <td>${key.time}</td> </tr>`;  
            }
              //  console.log(string)
              tbodyElement.innerHTML=string;
              
          })
          .catch(function(err){
              console.log(err);
          });
      })
})
sortTimeAsc.addEventListener("click", function() {
    fetch('http://localhost:9000/Iot/history/sortAsc?name=time')
        .then(function(response){
            return response.json();
        }) 
        .then(function(posts){
            const tbodyElement = document.querySelector("tbody");
            let string=" ";
            for(let key of posts){
                string +=`<tr> <td>${key.id}</td>  <td>${key.name}</td>   <td>${key.action}</td> <td>${key.time}</td> </tr>`; 
            }
            //  console.log(string)
            tbodyElement.innerHTML=string;
        })
        .catch(function(err){
            console.log(err);
        });   
})
sortTimeDesc.addEventListener("click", function() {
    fetch('http://localhost:9000/Iot/history/sortDesc?name=time')
        .then(function(response){
            return response.json();
        }) 
        .then(function(posts){
            const tbodyElement = document.querySelector("tbody");
            let string=" ";
            for(let key of posts){
                string +=`<tr> <td>${key.id}</td>  <td>${key.name}</td>   <td>${key.action}</td> <td>${key.time}</td> </tr>`; 
            }
            //  console.log(string)
            tbodyElement.innerHTML=string;
        })
        .catch(function(err){
            console.log(err);
        });   
})
sortIdAsc.addEventListener("click", function() {
    fetch('http://localhost:9000/Iot/history/sortAsc?name=id')
        .then(function(response){
            return response.json();
        }) 
        .then(function(posts){
            const tbodyElement = document.querySelector("tbody");
            let string=" ";
            for(let key of posts){
                string +=`<tr> <td>${key.id}</td>  <td>${key.name}</td>   <td>${key.action}</td> <td>${key.time}</td> </tr>`; 
            }
            //  console.log(string)
            tbodyElement.innerHTML=string;
        })
        .catch(function(err){
            console.log(err);
        });   
})
sortIdDesc.addEventListener("click", function() {
    fetch('http://localhost:9000/Iot/history/sortDesc?name=id')
        .then(function(response){
            return response.json();
        }) 
        .then(function(posts){
            const tbodyElement = document.querySelector("tbody");
            let string=" ";
            for(let key of posts){
                string +=`<tr> <td>${key.id}</td>  <td>${key.name}</td>   <td>${key.action}</td> <td>${key.time}</td> </tr>`; 
            }
            //  console.log(string)
            tbodyElement.innerHTML=string;
        })
        .catch(function(err){
            console.log(err);
        });   
})
function search() {
    const searchName = document.getElementById("searchName").value;
    console.log(searchName);
    fetch(`http://localhost:9000/Iot/history/search?name=${searchName}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(posts) {
            const tbodyElement = document.querySelector("tbody");
            let string=" ";
            console.log(1)
            for(let key of posts){
                string +=`<tr> <td>${key.id}</td>  <td>${key.name}</td>   <td>${key.action}</td> <td>${key.time}</td> </tr>`;
            }
            //  console.log(string)
            tbodyElement.innerHTML=string;
        })
        .catch(error => {
            console.error("Lỗi: ", error);
        });
}