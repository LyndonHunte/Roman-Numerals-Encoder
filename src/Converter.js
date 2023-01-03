import React, { useState } from "react";

function Converter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  function handleChange(event) {
    setInput(event.target.value);
  }
  function toRoman(num) {
    // Create an object with key-value pairs for all of the Roman numerals.
    const romanNumerals = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };

    // Initialize an empty string that we will append to with each Roman numeral.
    let romanNumeralString = "";

    // Loop through the object and find the largest Roman numeral that is smaller than the number.
    // Then, add it to the string and subtract it from the number. Repeat until the number is 0.
    for (const [key, value] of Object.entries(romanNumerals)) {
      while (num >= value) {
        romanNumeralString += key;
        num -= value;
      }
    }

    return romanNumeralString;
  }

  function handleSubmit(event) {
    event.preventDefault();
    setOutput(toRoman(input));
  }

  return (
    <div className="w-1/2 max-w-sm">
      <h1 className="text-3xl font-bold text-center mb-4">
        Roman Numerals Encoder
      </h1>
      <p className="text-sm">Convert any number to Roman Numerals</p>
      <form onSubmit={handleSubmit}>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          value={input}
          onChange={handleChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Convert
        </button>
        {output && <p className="text-2xl text-center mt-4">{output}</p>}
      </form>
    </div>
  );
}

export default Converter;
