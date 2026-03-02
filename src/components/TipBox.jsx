import React from 'react';
import { Lightbulb, AlertTriangle, Target } from 'lucide-react';

const styles = {
  tip: { bg: "bg-emerald-900/30", border: "border-emerald-500/50", icon: <Lightbulb size={18} className="text-emerald-400" /> },
  warning: { bg: "bg-amber-900/30", border: "border-amber-500/50", icon: <AlertTriangle size={18} className="text-amber-400" /> },
  analogy: { bg: "bg-purple-900/30", border: "border-purple-500/50", icon: <Target size={18} className="text-purple-400" /> }
};

export default function TipBox({ type = "tip", title, children }) {
  const style = styles[type];
  return (
    <div className={`${style.bg} ${style.border} border rounded-lg p-4 my-4`}>
      <div className="flex items-center gap-2 font-semibold mb-2">
        {style.icon}
        <span>{title}</span>
      </div>
      <div className="text-gray-300 text-sm">{children}</div>
    </div>
  );
}
