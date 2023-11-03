function getTableAllData(){
    fetch('http://localhost:9000/Iot/database?page=1')
      .then(function(response){
        return response.json();
      }) 
      .then(function(posts){
        let page = posts.page;
        let post = 'http://localhost:9000/Iot/database?page=' + page;
        fetch(post)
          .then(function(response){
              return response.json();
          })
          .then(function(posts){
              const tbodyElement = document.querySelector("tbody");
              let string=" ";
              console.log(posts.totalPage);
              const listItem = posts.listSensorData;
              for(let key of listItem){
                  string +=`<tr> <td>${key.id}</td>  <td>${key.temperature}</td>   <td>${key.humidity}</td>  <td>${key.shine}</td> <td>${key.dust}</td> <td>${key.time}</td> </tr>`;
              }
              //  console.log(string)
              tbodyElement.innerHTML=string;
              
          })
          .catch(function(err){
              console.log(err);
          });
      })
   }  
  //  const h1 = document.querySelector("th").innerHTML="60"
getTableAllData();

const first = document.querySelector("#first");
const last = document.querySelector("#last");
const second = document.querySelector("#second");
const sortTemperatureAsc = document.querySelector("#sortTemperatureAsc");
const sortTemperatureDesc = document.querySelector("#sortTemperatureDesc");
const sortHumidityDesc = document.querySelector("#sortHumidityDesc");
const sortHumidityAsc = document.querySelector("#sortHumidityAsc");
const sortShineDesc = document.querySelector("#sortShineDesc");
const sortShineAsc = document.querySelector("#sortShineAsc");
const sortDustDesc = document.querySelector("#sortDustDesc");
const sortDustAsc = document.querySelector("#sortDustAsc");
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
        fetch(`http://localhost:9000/Iot/database?page=${page}`)
            .then(function(response) {
                return response.json();
            })
            .then(function(posts) {
                const tbodyElement = document.querySelector("tbody");
                let string=" ";
                console.log(posts.totalPage);
                const listItem = posts.listSensorData;
                for(let key of listItem){
                    string +=`<tr> <td>${key.id}</td>  <td>${key.temperature}</td>   <td>${key.humidity}</td>  <td>${key.shine}</td> <td>${key.dust}</td> <td>${key.time}</td> </tr>`;
                }
                //  console.log(string)
                tbodyElement.innerHTML=string;
                totalPage.innerHTML="/"+posts.totalPage;
            })
    }
})
function search() {
    const searchNum = document.getElementById("searchNum").value;
    const searchName = document.getElementById("searchName").value;
    console.log(searchNum);
    console.log(searchName);
    // Sử dụng fetch để gửi yêu cầu tìm kiếm tới Spring Boot
    fetch(`http://localhost:9000/Iot/search?num=${searchNum}&name=${searchName}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(posts) {
            const tbodyElement = document.querySelector("tbody");
            let string=" ";
            console.log(1)
            for(let key of posts){
                string +=`<tr> <td>${key.id}</td>  <td>${key.temperature}</td>   <td>${key.humidity}</td>  <td>${key.shine}</td> <td>${key.dust}</td> <td>${key.time}</td> </tr>`;
            }
            //  console.log(string)
            tbodyElement.innerHTML=string;
        })
        .catch(error => {
            console.error("Lỗi: ", error);
        });
}
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
    fetch(`http://localhost:9000/Iot/searchDate?from=${from}&to=${to}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(posts) {
            const tbodyElement = document.querySelector("tbody");
            let string=" ";
            console.log(1)
            for(let key of posts){
                string +=`<tr> <td>${key.id}</td>  <td>${key.temperature}</td>   <td>${key.humidity}</td>  <td>${key.shine}</td> <td>${key.dust}</td> <td>${key.time}</td> </tr>`;
            }
            //  console.log(string)
            tbodyElement.innerHTML=string;
        })
        .catch(error => {
            console.error("Lỗi: ", error);
        });
}

first.addEventListener("click", function() {
    fetch('http://localhost:9000/Iot/database?page=1')
        .then(function(response) {
            return response.json();
        })
        .then(function(posts) {
            const tbodyElement = document.querySelector("tbody");
            let string=" ";
            console.log(posts.totalPage);
            const listItem = posts.listSensorData;
            for(let key of listItem){
                string +=`<tr> <td>${key.id}</td>  <td>${key.temperature}</td>   <td>${key.humidity}</td>  <td>${key.shine}</td> <td>${key.dust}</td> <td>${key.time}</td> </tr>`;
            }
            //  console.log(string)
            tbodyElement.innerHTML=string;
        })
        .catch(function(err) {
            console.log(err);
        })
})
second.addEventListener("click", function() {
    fetch('http://localhost:9000/Iot/database?page=2')
        .then(function(response) {
            return response.json();
        })
        .then(function(posts) {
            const tbodyElement = document.querySelector("tbody");
            let string=" ";
            console.log(posts.totalPage);
            const listItem = posts.listSensorData;
            for(let key of listItem){
                string +=`<tr> <td>${key.id}</td>  <td>${key.temperature}</td>   <td>${key.humidity}</td>  <td>${key.shine}</td> <td>${key.dust}</td> <td>${key.time}</td> </tr>`;
            }
            //  console.log(string)
            tbodyElement.innerHTML=string;
        })
        .catch(function(err) {
            console.log(err);
        })
})
last.addEventListener("click", function() {
    fetch('http://localhost:9000/Iot/database?page=1')
      .then(function(response){
        return response.json();
      }) 
      .then(function(posts){
        let page = posts.totalPage;
        let post = 'http://localhost:9000/Iot/database?page=' + page;
        fetch(post)
          .then(function(response){
              return response.json();
          })
          .then(function(posts){
              const tbodyElement = document.querySelector("tbody");
              let string=" ";
              console.log(posts.totalPage);
              const listItem = posts.listSensorData;
              for(let key of listItem){
                  string +=`<tr> <td>${key.id}</td>  <td>${key.temperature}</td>   <td>${key.humidity}</td>  <td>${key.shine}</td> <td>${key.dust}</td> <td>${key.time}</td> </tr>`;
              }
              //  console.log(string)
              tbodyElement.innerHTML=string;
              
          })
          .catch(function(err){
              console.log(err);
          });
      })
})
sortTemperatureAsc.addEventListener("click", function() {
    fetch('http://localhost:9000/Iot/sortAsc?name=temperature')
        .then(function(response){
            return response.json();
        }) 
        .then(function(posts){
            const tbodyElement = document.querySelector("tbody");
            let string=" ";
            for(let key of posts){
                string +=`<tr> <td>${key.id}</td>  <td>${key.temperature}</td>   <td>${key.humidity}</td>  <td>${key.shine}</td> <td>${key.dust}</td> <td>${key.time}</td> </tr>`;
            }
            //  console.log(string)
            tbodyElement.innerHTML=string;
        })
        .catch(function(err){
            console.log(err);
        });           
})
sortTemperatureDesc.addEventListener("click", function() {
    fetch('http://localhost:9000/Iot/sortDesc?name=temperature')
        .then(function(response){
            return response.json();
        }) 
        .then(function(posts){
            const tbodyElement = document.querySelector("tbody");
            let string=" ";
            for(let key of posts){
                string +=`<tr> <td>${key.id}</td>  <td>${key.temperature}</td>   <td>${key.humidity}</td>  <td>${key.shine}</td> <td>${key.dust}</td> <td>${key.time}</td> </tr>`;
            }
            //  console.log(string)
            tbodyElement.innerHTML=string;
        })
        .catch(function(err){
            console.log(err);
        });   
})
sortHumidityAsc.addEventListener("click", function() {
    fetch('http://localhost:9000/Iot/sortAsc?name=humidity')
        .then(function(response){
            return response.json();
        }) 
        .then(function(posts){
            const tbodyElement = document.querySelector("tbody");
            let string=" ";
            for(let key of posts){
                string +=`<tr> <td>${key.id}</td>  <td>${key.temperature}</td>   <td>${key.humidity}</td>  <td>${key.shine}</td> <td>${key.dust}</td> <td>${key.time}</td> </tr>`;
            }
            //  console.log(string)
            tbodyElement.innerHTML=string;
        })
        .catch(function(err){
            console.log(err);
        });   
})
sortHumidityDesc.addEventListener("click", function() {
    fetch('http://localhost:9000/Iot/sortDesc?name=humidity')
        .then(function(response){
            return response.json();
        }) 
        .then(function(posts){
            const tbodyElement = document.querySelector("tbody");
            let string=" ";
            for(let key of posts){
                string +=`<tr> <td>${key.id}</td>  <td>${key.temperature}</td>   <td>${key.humidity}</td>  <td>${key.shine}</td> <td>${key.dust}</td> <td>${key.time}</td> </tr>`;
            }
            //  console.log(string)
            tbodyElement.innerHTML=string;
        })
        .catch(function(err){
            console.log(err);
        });   
})
sortShineAsc.addEventListener("click", function() {
    fetch('http://localhost:9000/Iot/sortAsc?name=shine')
        .then(function(response){
            return response.json();
        }) 
        .then(function(posts){
            const tbodyElement = document.querySelector("tbody");
            let string=" ";
            for(let key of posts){
                string +=`<tr> <td>${key.id}</td>  <td>${key.temperature}</td>   <td>${key.humidity}</td>  <td>${key.shine}</td> <td>${key.dust}</td> <td>${key.time}</td> </tr>`;
            }
            //  console.log(string)
            tbodyElement.innerHTML=string;
        })
        .catch(function(err){
            console.log(err);
        });   
})
sortShineDesc.addEventListener("click", function() {
    fetch('http://localhost:9000/Iot/sortDesc?name=shine')
        .then(function(response){
            return response.json();
        }) 
        .then(function(posts){
            const tbodyElement = document.querySelector("tbody");
            let string=" ";
            for(let key of posts){
                string +=`<tr> <td>${key.id}</td>  <td>${key.temperature}</td>   <td>${key.humidity}</td>  <td>${key.shine}</td> <td>${key.dust}</td> <td>${key.time}</td> </tr>`;
            }
            //  console.log(string)
            tbodyElement.innerHTML=string;
        })
        .catch(function(err){
            console.log(err);
        });   
})
sortTimeAsc.addEventListener("click", function() {
    fetch('http://localhost:9000/Iot/sortAsc?name=time')
        .then(function(response){
            return response.json();
        }) 
        .then(function(posts){
            const tbodyElement = document.querySelector("tbody");
            let string=" ";
            for(let key of posts){
                string +=`<tr> <td>${key.id}</td>  <td>${key.temperature}</td>   <td>${key.humidity}</td>  <td>${key.shine}</td> <td>${key.dust}</td> <td>${key.time}</td> </tr>`;
            }
            //  console.log(string)
            tbodyElement.innerHTML=string;
        })
        .catch(function(err){
            console.log(err);
        });   
})
sortTimeDesc.addEventListener("click", function() {
    fetch('http://localhost:9000/Iot/sortDesc?name=time')
        .then(function(response){
            return response.json();
        }) 
        .then(function(posts){
            const tbodyElement = document.querySelector("tbody");
            let string=" ";
            for(let key of posts){
                string +=`<tr> <td>${key.id}</td>  <td>${key.temperature}</td>   <td>${key.humidity}</td>  <td>${key.shine}</td> <td>${key.dust}</td> <td>${key.time}</td> </tr>`;
            }
            //  console.log(string)
            tbodyElement.innerHTML=string;
        })
        .catch(function(err){
            console.log(err);
        });   
})
sortIdAsc.addEventListener("click", function() {
    fetch('http://localhost:9000/Iot/sortAsc?name=id')
        .then(function(response){
            return response.json();
        }) 
        .then(function(posts){
            const tbodyElement = document.querySelector("tbody");
            let string=" ";
            for(let key of posts){
                string +=`<tr> <td>${key.id}</td>  <td>${key.temperature}</td>   <td>${key.humidity}</td>  <td>${key.shine}</td> <td>${key.dust}</td> <td>${key.time}</td> </tr>`;
            }
            //  console.log(string)
            tbodyElement.innerHTML=string;
        })
        .catch(function(err){
            console.log(err);
        });   
})
sortIdDesc.addEventListener("click", function() {
    fetch('http://localhost:9000/Iot/sortDesc?name=id')
        .then(function(response){
            return response.json();
        }) 
        .then(function(posts){
            const tbodyElement = document.querySelector("tbody");
            let string=" ";
            for(let key of posts){
                string +=`<tr> <td>${key.id}</td>  <td>${key.temperature}</td>   <td>${key.humidity}</td>  <td>${key.shine}</td> <td>${key.dust}</td> <td>${key.time}</td> </tr>`;
            }
            //  console.log(string)
            tbodyElement.innerHTML=string;
        })
        .catch(function(err){
            console.log(err);
        });   
})
sortDustAsc.addEventListener("click", function() {
    fetch('http://localhost:9000/Iot/sortAsc?name=dust')
        .then(function(response){
            return response.json();
        }) 
        .then(function(posts){
            const tbodyElement = document.querySelector("tbody");
            let string=" ";
            for(let key of posts){
                string +=`<tr> <td>${key.id}</td>  <td>${key.temperature}</td>   <td>${key.humidity}</td>  <td>${key.shine}</td> <td>${key.dust}</td> <td>${key.time}</td> </tr>`;
            }
            //  console.log(string)
            tbodyElement.innerHTML=string;
        })
        .catch(function(err){
            console.log(err);
        });   
})
sortDustDesc.addEventListener("click", function() {
    fetch('http://localhost:9000/Iot/sortDesc?name=dust')
        .then(function(response){
            return response.json();
        }) 
        .then(function(posts){
            const tbodyElement = document.querySelector("tbody");
            let string=" ";
            for(let key of posts){
                string +=`<tr> <td>${key.id}</td>  <td>${key.temperature}</td>   <td>${key.humidity}</td>  <td>${key.shine}</td> <td>${key.dust}</td> <td>${key.time}</td> </tr>`;
            }
            //  console.log(string)
            tbodyElement.innerHTML=string;
        })
        .catch(function(err){
            console.log(err);
        });   
})