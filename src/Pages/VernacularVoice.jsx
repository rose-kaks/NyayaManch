import React, { useState } from "react";

const VernacularVoiceInterface = () => {
  // --- STATE & MOCK DATA ---
  const [isListening, setIsListening] = useState(false);
  const [inputText, setInputText] = useState("");
  const [outputResponse, setOutputResponse] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("Hindi");

  const [history, setHistory] = useState([
    {
      type: "ai",
      text: "नमस्ते। मैं NyayaManch AI हूँ। कृपया अपनी केस जानकारी या कानूनी प्रश्न पूछें।",
      translation: "Hello. I am NyayaManch AI. Please state your case information or legal query.",
    },
  ]);

  const languages = ["Hindi", "Telugu", "Tamil", "Marathi", "Bengali"];

  // --- VOICE INTERACTION LOGIC (SIMULATED) ---
  const toggleListening = () => {
    setIsListening(!isListening);

    // 1. Define the Language Mapping for simulation
    const languageMap = {
      "Hindi": {
        query: "केस संख्या 121556 में देरी क्यों हो रही है?",
        response: "आपकी केस संख्या 121556 में 4 महीने का अनुमानित विलंब है। इसका मुख्य कारण प्रतिवादी द्वारा दस्तावेज़ जमा करने में हुई देरी है।",
        translation: "Your case number 121556 has an estimated delay of 4 months. The primary reason is the delay in submitting documents by the respondent.",
      },
      "Telugu": {
        query: "కేసు సంఖ్య 121556లో ఆలస్యం ఎందుకు అవుతోంది?", // Telugu query
        response: "మీ కేసు సంఖ్య 121556లో 4 నెలల వరకు ఆలస్యం కావచ్చు. దీనికి ప్రధాన కారణం ప్రతివాది పత్రాలను సమర్పించడంలో ఆలస్యం చేయడం.", // Telugu response
        translation: "Your case number 121556 has an estimated delay of 4 months. The primary reason is the delay in submitting documents by the respondent.",
      },
      "Tamil": {
        query: "வழக்கு எண் 121556ல் ஏன் தாமதம் ஏற்படுகிறது?", // Tamil query
        response: "உங்கள் வழக்கு எண் 121556-ல் 4 மாதங்கள் தாமதம் ஏற்பட வாய்ப்புள்ளது. இதற்குக் காரணம் பிரதிவாதி ஆவணங்களைச் சமர்ப்பிப்பதில் தாமதம் செய்வதுதான்.", // Tamil response
        translation: "Your case number 121556 has an estimated delay of 4 months. The primary reason is the delay in submitting documents by the respondent.",
      },
      "Marathi": {
        query: "केस क्रमांक 121556 मध्ये विलंब का होत आहे?", // Marathi query
        response: "तुमच्या केस क्रमांक 121556 मध्ये 4 महिन्यांचा अंदाजित विलंब आहे. याचे मुख्य कारण प्रतिवादीने कागदपत्रे जमा करण्यास विलंब केला आहे.", // Marathi response
        translation: "Your case number 121556 has an estimated delay of 4 months. The primary reason is the delay in submitting documents by the respondent.",
      },
      "Bengali": {
        query: "কেস নম্বর 121556-এ কেন দেরি হচ্ছে?", // Bengali query
        response: "আপনার কেস নম্বর 121556-এ প্রায় 4 মাস বিলম্ব হতে পারে। এর প্রধান কারণ হল বিবাদী কর্তৃক নথি জমা দিতে দেরি হওয়া।", // Bengali response
        translation: "Your case number 121556 has an estimated delay of 4 months. The primary reason is the delay in submitting documents by the respondent.",
      },
    };

    // Fallback to a default English query if language isn't found
    const defaultEntry = {
      query: "Why is there a delay in case number 121556?",
      response: "Simulation failed to load vernacular response for this language.",
      translation: "Simulation failed to load vernacular response for this language.",
    };

    const currentLangData = languageMap[selectedLanguage] || defaultEntry;

    if (!isListening) {
      // Start listening
      setInputText("");
      setOutputResponse("Listening...");

      // Simulate input (2s)
      setTimeout(() => {
        const { query, response, translation } = currentLangData;

        setInputText(query);
        setOutputResponse("Translating and Processing...");

        // Simulate response (2.5s)
        setTimeout(() => {
          setHistory((prev) => [
            ...prev,
            { type: "user", text: query, translation: translation },
            { type: "ai", text: response, translation: translation },
          ]);
          setOutputResponse("Query Resolved.");
          setIsListening(false);
        }, 2500);
      }, 2000);
    } else {
      // Stop listening prematurely
      setOutputResponse("Stopped. Please try again.");
    }
  };

  // --- STYLES (Organized like CSS classes for better UI/UX structure) ---
  const styles = {
    // Global Styles
    page: {
      minHeight: "100vh",
      padding: "40px 20px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: "#0d1117",
      color: "#c9d1d9",
    },
    container: {
      maxWidth: "1400px",
      margin: "0 auto",
    },
    headerSection: {
      marginBottom: 30,
      paddingBottom: 15,
      borderBottom: "1px solid #30363d",
    },
    title: {
      fontSize: 36,
      fontWeight: 700,
      color: "#58a6ff",
      margin: 0,
    },
    subtitle: {
      fontSize: 16,
      color: "#8b949e",
      marginTop: 5,
    },

    // Layout
    contentGrid: {
      display: "grid",
      gridTemplateColumns: "1.7fr 1fr",
      gap: "40px",
      marginTop: "20px",
    },

    // Left Panel: History
    historyPanel: {
      minHeight: "75vh",
      borderRadius: "12px",
      backgroundColor: "#161b22",
      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.4)",
      padding: "30px",
      display: "flex",
      flexDirection: "column",
    },
    historyHeader: {
      fontSize: 20,
      fontWeight: 600,
      color: "#58a6ff",
      marginBottom: 20,
      borderBottom: "2px solid #30363d",
      paddingBottom: 10,
    },
    messageList: {
      flexGrow: 1,
      overflowY: "auto",
      paddingRight: "15px",
    },
    message: {
      padding: "15px",
      borderRadius: "15px",
      marginBottom: "20px",
      maxWidth: "80%",
    },
    userMessage: {
      backgroundColor: "#1f3957",
      marginLeft: "auto",
      textAlign: "right",
      borderBottomRightRadius: "4px",
    },
    aiMessage: {
      backgroundColor: "#11161d",
      textAlign: "left",
      borderBottomLeftRadius: "4px",
      borderLeft: "4px solid #00d1c1",
    },
    vernacularText: {
      fontSize: "17px",
      fontWeight: "500",
      marginBottom: "5px",
      color: "#c9d1d9",
    },
    translationText: {
      fontSize: "13px",
      color: "#8b949e",
      fontStyle: "italic",
    },

    // Right Panel: Controls
    controlPanel: {
      borderRadius: "12px",
      backgroundColor: "#161b22",
      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.4)",
      padding: "30px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "75vh",
    },
    languageSelect: {
      width: "100%",
      marginBottom: "30px",
      padding: "12px",
      borderRadius: "8px",
      border: "1px solid #30363d",
      backgroundColor: "#0d1117",
      color: "#c9d1d9",
      fontSize: "16px",
      cursor: "pointer",
    },
    micButtonWrapper: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    micButton: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      backgroundColor: isListening ? "#ff4d4d" : "#00d1c1", // Red when active, Teal when ready
      color: "#0d1117",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "40px",
      cursor: "pointer",
      zIndex: 10,
      transition: "background-color 0.3s, transform 0.2s",
    },
    pulseRing: {
        position: 'absolute',
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        backgroundColor: isListening ? "rgba(255, 77, 77, 0.3)" : "rgba(0, 209, 193, 0.3)",
        animation: isListening ? "pulse 2s infinite" : "none",
        zIndex: 5,
    },
    statusDisplay: {
      marginTop: "30px",
      fontSize: "20px",
      fontWeight: "600",
      color: isListening ? "#ff9800" : "#c9d1d9",
      minHeight: "24px",
    },
    textArea: {
      width: "100%",
      minHeight: "150px",
      padding: "15px",
      marginTop: "20px",
      borderRadius: "8px",
      border: "1px solid #30363d",
      backgroundColor: "#0d1117",
      color: "#c9d1d9",
      fontSize: "15px",
      resize: "none",
      boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.6)",
    },
    // Keyframes for the pulsing effect (better handled in external CSS, but included here for a single file component)
    pulseStyle: `
      @keyframes pulse {
        0% { transform: scale(1); opacity: 0.8; }
        50% { transform: scale(1.5); opacity: 0; }
        100% { transform: scale(1); opacity: 0.8; }
      }
    `,
  };

  return (
    <div style={styles.page}>
      {/* Inject the keyframes style */}
      <style>{styles.pulseStyle}</style>

      <div style={styles.container}>
        <div style={styles.headerSection}>
          <h1 style={styles.title}>🎙️ Nyaya Vani: Vernacular & Voice Interface</h1>
          <p style={styles.subtitle}>
            Seamlessly interact with NyayaManch AI using voice commands and your preferred native language.
          </p>
        </div>

        <div style={styles.contentGrid}>
          {/* LEFT: Conversation History Panel */}
          <div style={styles.historyPanel}>
            <h3 style={styles.historyHeader}>AI Conversation Log</h3>
            <div style={styles.messageList}>
              {history.map((msg, index) => (
                <div
                  key={index}
                  style={{
                    ...styles.message,
                    ...(msg.type === "user" ? styles.userMessage : styles.aiMessage),
                  }}
                >
                  <div style={styles.vernacularText}>{msg.text}</div>
                  <div style={styles.translationText}>— {msg.translation}</div>
                </div>
              ))}
              {/* Live status message during processing */}
              {isListening && inputText === "" && (
                  <div style={{...styles.message, ...styles.aiMessage, borderLeft: "4px solid #ff9800", opacity: 0.7}}>
                      <div style={styles.vernacularText}>Processing query...</div>
                  </div>
              )}
            </div>
          </div>

          {/* RIGHT: Voice Control Panel */}
          <div style={styles.controlPanel}>
            <label htmlFor="language-select" style={{ marginBottom: 10, fontWeight: "bold", fontSize: 15, color: "#a8b2c4" }}>
              1. Select Vernacular Language
            </label>
            <select
              id="language-select"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              style={styles.languageSelect}
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>

            <label style={{ marginBottom: 20, fontWeight: "bold", fontSize: 15, color: "#a8b2c4" }}>
              2. Tap to Speak Your Query
            </label>

            <div style={styles.micButtonWrapper}>
                {/* Pulsing ring for visual feedback */}
                {isListening && <div style={styles.pulseRing}></div>}

                <div
                style={styles.micButton}
                onClick={toggleListening}
                aria-label={isListening ? "Stop Recording" : "Start Recording"}
                >
                {isListening ? (
                    <span style={{color: '#0d1117'}}>🛑</span> // Red stop icon
                ) : (
                    <span style={{color: '#0d1117'}}>🎤</span> // Teal mic icon
                )}
                </div>
            </div>

            <div style={styles.statusDisplay}>
              {isListening ? (
                <span style={{color: styles.micButton.backgroundColor}}>{`Recording in ${selectedLanguage}...`}</span>
              ) : outputResponse || "Ready for voice command."}
            </div>

            <h4 style={{ marginTop: 30, marginBottom: 10, color: "#58a6ff" }}>
              3. AI Transcription Input
            </h4>
            <textarea
              readOnly
              value={inputText || "Speak into the microphone to see the real-time transcription here..."}
              style={{...styles.textArea, opacity: inputText ? 1 : 0.6 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VernacularVoiceInterface;