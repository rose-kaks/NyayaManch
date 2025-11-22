import React from "react";
import "./NextStepPredictor.css"; // External CSS

// --- Mock Data ---
const caseData = {
  id: "WP(C) 121556/2025",
  title: "A.R. Sharma vs. Union of India & Ors.",
  court: "High Court of Delhi",
  lastAction: "Respondent filed Counter Affidavit (Due Date: Nov 15)",
  mainRecommendation: "File Rejoinder and Interlocutory Application for Directions",
  recommendationRationale: "Immediate procedural compliance is required. The AI model assigns a 92% procedural strength to the Petitioner's current standing, but this advantage is time-bound. Filing the Rejoinder and a motion for early listing will preempt further delay tactics by the Respondent.",
  delayInMonths: 4,
  adjournmentRisk: 68,
  urgencyDaysRemaining: 14,
  nextHearing: "Dec 1, 2025 (Regular Board)",
  evidenceCompleteness: 94,
  keyTasks: [
    "Finalize draft Rejoinder Affidavit in response to C.A. (Due: Nov 26).",
    "Prepare Index of Documents and list of Authorities.",
    "Draft I.A. for Directions regarding the status of contested Annexure B.",
  ],
  riskMitigation: [
    "The model flags the ambiguity in the Deed of Sale date (Doc-3B) as a potential defense point.",
    "Prepare witness statement for cross-examination regarding jurisdictional query.",
  ],
};

// --- Utility Function (Kept same) ---
const getMetricColor = (value, highIsBad = false) => {
  const CRITICAL_COLOR = "#f44336";
  const WARNING_COLOR = "#FF9800";
  const SUCCESS_COLOR = "#00d1c1"; // Changed to match new Teal accent
  const ACCENT_COLOR = "#58a6ff";

  if (highIsBad) {
    if (value >= 70) return CRITICAL_COLOR;
    if (value >= 50) return WARNING_COLOR;
    return SUCCESS_COLOR;
  } else {
    if (value >= 90) return SUCCESS_COLOR;
    if (value >= 70) return ACCENT_COLOR;
    return WARNING_COLOR;
  }
};

// --- Component ---
const NextStepPredictorPage = () => {
  return (
    <div className="page">
      <div className="mainContent">
        <header className="header"> Predictive Analysis</header>
        <p className="subHeader">Procedural Forecast for: {caseData.title} ({caseData.id})</p>

        <div className="contentContainer">
          {/* LEFT COLUMN */}
          <div className="leftColumn">
            {/* MAIN RECOMMENDATION CARD */}
            <div className="card mainRecommendationCard">
              <div className="cardTitle">★ JUDICIAL PROCEDURE RECOMMENDATION</div>
              <h2>{caseData.mainRecommendation}</h2>
              <p><strong>AI Analysis Rationale:</strong> {caseData.recommendationRationale}</p>
              <div className="proceduralStrength">Procedural Strength: 92%</div>
              <button className="actionButton">Initiate Document Drafting →</button>
            </div>

            {/* CHECKLIST */}
            <div className="card">
              <div className="cardTitle">📋 NEXT PHASE COMPLIANCE CHECKLIST</div>
              <ul className="taskList">
                {caseData.keyTasks.map((task, idx) => (
                  <li key={idx} className="taskItem">✓ {task}</li>
                ))}
              </ul>
            </div>

            {/* RISK MITIGATION */}
            <div className="card">
              <div className="cardTitle critical">🛑 CRITICAL RISK MITIGATION ACTIONS</div>
              <ul className="taskList">
                {caseData.riskMitigation.map((task, idx) => (
                  <li key={idx} className="taskItem critical">! {task}</li>
                ))}
              </ul>
              <p className="detailText italic">
                *Addressing these vulnerabilities is essential before the Dec 1 hearing.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="rightColumn">
            {/* CASE PARTICULARS */}
            <div className="card">
              <p className="cardTitle">⚖️ CASE PARTICULARS</p>
              <div className="summaryRow">
                <p className="detailText">Case ID:</p>
                <p className="detailText bold">{caseData.id}</p>
              </div>
              <div className="summaryRow">
                <p className="detailText">Jurisdiction:</p>
                <p className="detailText bold">{caseData.court}</p>
              </div>
              <div className="summaryRow">
                <p className="detailText">Last Recorded Action:</p>
                <p className="detailText bold">{caseData.lastAction}</p>
              </div>
              <div className="summaryRow">
                <p className="detailText">Next Listing Date:</p>
                <p className="detailText warning">{caseData.nextHearing}</p>
              </div>
            </div>

            {/* ADJOURNMENT PROBABILITY */}
            <div className="card metricCard">
              <p className="cardTitle">ADJOURNMENT PROBABILITY</p>
              <div
                className="metricValue"
                style={{ color: getMetricColor(caseData.adjournmentRisk, true) }}
              >
                {caseData.adjournmentRisk}%
              </div>
              {/* PROGRESS BAR VISUALIZATION */}
              <div className="metricBarContainer">
                <div 
                  className="metricBarFill" 
                  style={{ 
                    width: `${caseData.adjournmentRisk}%`, 
                    backgroundColor: getMetricColor(caseData.adjournmentRisk, true) 
                  }}
                ></div>
              </div>
              <p className="detailText" style={{ color: getMetricColor(caseData.adjournmentRisk, true), fontWeight: 600 }}>
                {caseData.adjournmentRisk >= 70 ? "HIGH RISK (Verify Counsel Availability)" : "MODERATE RISK"}
              </p>
            </div>

            {/* ESTIMATED DELAY */}
            <div className="card metricCard">
              <p className="cardTitle">ESTIMATED LITIGATION DELAY</p>
              <div
                className="metricValue"
                style={{ color: getMetricColor(caseData.delayInMonths * 10, true) }}
              >
                {caseData.delayInMonths} mo
              </div>
              <p className="detailText" style={{ color: getMetricColor(caseData.delayInMonths * 10, true), fontWeight: 600 }}>
                Forecasted Extension to Final Judgment
              </p>
            </div>

            {/* DOCUMENT COMPLETENESS SCORE */}
            <div className="card metricCard">
              <p className="cardTitle">DOCUMENT COMPLETENESS SCORE</p>
              <div
                className="metricValue"
                style={{ color: getMetricColor(caseData.evidenceCompleteness) }}
              >
                {caseData.evidenceCompleteness}%
              </div>
              {/* PROGRESS BAR VISUALIZATION */}
              <div className="metricBarContainer">
                <div 
                  className="metricBarFill" 
                  style={{ 
                    width: `${caseData.evidenceCompleteness}%`, 
                    backgroundColor: getMetricColor(caseData.evidenceCompleteness) 
                  }}
                ></div>
              </div>
              <p className="detailText" style={{ color: getMetricColor(caseData.evidenceCompleteness), fontWeight: 600 }}>
                Required for Procedural Compliance
              </p>
            </div>
          </div>
        </div>

        <p className="detailText note" style={{ textAlign: "center", marginTop: 40 }}>
          The <strong>NyayaManch Predictive Module</strong> provides automated procedural alerts and risk forecasting. All predictions must be validated by practicing legal counsel.
        </p>
      </div>
    </div>
  );
};

export default NextStepPredictorPage;