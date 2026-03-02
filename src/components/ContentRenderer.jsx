import React from 'react';
import TipBox from './TipBox';
import CodeBlock from './CodeBlock';

export default function ContentRenderer({ content, analogy, tip }) {
  const renderContent = (text) => {
    const lines = text.split('\n');
    const elements = [];
    let inTable = false;
    let tableRows = [];
    let inCodeBlock = false;
    let codeContent = [];

    lines.forEach((line, idx) => {
      if (line.trim().startsWith('```')) {
        if (inCodeBlock) {
          elements.push(<CodeBlock key={`code-${idx}`}>{codeContent.join('\n')}</CodeBlock>);
          codeContent = [];
          inCodeBlock = false;
        } else {
          inCodeBlock = true;
        }
        return;
      }

      if (inCodeBlock) {
        codeContent.push(line);
        return;
      }

      if (line.includes('|') && line.trim().startsWith('|')) {
        if (!inTable) {
          inTable = true;
          tableRows = [];
        }
        if (!line.includes('---')) {
          tableRows.push(line.split('|').filter(cell => cell.trim()).map(cell => cell.trim()));
        }
        return;
      } else if (inTable) {
        elements.push(
          <div key={`table-${idx}`} className="overflow-x-auto my-4">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-800">
                  {tableRows[0]?.map((cell, i) => (
                    <th key={i} className="border border-gray-600 px-3 py-2 text-left font-semibold">{cell}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.slice(1).map((row, rowIdx) => (
                  <tr key={rowIdx} className="hover:bg-gray-800/50">
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx} className="border border-gray-700 px-3 py-2">
                        {cell.startsWith('`') ? <code className="bg-gray-800 px-1 rounded text-teal-400">{cell.replace(/`/g, '')}</code> : cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        inTable = false;
        tableRows = [];
      }

      if (line.trim()) {
        const formatted = line
          .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white">$1</strong>')
          .replace(/\*(.+?)\*/g, '<em>$1</em>')
          .replace(/`(.+?)`/g, '<code class="bg-gray-800 px-1 rounded text-teal-400 text-sm">$1</code>');

        if (line.startsWith('\u2022')) {
          elements.push(
            <div key={idx} className="flex gap-2 ml-4 my-1">
              <span className="text-teal-400">&bull;</span>
              <span dangerouslySetInnerHTML={{ __html: formatted.substring(1) }} />
            </div>
          );
        } else if (/^\d+\./.test(line)) {
          const num = line.match(/^(\d+)\./)[1];
          elements.push(
            <div key={idx} className="flex gap-2 ml-4 my-1">
              <span className="text-teal-400 font-semibold min-w-[1.5rem]">{num}.</span>
              <span dangerouslySetInnerHTML={{ __html: formatted.replace(/^\d+\.\s*/, '') }} />
            </div>
          );
        } else {
          elements.push(<p key={idx} className="my-2" dangerouslySetInnerHTML={{ __html: formatted }} />);
        }
      }
    });

    if (inTable && tableRows.length > 0) {
      elements.push(
        <div key="table-end" className="overflow-x-auto my-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-800">
                {tableRows[0]?.map((cell, i) => (
                  <th key={i} className="border border-gray-600 px-3 py-2 text-left font-semibold">{cell}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.slice(1).map((row, rowIdx) => (
                <tr key={rowIdx} className="hover:bg-gray-800/50">
                  {row.map((cell, cellIdx) => (
                    <td key={cellIdx} className="border border-gray-700 px-3 py-2">
                      {cell.startsWith('`') ? <code className="bg-gray-800 px-1 rounded text-teal-400">{cell.replace(/`/g, '')}</code> : cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    return elements;
  };

  return (
    <div className="text-gray-300">
      {renderContent(content)}
      {analogy && <TipBox type="analogy" title="Analogy">{analogy}</TipBox>}
      {tip && <TipBox type="tip" title="Pro Tip">{tip}</TipBox>}
    </div>
  );
}
