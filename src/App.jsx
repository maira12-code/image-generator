function App() {
  return (
    <div style={{textAlign:"center",padding:"40px"}}>
      
      <nav style={{
        display:"flex",
        justifyContent:"space-between",
        padding:"20px"
      }}>
        <h2>Image Generator</h2>
        <button>Login</button>
      </nav>

      <h1>AI Image Generator</h1>

      <input
        type="text"
        placeholder="Enter prompt"
        style={{
          padding:"10px",
          width:"300px",
          marginRight:"10px"
        }}
      />

      <button style={{padding:"10px"}}>
        Generate
      </button>

      <div style={{marginTop:"30px"}}>
        <img
          src="https://via.placeholder.com/300"
          alt="generated"
        />
      </div>

    </div>
  )
}

export default App