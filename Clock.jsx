import { useEffect, useState } from "react";

function AnalogClock() {
  const [time, setTime] = useState(new Date());

  // Best approach - empty dependency array, sets up interval once
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date()); // Update time every second
    }, 1000);

    return () => {
      clearInterval(timer); // Cleanup on unmount
    };
  }, []); // Empty array = runs once on mount

  // Calculate hand rotations based on time
  const seconds = time.getSeconds() * 6; // 360° / 60 seconds = 6° per second
  const minutes = time.getMinutes() * 6 + time.getSeconds() * 0.1; // 6° per minute + slight movement from seconds
  const hours = (time.getHours() % 12) * 30 + time.getMinutes() * 0.5; // 30° per hour + 0.5° per minute

  return (
    <div className="clock" style={{ width: '300px', height: '300px', margin: '50px auto' }}>
      <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
        {/* Clock face - outer circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="white"
          stroke="#333"
          strokeWidth="2"
        />
        
        {/* Hour markers */}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30 - 90) * (Math.PI / 180); // -90 to start at 12 o'clock
          const x1 = 50 + 38 * Math.cos(angle);
          const y1 = 50 + 38 * Math.sin(angle);
          const x2 = 50 + 42 * Math.cos(angle);
          const y2 = 50 + 42 * Math.sin(angle);
          
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#333"
              strokeWidth={i % 3 === 0 ? "2" : "1"} // Thicker lines at 12, 3, 6, 9
            />
          );
        })}
        
        {/* Hour hand */}
        <line
          x1="50"
          y1="50"
          x2={50 + 25 * Math.cos((hours - 90) * (Math.PI / 180))}
          y2={50 + 25 * Math.sin((hours - 90) * (Math.PI / 180))}
          stroke="#333"
          strokeWidth="3"
          strokeLinecap="round"
        />
        
        {/* Minute hand */}
        <line
          x1="50"
          y1="50"
          x2={50 + 35 * Math.cos((minutes - 90) * (Math.PI / 180))}
          y2={50 + 35 * Math.sin((minutes - 90) * (Math.PI / 180))}
          stroke="#666"
          strokeWidth="2"
          strokeLinecap="round"
        />
        
        {/* Second hand */}
        <line
          x1="50"
          y1="50"
          x2={50 + 40 * Math.cos((seconds - 90) * (Math.PI / 180))}
          y2={50 + 40 * Math.sin((seconds - 90) * (Math.PI / 180))}
          stroke="red"
          strokeWidth="1"
          strokeLinecap="round"
        />
        
        {/* Center dot */}
        <circle
          cx="50"
          cy="50"
          r="2"
          fill="#333"
        />
        
        {/* Numbers (optional) */}
        {[...Array(12)].map((_, i) => {
          const number = i === 0 ? 12 : i;
          const angle = (i * 30 - 90) * (Math.PI / 180);
          const x = 50 + 32 * Math.cos(angle);
          const y = 50 + 32 * Math.sin(angle);
          
          return (
            <text
              key={i}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="4"
              fill="#333"
            >
              {number}
            </text>
          );
        })}
      </svg>
    </div>
  );
}

export default AnalogClock;