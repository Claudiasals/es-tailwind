import { useState, useEffect } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Aggiungi o rimuovi la classe "dark" sull'elemento <html> 
  // quando l'utente cambia la modalità dal toggle switch  
  useEffect(() => {
    const darkPref = localStorage.getItem("dark-mode");

    if (darkPref === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark"); // Imposta la modalità scura
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark"); // Imposta la modalità chiara
    }
  }, []); // Vuoto per farlo eseguire solo al primo montaggio

  // Funzione per toggle
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      // Salva la preferenza nel localStorage
      localStorage.setItem("dark-mode", newMode);
      
      // Applica o rimuove la classe "dark" in base al nuovo stato
      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      
      return newMode;
    });
  };

  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen flex flex-col items-center justify-start p-8 font-brand text-brand-purple dark:text-brand-yellow">

      {/* Toggle switch per dark mode */}
      <div className="flex justify-center items-center mb-8">
        <label className="relative inline-block w-14 mr-2">
          <input
            type="checkbox"
            className="sr-only"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
          <span
            className={`block w-14 h-8 rounded-full ${
              darkMode ? "bg-blue-500" : "bg-gray-300"
            }`}
          >
            <span
              className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                darkMode ? "transform translate-x-6" : ""
              }`}
            ></span>
          </span>
        </label>
        <button
          onClick={toggleDarkMode}
          className="ml-2 text-xl font-bold text-white dark:text-gray-800"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <h1 className="text-3xl font-bold text-center mb-8">ESERCIZI 11-12</h1>

      {/* Esercizio 1: Pulsanti con Hover */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-center mb-6">Pulsanti con Hover</h2>
        <div className="flex gap-6 justify-center">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors">Pulsante 1</button>
          <button className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-700 transition-colors">Pulsante 2</button>
          <button className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-700 transition-colors">Pulsante 3</button>
        </div>
      </div>

      {/* Esercizio 2: Modulo di input con focus e active */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-center mb-6">Modulo di Input (Focus e Active)</h2>
        <div className="flex flex-col gap-4 items-center">
          <input
            type="text"
            placeholder="Nome"
            className="px-4 py-2 rounded-md border-2 border-gray-300 focus:border-blue-500 dark:focus:border-yellow-300 focus:outline-none active:bg-blue-100 dark:active:bg-blue-700 transition-all"
          />
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 rounded-md border-2 border-gray-300 focus:border-blue-500 dark:focus:border-yellow-300 focus:outline-none active:bg-blue-100 dark:active:bg-blue-700 transition-all"
          />
          <button className="px-6 py-3 bg-brand-purple text-white rounded-md hover:bg-brand-blue transition-colors">
            Invia
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        <div className="bg-[#A7C7E7] dark:bg-[#4B6CB7] border-t-4 border-brand-purple dark:border-brand-yellow rounded-lg shadow-lg p-6 w-72 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">CARD 1</h2>
          <p className="mb-4 text-brand-purple dark:text-brand-yellow text-center">Paragrafo 1</p>
          <button className="px-6 py-2 bg-[#FFD8A7] dark:bg-[#FFB84C] text-brand-blue dark:text-gray-900 font-bold rounded-lg shadow-md hover:bg-[#FFC87C] dark:hover:bg-[#FFA500] transition-colors">
            Pulsante
          </button>
        </div>

        <div className="bg-[#FFD8A7] dark:bg-[#FFB84C] border-t-4 border-brand-purple dark:border-brand-yellow rounded-lg shadow-lg p-6 w-72 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">CARD 2</h2>
          <p className="mb-4 text-brand-purple dark:text-brand-yellow text-center">Paragrafo 2</p>
          <button className="px-6 py-2 bg-[#A7C7E7] dark:bg-[#4B6CB7] text-brand-blue dark:text-gray-900 font-bold rounded-lg shadow-md hover:bg-[#84B4E0] dark:hover:bg-[#3A4A8B] transition-colors">
            Pulsante
          </button>
        </div>

        <div className="bg-[#FFF5A7] dark:bg-[#FFD700] border-t-4 border-brand-purple dark:border-brand-yellow rounded-lg shadow-lg p-6 w-72 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">CARD 3</h2>
          <p className="mb-4 text-brand-purple dark:text-brand-yellow text-center">Paragrafo 3</p>
          <button className="px-6 py-2 bg-[#A7C7E7] dark:bg-[#4B6CB7] text-brand-blue dark:text-gray-900 font-bold rounded-lg shadow-md hover:bg-[#84B4E0] dark:hover:bg-[#3A4A8B] transition-colors">
            Pulsante
          </button>
        </div>
      </div>

      {/* Div di esempio */}
      <div className="bg-white dark:bg-gray-800 w-full max-w-5xl p-16 rounded-2xl shadow-lg text-center text-brand-purple dark:text-brand-yellow">
        <h1 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">DIV DI ESEMPIO</h1>
        <p className="text-gray-700 dark:text-gray-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam temporibus incidunt quisquam minus dolor, fugit eligendi vitae laborum explicabo perferendis excepturi aspernatur fugiat suscipit enim doloribus, fuga cumque at rem.
        </p>
        <a href="#" className="text-brand-yellow dark:text-brand-blue font-bold underline hover:text-brand-blue dark:hover:text-brand-purple">
          link cliccabile
        </a>
      </div>

    </main>
  );
};

export default App;
