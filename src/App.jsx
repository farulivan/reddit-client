import { Sidebar } from './components/Sidebar/Sidebar';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';

function App() {
  return (
    <div className="flex w-full">
      <aside className="w-1/4 z-10 shadow-2xl">
        <Sidebar />
      </aside>
      <div className="w-3/4 bg-zinc-100">
        <Header />
        <main className="m-10 p-7 bg-white rounded-lg">
          <Home />
        </main>
      </div>
    </div>
  );
}

export default App;
