import { Blocks } from "./Blocks";

function App() {
  return (
    <div className="App">
      <header className="text-3xl text-center antialiased sm:subpixel-antialiased md:antialiased lg:subpixel-antialiased xl:antialiased mt-4 mb-4">
        <h1 className="">会議用語 BINGO</h1>
      </header>
      <main>
        <Blocks />
      </main>
    </div>
  );
}

export default App;
