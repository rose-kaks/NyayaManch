import React, { useState } from "react";
import "./JudgementSummarizer.css";

export default function Summarizer() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [summary, setSummary] = useState("");
  
  const exampleParagraphs = [
    "Lorem ipsum line deserunt tempora fine doloremque through noise neighbors and Mr. Singh, claims filed on Nov 15, 2024.",
    "Lorem ipsum leo et context sed amet trite voluptate minus; house title movement dispute.",
    "Evidence measles seen in limited signed/verified statements found.",
  ];

  const generateSummary = () => {
    setIsProcessing(true);

    setTimeout(() => {
      setSummary(`
Arguments:
The dispute involves land deeds and disagreements. Ms. Sharma filed complaints regarding boundary conflicts and property access with Mr. Singh.

Key Summary:
The submitted evidence supports Ms. Sharma’s ownership rights. Precedent cases strengthen her claim. Timeline verification recommended prior to next hearing.

Powered by NyayaManch AI
      `);
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="sum-wrapper">
      <header className="sum-topbar">
        <h2 className="sum-title">Case: Sharma vs. Singh <span className="case-id">(ID: 121556)</span></h2>
      </header>

      <div className="sum-card glow-card">
        <h3 className="sum-heading">Original Document Text</h3>

        <div className="sum-original-box">
          {exampleParagraphs.map((p, i) => (
            <p key={i} className="sum-original-line">
              <span className="index">{i + 1}.</span> {p}
            </p>
          ))}

          <button
            className="sum-btn-blue"
            onClick={generateSummary}
            disabled={isProcessing}
          >
            {isProcessing ? "Processing..." : "Generate Simple Summary"}
          </button>

          {isProcessing && <p className="sum-processing">✨ AI is analyzing case documents...</p>}
        </div>
      </div>

      {summary && (
        <div className="sum-card glow-card">
          <h3 className="sum-heading">Simplified Summary by NyayaManch AI</h3>
          <pre className="sum-summary-text">{summary}</pre>
        </div>
      )}
    </div>
  );
}
