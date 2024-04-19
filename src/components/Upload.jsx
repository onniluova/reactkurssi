import {useState} from "react";

const Upload = () => {
  const [file, setFile] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Tiedostoa lähetetään.");
    console.log(event)
    console.log("name", name)
  }

  return <>
    <form onSubmit={handleSubmit}>
      <input type="File" name="tiedosto" onChange={(event) =>
      setFile(event)
      }/>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" onChange={(event) =>
        setName(event.target.value)
      } />
      <button type="submit">Upload file</button>
      <input type="file"/>
    </form>
    </>
}

export default Upload;
