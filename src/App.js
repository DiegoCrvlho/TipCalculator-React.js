import { useState } from "react";
import "./styles.css";

export default function App() {
  const [bill, setBill] = useState("");
  const [service1, setService1] = useState(0);
  const [service2, setService2] = useState(0);

  const tip = bill * ((service1 + service2) / 2 / 100);

  function handleResetButton() {
    setBill("");
    setService1(0);
    setService2(0);
  }

  return (
    <div>
      <InputBill bill={bill} setBill={setBill} />
      <InputService service={service1} setService={setService1}>
        How did you like the service?
      </InputService>
      <InputService service={service2} setService={setService2}>
        How did your friend like the service?
      </InputService>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleResetButton} />
        </>
      )}
    </div>
  );
}

function InputBill({ bill, setBill }) {
  return (
    <div>
      <span>How did you like the service?</span>
      <input
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
        type="text"
        placeholder="bill..."
      ></input>
    </div>
  );
}

function InputService({ service, setService, children }) {
  return (
    <div>
      <span>{children}</span>
      <select
        value={service}
        onChange={(e) => setService(Number(e.target.value))}
      >
        <option value="0">Dissatisfield (0%)</option>
        <option value="5">It was ok (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <div>
      <h2>
        You pay ${bill + tip} (${bill} + ${tip} tip)
      </h2>
    </div>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
