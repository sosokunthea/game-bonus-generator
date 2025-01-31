// Bonus Generator Logic
document.getElementById('spin-btn').addEventListener('click', function () {
    const bonuses = [
        "🎉 50 Free Spins",
        "💰 100,000 Coins",
        "🛡️ 1 Shield",
        "🔥 3 Pet Food",
        "🌟 10,000 Coins",
        "⚔️ 5 Free Spins",
        "🔮 1 Mystery Box",
        "🛒 20% Discount on Next Purchase",
    ];

    const randomBonus = bonuses[Math.floor(Math.random() * bonuses.length)];
    document.getElementById('result').innerHTML = `<p>🎁 <strong>${randomBonus}</strong></p>`;
});

// Daily Reward Logic
document.getElementById('daily-btn').addEventListener('click', function () {
    alert("🎉 Congratulations! You've claimed your daily reward!");
});
