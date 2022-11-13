
window.onload = () => {
    
    var tn = document.createElement("div");
    tn.className = 'topnav';
    tn.id = 'tn2';

    var index = document.createElement('a');
    index.setAttribute('href', 'index.html');
    index.innerHTML = 'Home';

    var perproj = document.createElement('a');
    perproj.setAttribute('href', 'personal-project.html');
    perproj.innerHTML = 'Personal Project';

    var yt = document.createElement('a');
    yt.setAttribute('href', 'https://www.youtube.com/channel/UCyTsNlXNg4TFXzCSlTq1W7A/videos');
    yt.innerHTML = 'Youtube';

    var contacts = document.createElement('a');
    contacts.setAttribute('href', 'contacts.html');
    contacts.innerHTML = 'Contacts';

    var path = window.location.pathname;
    var page = path.split("/").pop();

    switch(page){
        case 'index.html':
            index.className='active';
            break;
        case 'personal-project.html':
            perproj.className='active';
            break;
        case 'contacts.html':
            contacts.className='active';
            break;
        default:
            break;
    }

    tn.appendChild(index);
    tn.appendChild(perproj);
    tn.appendChild(yt);
    tn.appendChild(contacts);

    console.log(tn);
    document.getElementsByTagName('header')[0].appendChild(tn);
}