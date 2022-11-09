window.onload = () => {
    //current page
    var path = window.location.pathname;
    var page = path.split("/").pop();

    fetch('https://kripc2160.github.io/boilerplate.html').en(data=> {
        return data.text()
    }).then(data =>{
        document.getElementById("topnav").innerHTML = data;
    })

}