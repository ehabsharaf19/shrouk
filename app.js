// دالة عرض المقال بنظام العنوان (التوجل)
function displayArticle(title, content) {
    return `
    <div class="article-item">
        <div class="article-header" onclick="this.parentElement.classList.toggle('active')">
            ${title}
        </div>
        <div class="article-content">
            <p>${content}</p>
        </div>
    </div>
    `;
}

// كود سحب المقالات من Firebase
db.collection("articles").get().then((querySnapshot) => {
    const container = document.getElementById('articles-container');
    if(container) {
        container.innerHTML = ""; 
        querySnapshot.forEach((doc) => 
            container.innerHTML += displayArticle(doc.data().title, doc.data().content);

            {
            container.innerHTML += displayArticle(doc.data().title, doc.data().content);
        });
    }
});
