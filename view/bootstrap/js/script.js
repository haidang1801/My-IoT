const temperature = document.getElementById("id-temperature")
const humidity = document.getElementById("id-humidity")
const shine = document.getElementById("id-shine")
const dust = document.getElementById("id-dust")
const colorTemperature = document.getElementById("id-card-temperature");
const colorHumidity = document.getElementById("id-card-humidity")
const colorShine = document.getElementById("id-card-shine")
const colorDust = document.getElementById("id-card-dust")

function changeTemperature(x) {
    if(x <= 25) {
        colorTemperature.style.backgroundColor = "#ee8181"
    } else if( x > 25 && x <= 40) {
        colorTemperature.style.backgroundColor = "#f55d5d"
    } else {
        colorTemperature.style.backgroundColor = "#f42121"
    }
}
function changeHumidity(x) {
    if(x <= 25) {
        colorHumidity.style.backgroundColor =  "#86c5ed"
    } else if( x > 25 && x <= 40) {
        colorHumidity.style.backgroundColor = "#47aded"
    } else {
        colorHumidity.style.backgroundColor = "#0a94ea"
    }
}
function changeShine(x) {
    if(x <= 25) {
        colorShine.style.backgroundColor =  "#9C9900"
    } else if( x > 25 && x <= 80) {
        colorShine.style.backgroundColor = "#F9F400"
    } else {
        colorShine.style.backgroundColor = "#FFFBD1"
    }
}
function changeDust(x) {
    if(x <= 25) {
        colorDust.style.backgroundColor =  "#F1EFEF"
    } else if( x > 25 && x <= 40) {
        colorDust.style.backgroundColor = "#CCC8AA"
    } else {
        colorDust.style.backgroundColor = "#7D7C7C"
    }
}

function ChartDust() {
    fetch('http://localhost:9000/Iot/getAllData')
    .then(function(response) {
        return response.json();
    })
    .then(function (posts) {
        const dataDust = [];
        const dataTime = [];
        for(let key of posts) {
            dataDust.push(key.dust);
            dataTime.push(key.timeHour);
        }
        if(dataTime.length > 10) {
            dataTime.splice(0, dataTime.length-10);
            dataDust.splice(0, dataDust.length-10);
        }
        var du = dust.innerHTML = dataDust[dataDust.length - 1];
        changeDust(du);
        const bgLight1 = document.getElementById("bg-light1");
        const bgLight2 = document.getElementById("bg-light2");
        const bgLight3 = document.getElementById("bg-light3");
        if(du >= 70) {
            bgLight1.classList.toggle("blinking");
            bgLight2.classList.toggle("blinking");
            bgLight3.classList.toggle("blinking");
        }
        var data = {
            labels: dataTime,
            datasets: [
                {
                    label: 'Dust',
                    data: dataDust,
                    yAxisID: 'right-y-axis',
                    borderColor: '#CCC8AA',
                    backgroundColor: 'transparent',
                },
            ],
        };
    
        // Định nghĩa tùy chọn cho biểu đồ
        var options = {
            scales: {
                yAxes: [
                    {
                        id: 'left-y-axis',
                        position: 'left',
                        ticks: {
                            min: 0, // Giá trị tối thiểu trên trục tung
                            max: 200, // Giá trị tối đa trên trục tung
                            stepSize: 5, // Bước giữa các giá trị
                            
                        },
                    },
                    {
                        id: 'right-y-axis',
                        position: 'right',
                        ticks: {
                            min: 0, // Giá trị tối thiểu trên trục tung
                            max: 200, // Giá trị tối đa trên trục tung
                            stepSize: 5 , // Bước giữa các giá trị
                            
                        },
                    },
                ],
                xAxes: [
                    {
                        type: 'category',
                    },
                ],
            },
        };
        // Tạo biểu đồ
        new Chart( "myChartDust", {
            type: 'line',
            data: data,
            options: options,
        });
    })
    .catch(function(err) {
        console.log(err);
    })
}
function Chart() {
    fetch('http://localhost:9000/Iot/getAllData')
    .then(function(response) {
        return response.json();
    })
    .then(function (posts) {
        const dataTemperature = [];
        const dataHumidity = [];
        const dataShine = [];
        const dataTime = [];
        for(let key of posts) {
            dataTemperature.push(key.temperature);
            dataHumidity.push(key.humidity);
            dataShine.push(key.shine);
            dataTime.push(key.timeHour);
        }
        if(dataTime.length > 10) {
            dataTime.splice(0, dataTime.length-10);
            dataTemperature.splice(0, dataTemperature.length-10);
            dataHumidity.splice(0, dataHumidity.length-10);
            dataShine.splice(0, dataShine.length-10);
        }
        var temp = temperature.innerHTML = dataTemperature[dataTemperature.length - 1];
        var humi = humidity.innerHTML = dataHumidity[dataHumidity.length - 1];
        var sh = shine.innerHTML = dataShine[dataShine.length - 1] ;
        changeHumidity(humi);
        changeShine(sh);
        changeTemperature(temp);

        var data = {
            labels: dataTime,
            datasets: [
                {
                    label: 'Temperature',
                    data: dataTemperature,
                    yAxisID: 'left-y-axis',
                    borderColor: 'red',
                    backgroundColor: 'transparent',
                },
                {
                    label: 'Humidity',
                    data: dataHumidity,
                    yAxisID: 'left-y-axis',
                    borderColor: '#47aded',
                    backgroundColor: 'transparent',
                },
                {
                    label: 'Shine',
                    data: dataShine,
                    yAxisID: 'right-y-axis',
                    borderColor: 'rgb(226 217 103)',
                    backgroundColor: 'transparent',
                },
            ],
        };
    
        // Định nghĩa tùy chọn cho biểu đồ
        var options = {
            scales: {
                yAxes: [
                    {
                        id: 'left-y-axis',
                        position: 'left',
                        ticks: {
                            min: 0, // Giá trị tối thiểu trên trục tung
                            max: 200, // Giá trị tối đa trên trục tung
                            stepSize: 5, // Bước giữa các giá trị
                            
                        },
                    },
                    {
                        id: 'right-y-axis',
                        position: 'right',
                        ticks: {
                            min: 0, // Giá trị tối thiểu trên trục tung
                            max: 200, // Giá trị tối đa trên trục tung
                            stepSize: 5 , // Bước giữa các giá trị
                            
                        },
                    },
                ],
                xAxes: [
                    {
                        type: 'category',
                    },
                ],
            },
        };
        // Tạo biểu đồ
        new Chart( "myChart", {
            type: 'line',
            data: data,
            options: options,
        });
    })
    .catch(function(err) {
        console.log(err);
    })
}

setInterval(Chart, 5000);
setInterval(ChartDust, 5000);
let count1 = 0;
const onLampRight = document.querySelector(".light-right");

onLampRight.addEventListener("click", function () {
    // onLampRight.classList.add("off")
    if(onLampRight.classList.contains("off")){
        // console.log("hello")
      
        const postData = "room/lamp,offlampright";

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/text"
            },
            body: JSON.stringify(postData)
        };

        fetch("http://localhost:9000/Iot/controlLamp", requestOptions)
            .then(response => {
                if(!response.ok) {
                    throw new Error(`Lỗi khi gọi API: ${response.status}`);
                }
            
                onLampRight.classList.remove("off")
                return response.json();

            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error("Lỗi: ", error);
            });
        }
    else{
        onLampRight.classList.add("off")
        count1 += 1;
        console.log(count1);
        const postData = "room/lamp,onlampright";
        
        //Tùy chọn của yêu cầu Fetch
        const requestOptions = {
            method: "POST",         //Phương thức POST
            headers: {
                "Content-Type": "application/text"      //Kiểu dữ liệu của nội dung là JSON
            },
            body: JSON.stringify(postData)      //Chuyển đối tượng postData thành chuỗi JSON
        };

        fetch("http://localhost:9000/Iot/controlLamp", requestOptions)
            .then(response => {
                if(!response.ok) {
                    throw new Error(`Lỗi khi gọi API: ${response.status}`);
                }
                return response.json();   // Return JSON from response
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error("Lỗi: ", error);  
            });
    }
})

const onLampLeft = document.querySelector(".light-left");

onLampLeft.addEventListener("click", function () {
    // onLampRight.classList.add("off")
    if(onLampLeft.classList.contains("off")){
        // console.log("hello")
      
        const postData = "room/lamp,offlampleft";

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/text"
            },
            body: JSON.stringify(postData)
        };

        fetch("http://localhost:9000/Iot/controlLamp", requestOptions)
            .then(response => {
                if(!response.ok) {
                    throw new Error(`Lỗi khi gọi API: ${response.status}`);
                }
            
                onLampLeft.classList.remove("off")
                return response.json();

            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error("Lỗi: ", error);
            });
        }
    else{
        onLampLeft.classList.add("off")
        const postData = "room/lamp,onlampleft";
        
        //Tùy chọn của yêu cầu Fetch
        const requestOptions = {
            method: "POST",         //Phương thức POST
            headers: {
                "Content-Type": "application/text"      //Kiểu dữ liệu của nội dung là JSON
            },
            body: JSON.stringify(postData)      //Chuyển đối tượng postData thành chuỗi JSON
        };

        fetch("http://localhost:9000/Iot/controlLamp", requestOptions)
            .then(response => {
                if(!response.ok) {
                    throw new Error(`Lỗi khi gọi API: ${response.status}`);
                }
                return response.json();   // Return JSON from response
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error("Lỗi: ", error);  
            });
    }
})

const onLamp3 = document.querySelector(".light-3");

onLamp3.addEventListener("click", function () {
    // onLampRight.classList.add("off")
    if(onLamp3.classList.contains("off")){
        // console.log("hello")
      
        const postData = "room/lamp,offlamp3";

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/text"
            },
            body: JSON.stringify(postData)
        };

        fetch("http://localhost:9000/Iot/controlLamp", requestOptions)
            .then(response => {
                if(!response.ok) {
                    throw new Error(`Lỗi khi gọi API: ${response.status}`);
                }
            
                onLamp3.classList.remove("off")
                return response.json();

            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error("Lỗi: ", error);
            });
        }
    else{
        onLamp3.classList.add("off")
        const postData = "room/lamp,onlamp3";
        
        //Tùy chọn của yêu cầu Fetch
        const requestOptions = {
            method: "POST",         //Phương thức POST
            headers: {
                "Content-Type": "application/text"      //Kiểu dữ liệu của nội dung là JSON
            },
            body: JSON.stringify(postData)      //Chuyển đối tượng postData thành chuỗi JSON
        };

        fetch("http://localhost:9000/Iot/controlLamp", requestOptions)
            .then(response => {
                if(!response.ok) {
                    throw new Error(`Lỗi khi gọi API: ${response.status}`);
                }
                return response.json();   // Return JSON from response
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error("Lỗi: ", error);  
            });
    }
})