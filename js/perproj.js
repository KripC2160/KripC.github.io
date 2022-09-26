
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
        cell3.appendChild(ftg);
        console.log(ftg.src);
        
        if (ftg.src.slice(-1) != 'g'){ //deletes the img if it's N/A
            ftg.remove();
            cell3.innerHTML = " N / A";
            cell3.className = "ftgna";
        } 
        
        cell1.className = 'logCell';
        cell1.innerHTML = c1_l[x];
        cell2.className = 'logCell';
        cell2.innerHTML = c2_l[x];
        //cell3.appendChild(ftg);
    }

    //adding title to the table 
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "Date";
    cell2.innerHTML = "Note";
    cell3.innerHTML = "Footage";

}
