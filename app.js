const activities = [
    "جرّب تتعلم جملة جديدة باليابانية 🇯🇵",
    "اعمل كوباية قهوة بطريقة أول مرة تجربها ☕",
    "اقرأ 5 صفحات من كتاب مركون عندك 📚",
    "اتفرج على فيديو وثائقي عن الفضاء 🌌",
    "قوم اعمل 10 ضغط وفوق كدا! 💪"
];

function suggestActivity() {
    const choice = activities[Math.floor(Math.random() * activities.length)];
    alert("ايه رأيك في ده: " + choice);
}
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
// كود جلب المقالات من Firebase ورصها في الموقع
db.collection("articles").get().then((querySnapshot) => {
    const container = document.getElementById('articles-container');
    container.innerHTML = ""; // تنظيف المكان قبل الرص
    
    querySnapshot.forEach((doc) => {
        // بننادي على الدالة اللي إنت كتبتها عشان تعمل العنوان اللي بيفتح ويقفل
        container.innerHTML += displayArticle(doc.data().title, doc.data().content);
    });
});
