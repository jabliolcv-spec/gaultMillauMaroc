import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import NewsDetails from "./pages/NewsDetails";
import Restaurant from "./pages/Restaurant";
import Hotels from "./pages/Hotels";
import Riyad from "./pages/Riyad";
import Artisans from "./pages/Artisans";
import Recettes from "./pages/Recettes";
import Talent from "./pages/Talent";
import Utensils from "./pages/Utensils";
import PrivacyPolicy from "./pages/Informations/PrivacyPolicy";
import CGV from "./pages/Informations/CGV";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/blog" element={<News />}/>
        <Route path="/Hotels" element={<Hotels />}/>
        <Route path="/Riyad" element={<Riyad />}/>
        <Route path="/Recettes" element={<Recettes />}/>
        <Route path="/Talent" element={<Talent />}/>
        <Route path="/Artisans" element={<Artisans />}/>
        <Route path="/Utensils" element={<Utensils />}/>
        <Route path="/Infos/politique-de-confidentialite" element={<PrivacyPolicy/>}/>
        <Route path="/Infos/CGV" element={<CGV/>}/>
        <Route path="/blog/:slug" element={<NewsDetails />}/>
        <Route path="/Restaurant" element={<Restaurant />}/>
        <Route path="*" element={<h2>Page non trouvée</h2>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
