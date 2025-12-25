const Loader = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#020617",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {/* Spinner */}
      <div
        style={{
          width: "70px",
          height: "70px",
          border: "5px solid rgba(255,255,255,0.15)",
          borderTop: "5px solid #38bdf8",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      />

      {/* Text */}
      <p
        style={{
          marginTop: "24px",
          color: "#94a3b8",
          fontSize: "14px",
          letterSpacing: "1px",
        }}
      >
        Loading Portfolio...
      </p>

      {/* Animation */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
