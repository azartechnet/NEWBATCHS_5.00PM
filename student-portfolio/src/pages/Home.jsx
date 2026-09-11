import { useState } from 'react';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="page">
      <h1>Welcome 👋</h1>
      <p>This is my simple React website.</p>
      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
    </div>
  );
}

export default Home;