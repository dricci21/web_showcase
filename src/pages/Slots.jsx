import React, { useState, useEffect } from 'react';
import '../styles/Slots.css';

const symbols = ['🍋','🍋','🍋','🍋','🍒', '🍒','🍒', '🔔', '🔔', '🔔','🍉','🍉','🍉', '💎','💎',  '7️⃣'];

// Custom payouts for 3 matching symbols
const payouts = {
  '🍋': 100,
  '🍒': 200,
  '🔔': 250,
  '🍉': 300,
  '💎': 500,
  '7️⃣': 1000,
};

const Slots = () => {
  const [slots, setSlots] = useState(['🍒', '🍋', '🔔']);
  const [coins, setCoins] = useState(100);
  const [winMessage, setWinMessage] = useState('');

  const spinSlots = () => {
    if (coins < 10) return;

    const newSlots = Array(3)
      .fill()
      .map(() => symbols[Math.floor(Math.random() * symbols.length)]);

    setSlots(newSlots);
    setCoins(coins - 10); // Deduct spin cost first

    // Check if all 3 match
    if (newSlots[0] === newSlots[1] && newSlots[1] === newSlots[2]) {
      const matchedSymbol = newSlots[0];
      const payout = payouts[matchedSymbol] || 0;
      setCoins(prev => prev + payout);
      setWinMessage(`🎉 You won ${payout} coins with ${matchedSymbol}${matchedSymbol}${matchedSymbol}!`);
    } else {
      setWinMessage('');
    }
  };

  const earnCoins = () => {
    setCoins(coins + 1);
  };

  // Clear win message after 3 seconds
  useEffect(() => {
    if (winMessage) {
      const timeout = setTimeout(() => setWinMessage(''), 3000);
      return () => clearTimeout(timeout);
    }
  }, [winMessage]);

  return (
    <div className="slot-container">
      <h1>🎰 Slot Machine</h1>
      <div className="coins">Coins 🪙: {coins}</div>

      <div className="slots">
        {slots.map((symbol, index) => (
          <div key={index} className="slot">{symbol}</div>
        ))}
      </div>

      <div className="buttons">
        <button onClick={spinSlots} disabled={coins < 10}>
          Spin (-10)
        </button>
        <button onClick={earnCoins}>Earn Coins (+1)</button>
      </div>

      {winMessage && <div className="win-message">{winMessage}</div>}
      {coins < 10 && !winMessage && (
        <p className="warning">Not enough coins to spin! Earn more to play.</p>
      )}
            <div className="payout-table">
        <h2>Payouts</h2>
        <ul>
          {Object.entries(payouts).map(([symbol, amount]) => (
            <li key={symbol}>
              {symbol} {symbol} {symbol} — {amount} 🪙
            </li>
          ))}
        </ul>
      </div>

    </div>
    
  );
};

export default Slots;
