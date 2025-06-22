import React from 'react';
import { Hexagon } from 'lucide-react';
import { motion } from 'framer-motion'; // Import motion
import { Link } from 'react-router-dom'; // Import Link

const MemberCard = ({ memberName }) => {
  const cardStyle = `
    w-40 h-48 bg-gray-800 border-2 border-purple-500
    flex flex-col items-center justify-center
    text-center p-4 rounded-lg shadow-lg
    cursor-pointer
  `; // Removed hover styles from here, will be handled by Framer Motion

  // Convert memberName to lowercase for URL (e.g., "RUKA" -> "ruka")
  const memberId = memberName.toLowerCase();

  return (
    <Link to={`/member/${memberId}`}>
      <motion.div
        className={cardStyle}
        whileHover={{
          scale: 1.05,
          borderColor: '#ec4899', // pink-500
          boxShadow: '0 0 15px rgba(236, 72, 153, 0.5)'
        }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <Hexagon size={64} className="text-pink-400 mb-3" />
        <h3 className="text-xl font-semibold text-neutral-100">{memberName || "Member"}</h3>
      </motion.div>
    </Link>
  );
};

export default MemberCard;
