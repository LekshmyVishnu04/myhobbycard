

function App() {
  const name = "Alex";
  const age = 20;
  let isStudent = true;
  let studentValue;
  if (isStudent) {
    studentValue = isStudent.toString()
  } else {
    studentValue = null
  }
  const hobbilist = [];
  const favoriteHobbies = ["Reading", "Hiking", "Coding"];
  for (let i = 0; i < favoriteHobbies.length; i++) {
    hobbilist.push(<li key={i} style={{
      marginBottom: "8px",
      padding: "8px",
      backgroundColor: "#f2f2f2"
    }}>{favoriteHobbies[i]}</li>)
  }

  const bobbimaplist = favoriteHobbies.map((hobby) => {
    return <li style={{
      marginBottom: "8px",
      padding: "8px",
      backgroundColor: "#e6f2ff"
    }} key={favoriteHobbies.indexOf(hobby)}>{hobby}</li>
  })
  const headingColor = "lightblue";
  const showEnthusiasm = () => {
    document.getElementById("message").innerText =
      "Hello from React! I love my hobbies!";

    document.getElementById("heading").style.backgroundColor = headingColor;
  };
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4 text-center">
            <h1 id="heading"
              style={{
                color: "blue",
                fontSize: "30px",
                fontWeight: "bold"
              }}
            >
              <p>Your name : {name}</p>
              <p>Your Age : {age}</p>
              <p>Are you a student? : {studentValue}</p>
              <p>Your favorite hobbies :</p>
              <ul>
                {hobbilist}
              </ul>
              <p> Your Hobbies List using Map:</p>
              <ul>
                {bobbimaplist}
              </ul>
            </h1>
            <p>
              <button className="btn btn-primary" onClick={showEnthusiasm}>Show Enthusiasm</button>
            </p>
            <p className="mt-3" id="message" >
              Click the button to see my enthusiasm!
            </p>
          </div>
        </div>
      </div>
    </div>


  );
}

export default App;
