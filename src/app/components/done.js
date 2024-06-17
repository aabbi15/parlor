// components/DoneMessage.js
import { useEffect, useState } from 'react';

const DoneMessage = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {visible && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-md transition-opacity duration-500">
          Done
        </div>
      )}
    </div>
  );
};

export default DoneMessage;
