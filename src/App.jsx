const App = () => {
  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen flex flex-col items-center justify-start p-8 font-brand text-brand-purple dark:text-brand-yellow">

      <h1 className="text-3xl font-bold text-center mb-8">
        ESERCIZI 7 e 8
      </h1>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {/* Card 1: azzurro pastello */}
        <div className="bg-[#A7C7E7] dark:bg-[#4B6CB7] border-t-4 border-brand-purple dark:border-brand-yellow rounded-lg shadow-lg p-6 w-72 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2">CARD 1</h2>
          <p className="mb-4 text-brand-purple dark:text-brand-yellow text-center">Paragrafo 1</p>
          <button className="px-6 py-2 bg-[#FFD8A7] dark:bg-[#FFB84C] text-brand-blue dark:text-gray-900 font-bold rounded-lg shadow-md hover:bg-[#FFC87C] dark:hover:bg-[#FFA500] transition-colors">
            Pulsante
          </button>
        </div>

        {/* Card 2: arancione pastello */}
        <div className="bg-[#FFD8A7] dark:bg-[#FFB84C] border-t-4 border-brand-purple dark:border-brand-yellow rounded-lg shadow-lg p-6 w-72 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2">CARD 2</h2>
          <p className="mb-4 text-brand-purple dark:text-brand-yellow text-center">Paragrafo 2</p>
          <button className="px-6 py-2 bg-[#A7C7E7] dark:bg-[#4B6CB7] text-brand-blue dark:text-gray-900 font-bold rounded-lg shadow-md hover:bg-[#84B4E0] dark:hover:bg-[#3A4A8B] transition-colors">
            Pulsante
          </button>
        </div>

        {/* Card 3: giallo pastello */}
        <div className="bg-[#FFF5A7] dark:bg-[#FFD700] border-t-4 border-brand-purple dark:border-brand-yellow rounded-lg shadow-lg p-6 w-72 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2">CARD 3</h2>
          <p className="mb-4 text-brand-purple dark:text-brand-yellow text-center">Paragrafo 3</p>
          <button className="px-6 py-2 bg-[#A7C7E7] dark:bg-[#4B6CB7] text-brand-blue dark:text-gray-900 font-bold rounded-lg shadow-md hover:bg-[#84B4E0] dark:hover:bg-[#3A4A8B] transition-colors">
            Pulsante
          </button>
        </div>
      </div>

      {/* Div di esempio */}
      <div className="bg-white dark:bg-gray-800 w-full max-w-5xl p-16 rounded-2xl shadow-lg text-center text-brand-purple dark:text-brand-yellow">
        <h1 className="text-xl font-semibold mb-2">DIV DI ESEMPIO</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam temporibus incidunt quisquam minus dolor, fugit eligendi vitae laborum explicabo perferendis excepturi aspernatur fugiat suscipit enim doloribus, fuga cumque at rem.</p>
        <a href="#" className="text-brand-yellow dark:text-brand-blue font-bold underline hover:text-brand-blue dark:hover:text-brand-purple">
          link cliccabile
        </a>
      </div>

    </main>
  )
}

export default App;
