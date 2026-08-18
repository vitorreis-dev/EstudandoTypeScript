import "./App.css"
import { useState } from "react";

export default function App() {

  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const rgb = `rgb(${red}, ${green}, ${blue})`

  return (
    <>
    <section className="colors-section">
      <div className="color-div corzinha-r">
        <label htmlFor="red">R</label>
        <input id="red" type="number" min={0} max={255} value={red} onChange={(event) => setRed(Number(event.target.value))}
        />
      </div>

      <div className="color-div corzinha-g">
        <label htmlFor="green">G</label>
        <input id="green" type="number" min={0} max={255} value={green} onChange={(event) => setGreen(Number(event.target.value))}
        />
      </div>

      <div className="color-div corzinha-b">
        <label htmlFor="blue">B</label>
        <input id="blue" type="number" min={0} max={255} value={blue} onChange={(event) => setBlue(Number(event.target.value))}
        />
      </div>
    </section>
    <article className="colorOutput-article" style={{backgroundColor:rgb}}>
       <p>RGB({red},{blue},{green})</p>
    </article>
    </>
  );
}
