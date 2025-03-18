import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToolTask } from './ToolTask/ToolTask';
import { AItheory } from './Theory/AItheory';
import { AILiteracyHome } from './AILiteracyHome/AILiteracyHome';

export const AILiteracy = () => {
  return (
    <Routes>
      <Route path="/" element={<AILiteracyHome />} />
      <Route path="theory" element={<AItheory />} />
      <Route path="tools-tasks" element={<ToolTask />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};



