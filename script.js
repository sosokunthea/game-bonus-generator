document.getElementById('generate-btn').addEventListener('click', function() {
    const bonuses = [
        "10 Gold Coins",
        "5 Health Potions",
        "20% Discount on Next Purchase",
        "1 Rare Item",
        "50 Experience Points"
    ];
    const randomBonus = bonuses[Math.floor(Math.random() * bonuses.length)];
    document.getElementById('bonus-display').textContent = randomBonus;
});