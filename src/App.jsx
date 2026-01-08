import { useState } from "react";

const App = () => {
  const [isDisabled, setIsDisabled] = useState(true);

  const toggleDisabled = () => {
    setIsDisabled((prev) => !prev);
  };

  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen flex flex-col items-center justify-start p-8 font-brand text-brand-purple dark:text-brand-yellow">
      <h1 className="text-3xl font-bold text-center mb-8">Esercizio: Disabled</h1>

      <div className="flex flex-col gap-6 items-center">
        <input
          type="text"
          placeholder="Inserisci il tuo nome"
          className={`px-4 py-2 border-2 rounded-md ${
            isDisabled
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-white text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue"
          }`}
          disabled={isDisabled}
        />
        <input
          type="email"
          placeholder="Inserisci la tua email"
          className={`px-4 py-2 border-2 rounded-md ${
            isDisabled
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-white text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue"
          }`}
          disabled={isDisabled}
        />

        <button
          className={`px-6 py-2 bg-brand-blue text-white font-bold rounded-lg shadow-md ${
            isDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "hover:bg-brand-yellow"
          }`}
          disabled={isDisabled}
        >
          Invia
        </button>

        <button
          onClick={toggleDisabled}
          className="mt-4 px-4 py-2 bg-brand-blue text-white rounded-lg font-bold hover:bg-brand-yellow"
        >
          {isDisabled ? "Abilita" : "Disabilita"} i campi
        </button>
      </div>
    </main>
  );
};

export default App;
