import "./App.css";
import AppLista from "./protegido/AppLista";

function App() {
  return (
    <div className="bg-gray-600 w-full h-auto p-10">
      <h1 className="text-3xl font-bold text-white text-center">App Js</h1>
      <p className="text-gray-300 text-center">Esta es la página de inicio</p>
      <AppLista />
    </div>
  );
}

export default App;
