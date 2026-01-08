import { useState } from "react";

const App = () => {
  const [isDisabled, setIsDisabled] = useState(true);

  const toggleDisabled = () => {
    setIsDisabled((prev) => !prev);
  };

  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen flex flex-col items-center justify-start p-8 font-brand text-brand-purple dark:text-brand-yellow">
      <h1 className="text-3xl font-bold text-center mb-8">
        Esercizio Coponents
      </h1>

      <div className="flex flex-col gap-6 items-center">
        <input
          type="text"
          placeholder="Inserisci il tuo nome"
          disabled={isDisabled}
          className={`input-brand ${
            isDisabled ? "input-disabled" : "input-enabled"
          }`}
        />

        <input
          type="email"
          placeholder="Inserisci la tua email"
          disabled={isDisabled}
          className={`input-brand ${
            isDisabled ? "input-disabled" : "input-enabled"
          }`}
        />

        <button
          disabled={isDisabled}
          className={`btn-brand ${
            isDisabled ? "btn-disabled" : ""
          }`}
        >
          Invia
        </button>

        <button
          onClick={toggleDisabled}
          className="btn-brand mt-4"
        >
          {isDisabled ? "Abilita" : "Disabilita"} i campi
        </button>
      </div>
    </main>
  );
};

export default App;
