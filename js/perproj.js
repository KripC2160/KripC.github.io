
window.onload = function(){

    let counter = 0;
    var c1_l = [];
    var c2_l = [];
    var c3_l = [];

    for (let i = 0; i < log.length; i++) {
        //log[i].SOMETHINGSOMETHIN
        //if (log[i].status === '0') counter++;
        counter++;
        console.log(log[i]);
        c1_l.push(log[i].Date);
        c2_l.push(log[i].Note);
        c3_l.push(log[i].Footage);
    } 

    console.log(c1_l, c2_l, c3_l);
    var table = document.getElementById("table");

    //reversing the array so it comes out in a right timeline
    c1_l.reverse();
    c2_l.reverse();
    c3_l.reverse();

    for(let x = 0; x < counter; x++){
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        
        //image
        var ftg = document.createElement("img");
        ftg.className = "ftgclass";
        ftg.src = c3_l[x];
        ftg.setAttribute("loading", "lazy");
        cell3.appendChild(ftg);
        console.log(ftg.src);
        
        if (ftg.src.slice(-1) != 'g'){ //deletes the img if it's N/A
            ftg.remove();
            ftg = document.createElement("p");
            ftg.innerHTML = "N / A";
            ftg.id = 'pid->'+c1_l[x]; // added id just in case n/a needs to be removed
            cell3.appendChild(ftg);
            cell3.className = "ftgna";
        } 
        
        cell1.className = 'logCell';
        cell1.innerHTML = c1_l[x];
        cell2.className = 'logCell';
        cell2.innerHTML = c2_l[x];
        //cell3.appendChild(ftg);
        cell3.id = 'cell->'+c1_l[x];
    }

    //adding title to the table 
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.className = 'tableHeading';
    cell2.className = 'tableHeading';
    cell3.className = 'tableHeading';
    
    cell1.innerHTML = "Date";
    cell2.innerHTML = "Note";
    cell3.innerHTML = "Footage";

    //EDIT SECTION
    document.getElementById('pid->2022/9/9').remove();
    var D20220909V1 = document.createElement('img');
    D20220909V1.style = 'width:70%; height:70%; display:block; align-items: center; margin: auto; padding: 10px;';
    D20220909V1.src = 'img/logimg/audftg1.jpeg';
    D20220909V1.setAttribute("loading", "lazy");
    document.getElementById('cell->2022/9/9').appendChild(D20220909V1);

    var D20220909V2 = document.createElement('img');
    D20220909V2.style = 'width:70%; height:70%; display:block; align-items: center; margin: auto; padding: 10px;';
    D20220909V2.src = 'img/logimg/audftg2.jpeg';
    D20220909V2.setAttribute("loading", "lazy");
    document.getElementById('cell->2022/9/9').appendChild(D20220909V2);

    document.getElementById('pid->2022/9/26').remove();
    var D2022926 = document.createElement("audio");
    D2022926.setAttribute("src", "img/logimg/BUZZ VOICE RAW.mp3");
    D2022926.setAttribute("controls", "controls");
    document.getElementById('cell->2022/9/26').appendChild(D2022926);

    var D2022927 = document.createElement("audio");
    D2022927.setAttribute("src","img/logimg/ASTRONAUT 1.mp3");
    D2022927.setAttribute("controls", "controls");
    document.getElementById('cell->2022/9/27').appendChild(D2022927);


}
