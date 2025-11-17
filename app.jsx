// ステータス更新
document.getElementById('status').textContent = 'React読み込み完了！';
document.getElementById('status').style.background = '#d4edda';
document.getElementById('status').style.borderColor = '#28a745';

function App() {
  const [count, setCount] = React.useState(0);
  const [message, setMessage] = React.useState('準備完了！');

  const handleClick = () => {
    setCount(count + 1);
    setMessage(`${count + 1}回クリックしました！`);
  };

  return (
    <div>
      <h1>🎉 Reactが動いています！</h1>
      <p style={{ fontSize: '18px', color: '#666' }}>{message}</p>
      <h2 style={{ color: '#007bff', fontSize: '32px' }}>
        カウンター: {count}
      </h2>
      <button onClick={handleClick}>クリックしてください</button>
      <button
        onClick={() => {
          setCount(0);
          setMessage('リセットしました！');
        }}
        style={{ marginLeft: '10px', background: '#6c757d' }}
      >
        リセット
      </button>
    </div>
  );
}

// Reactをマウント
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

console.log('✅ Reactアプリケーションが正常に起動しました！');
