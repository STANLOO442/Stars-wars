fetch('https://swapi.dev/api/people')
.then((res) => res.json())
.then((data)=> {
    const newData = data.results
    console.log(newData[0].name)


    //getting the data of person[0]
    const display1 = document.getElementById('display-1');
    display1.innerHTML=`Name: <span>${newData[0].name}</span><br> Height: <span>${newData[0].height}</span><br> Gender: <span>${newData[0].gender}</span>`
    
    //getting the data of person[1]
    const display2 = document.getElementById('display2');
    display2.innerHTML=`Name: <span>${newData[1].name}</span><br> Height: <span>${newData[1].height}</span><br> Gender: <span>${newData[1].gender}</span>`

        //getting the data of person[2]
        const display3 = document.getElementById('display3');
        display3.innerHTML=`Name: <span>${newData[2].name}</span><br> Height: <span>${newData[2].height}</span><br> Gender: <span>${newData[2].gender}</span>`
    
        //getting the data of person[3]
        const display4 = document.getElementById('display4');
        display4.innerHTML=`Name: <span>${newData[3].name}</span><br> Height: <span>${newData[3].height}</span><br> Gender: <span>${newData[3].gender}</span>`

            //getting the data of person[4]
    const display5 = document.getElementById('display5');
    display5.innerHTML=`Name: <span>${newData[4].name}</span><br> Height: <span>${newData[4].height}</span><br> Gender: <span>${newData[4].gender}</span>`

        //getting the data of person[5]
        const display6 = document.getElementById('display6');
        display6.innerHTML=`Name: <span>${newData[5].name}</span><br> Height: <span>${newData[5].height}</span><br> Gender: <span>${newData[5].gender}</span>`

            //getting the data of person[6]
    const display7 = document.getElementById('display7');
    display7.innerHTML=`Name: <span>${newData[6].name}</span><br> Height: <span>${newData[6].height}</span><br> Gender: <span>${newData[6].gender}</span>`

        //getting the data of person[7]
        const display8 = document.getElementById('display8');
        display8.innerHTML=`Name: <span>${newData[7].name}</span><br> Height: <span>${newData[7].height}</span><br> Gender: <span>${newData[7].gender}</span>`

            //getting the data of person[8]
    const display9 = document.getElementById('display9');
    display9.innerHTML=`Name: <span>${newData[8].name}</span><br> Height: <span>${newData[8].height}</span><br> Gender: <span>${newData[8].gender}</span>`

        //getting the data of person[9]
        const display10 = document.getElementById('display10');
        display10.innerHTML=`Name: <span>${newData[9].name}</span><br> Height: <span>${newData[9].height}</span><br> Gender: <span>${newData[9].gender}</span>`
})
    
   
  




