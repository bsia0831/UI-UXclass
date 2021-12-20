const frame = document.querySelector("#board tbody");

fetch('data.json')
.then(data=>{
    return data.json();
})
.then(json=>{
    console.log(json.data);
    const posts = json.data;

    

    posts.map((data,index)=>{
        console.log(data);

        let tr = document.createElement("tr");      
        tr.innerHTML = `
            <td>${index+1}</td>
            <td>${data.title}</td>
            <td>${data.writer}</td>
            <td>${data.date}</td>
        `  
        frame.prepend(tr);      
       
    })

    
})