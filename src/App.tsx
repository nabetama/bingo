import { Blocks } from "./Blocks";

function App() {
  return (
    <div className="App">
      <header></header>
      <main className="text-center">
        <h1 className="text-3xl font-bold underline mb-4 text-rose-700">
          会議用語 BINGO
        </h1>
        <div className="h-56 grid grid-cols-1 gap-1 content-around text-center text-sky-900">
          <Blocks />
        </div>
      </main>
    </div>
  );
}

export default App;
