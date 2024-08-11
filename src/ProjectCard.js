import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, image }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="p-4 bg-gray-100 shadow-lg rounded-lg"
    >
      <h2 className="text-xl font-bold mt-4 text-gray-600">{title}</h2>
      <p className="mt-2 text-gray-600">{description}</p>
    </motion.div>
  );
};

export default ProjectCard;
