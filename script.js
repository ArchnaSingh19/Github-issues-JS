let pageNo = 1;
let issueList = document.getElementById('list');
let pageTitle = document.getElementById('pageTitle');
function getIssue(page) {
    let url = `https://api.github.com/repositories/1296269/issues?page=${page}&per_page=5`;

    fetch(url).then((response) => response.json())
        .then(data => {
            console.log(data);
            issueList.innerHTML = '';
            data.forEach(issue => {
                let listItem = document.createElement('li');
                listItem.textContent = issue.title;
                issueList.appendChild(listItem);
                pageTitle.innerHTML = `Page Number ${page}`;

            });
        }).catch(e => console.error(e));
    /* 
   axios.get(url).then(responce=>{
       console.log(responce.data);
   }) */
    //console.log(url);

}
getIssue(pageNo);


function loadPrev() {
    if (pageNo > 1) {
        pageNo--;
        getIssue(pageNo);
    }

}
function loadNext() {
    pageNo++;
    getIssue(pageNo);
}
