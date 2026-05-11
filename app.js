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
