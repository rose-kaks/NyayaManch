import React from 'react';

// --- MOCK DATA ---
const topDelayData = [
  {
    rank: 1,
    state: "Uttar Pradesh",
    caseType: "Land Disputes",
    subType: "Civil Suits",
    avgDelay: 48, // Months
    pendingCases: "1.2M",
  },
  {
    rank: 2,
    state: "Land Disputes", // Case Type listed as State in the image, keeping consistency
    caseType: "Civil Suits",
    subType: "Bihar",
    avgDelay: 35,
    pendingCases: "950K",
  },
  {
    rank: 3,
    state: "Criminal Cases", // Case Type listed as State in the image, keeping consistency
    caseType: "Civil Suits",
    subType: "Bihar",
    avgDelay: 30,
    pendingCases: "970K",
  },
  {
    rank: 4,
    state: "West Bengal",
    caseType: "Property Cases",
    subType: "Pow Dorumsan",
    avgDelay: 30,
    pendingCases: "600K",
  },
  {
    rank: 5,
    state: "Commercial Disputes", // Case Type listed as State in the image, keeping consistency
    caseType: "Property Cases",
    subType: "Pow Dorumsan",
    avgDelay: 28,
    pendingCases: "420K",
  },
];

const MainDashboardContent = () => {
  // --- STYLES ---
  const styles = {
    // Main Container
    mainContent: {
      flexGrow: 1,
      padding: '30px 40px',
      backgroundColor: '#0d1117', // Dark background
      color: '#c9d1d9', // Light text
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      minHeight: 'calc(100vh - 80px)', // Assuming a top bar of 80px
    },
    
    // Header
    header: {
      fontSize: '28px',
      fontWeight: 600,
      marginBottom: '30px',
      color: '#58a6ff',
    },

    // Top Analysis Grid (Map and Forecast Card)
    topGrid: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr', // Map takes more space than the forecast card
      gap: '40px',
      marginBottom: '40px',
      alignItems: 'start',
    },

    // Map Panel (Simulated with a placeholder image)
    mapPanel: {
      backgroundColor: '#161b22',
      borderRadius: '12px',
      padding: '20px',
      minHeight: '450px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    mapImage: {
      maxWidth: '80%',
      maxHeight: '400px',
      height: 'auto',
      filter: 'drop-shadow(0 0 10px rgba(255, 0, 0, 0.5))', // Add a glow for effect
      opacity: 0.8, // Slightly dimmed to match the dark theme
    },
    mapNote: {
        marginTop: '15px',
        color: '#8b949e',
        fontSize: '14px',
    },

    // Adjournment Forecast Card
    forecastCard: {
      backgroundColor: '#161b22',
      borderRadius: '12px',
      padding: '25px',
      border: '1px solid #30363d',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
      textAlign: 'center',
    },
    forecastHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '15px',
      borderBottom: '1px solid #30363d',
      paddingBottom: '10px',
    },
    forecastTitle: {
      fontSize: '18px',
      fontWeight: 600,
      color: '#58a6ff',
      margin: 0,
    },
    forecastValue: {
      fontSize: '80px',
      fontWeight: 700,
      color: '#ff4d4d', // Red for high probability
      lineHeight: 1,
      margin: '20px 0 10px 0',
    },
    forecastSubtitle: {
      fontSize: '15px',
      color: '#8b949e',
      marginBottom: '20px',
    },
    primaryFactor: {
      fontSize: '14px',
      fontWeight: 500,
      color: '#ff9800',
      padding: '10px',
      backgroundColor: 'rgba(255, 152, 0, 0.1)',
      borderRadius: '6px',
    },
    // Backlog Legend
    backlogLegend: {
        marginTop: '25px',
        fontSize: '12px',
        color: '#8b949e',
        paddingTop: '15px',
        borderTop: '1px dashed #30363d',
    },

    // Bottom Table
    tableHeader: {
      fontSize: '20px',
      fontWeight: 600,
      marginBottom: '15px',
      color: '#a8b2c4',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      backgroundColor: '#161b22',
      borderRadius: '8px',
      overflow: 'hidden',
    },
    th: {
      textAlign: 'left',
      padding: '12px 15px',
      backgroundColor: '#1f3957', // Darker blue header
      color: '#ffffff',
      fontSize: '14px',
      fontWeight: 600,
      borderBottom: '2px solid #30363d',
    },
    td: {
      textAlign: 'left',
      padding: '12px 15px',
      borderBottom: '1px solid #30363d',
      fontSize: '14px',
      color: '#c9d1d9',
    },
    tableRow: {
        transition: 'background-color 0.2s',
        // Hover effect would be done with CSS or state for real React
    },
    // Highlight first row (UP)
    highlightRow: {
        backgroundColor: '#1f395780',
        fontWeight: 'bold',
    }
  };

  const renderTableHeader = () => (
    <thead>
      <tr>
        <th style={styles.th}></th>
        <th style={styles.th}>Top 5 States & Case Types</th>
        <th style={styles.th}>Avg Delay (Months)</th>
        <th style={styles.th}>Pending Cases</th>
      </tr>
    </thead>
  );

  const renderTableBody = () => (
    <tbody>
      {topDelayData.map((data, index) => (
        <tr key={data.rank} style={{ ...styles.tableRow, ...(index === 0 ? styles.highlightRow : {}) }}>
          <td style={styles.td}>{data.rank}</td>
          <td style={styles.td}>
            <div style={{ fontWeight: 'bold', color: '#58a6ff' }}>{data.state}</div>
            <div style={{ fontSize: '12px', color: '#8b949e' }}>{data.caseType} ({data.subType})</div>
          </td>
          <td style={{ ...styles.td, color: index === 0 ? '#ff4d4d' : '#c9d1d9' }}>{data.avgDelay}</td>
          <td style={styles.td}>{data.pendingCases}</td>
        </tr>
      ))}
    </tbody>
  );

  return (
    <div style={styles.mainContent}>
      <h1 style={styles.header}>State-wise Judicial Bottleneck Analysis</h1>

      {/* Top Grid: Map and Adjournment Forecast */}
      <div style={styles.topGrid}>
        
        {/* Map Panel (Simulated) */}
        <div style={styles.mapPanel}>
            {/* The actual map would be rendered here using a library (e.g., Leaflet or D3.js). 
                For simulation, we use an image placeholder and tag. */}
            <img 
                src="https://via.placeholder.com/400x400/8B0000/F0F0F0?text=India+Judicial+Delay+Heatmap" 
                alt="India Judicial Delay Heatmap" 
                style={styles.mapImage} 
            />
            {/* Trigger an image for better visual context */}
            
            <p style={styles.mapNote}>
                Note: This area is a visualization (Choropleth Map) where red indicates high judicial backlog/delay.
            </p>
        </div>

        {/* Adjournment Forecast Card */}
        <div style={styles.forecastCard}>
          <div style={styles.forecastHeader}>
            <h2 style={styles.forecastTitle}>Adjournment Forecast</h2>
            <button style={{ background: 'none', border: 'none', color: '#8b949e', fontSize: '20px', cursor: 'pointer' }}>
              &times;
            </button>
          </div>

          <p style={styles.forecastSubtitle}>for Case ID: 123556</p>
          
          <div style={styles.forecastValue}>45%</div>
          <p style={styles.forecastSubtitle}>Likelihood of Adjournment in next 30 days</p>
          
          <div style={styles.primaryFactor}>
            Primary Factor: **Judge Unavailability**
          </div>

          <div style={styles.backlogLegend}>
            High Backlog (Red) to Low Backlog (Green)
          </div>
        </div>
      </div>

      {/* Bottom Table: Top Delays */}
      <h3 style={styles.tableHeader}>Top 5 States & Case Types with Longest Delays</h3>
      <table style={styles.table}>
        {renderTableHeader()}
        {renderTableBody()}
      </table>
    </div>
  );
};

export default MainDashboardContent;