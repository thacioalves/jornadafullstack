import "./App.css";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <div className="app_videos">
        <Video 
        likes={100}
        messages={200} 
        shares={300} 
        name="Thacio"
        description="brecker o goleiro"
        music="musica épica"
        url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        />

        <Video 
        likes={121} 
        messages={270} 
        shares={500} 
        name="Thiago"
        description="gato pulando"
        music="musica aleatoria"
        url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
        />
      </div>
    </div>
  );
}

export default App;
