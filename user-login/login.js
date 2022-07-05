let xhr = new XMLHttpRequest();
userData.onreadystatechange = function() {
    if (xhr == 4 && xhr.status == 200){
        let userData = this.responseText;
        console.log(userData)
    }
}
xhr.open('GET', 'data-user.json', true);
xhr.send();