// Add the coffee to local storage with key "coffee"

// let url = `https://masai-mock-api.herokuapp.com/coffee/menu`;

    async function getdata(){

    let url = `https://masai-mock-api.herokuapp.com/coffee/menu`;
    let res = await fetch(url);
    let data = await res.json();

    console.log(data);
 
    return data;

}

       getdata();

       function append(data){

       console.log(data);
        let container = document.getElementById("container");
        data.forEach(function(ele){
        let img = document.createElement("img");
        img.src = ele.description;

        let des = document.createElement("p");
        des.innerText = ele.image;


        container.append(img,des);
     
    });

   
 }



 