import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RevuPresse from "./pages/RevuPresse";
import Toques from "./pages/Toques";
import Hotels from "./pages/Hotels";
import Recettes from "./pages/Recettes";
import PrivacyPolicy from "./pages/Informations/PrivacyPolicy";
import CGV from "./pages/Informations/CGV";
import KitMedia from "./pages/KitMedia";
import Activity from "./pages/Activity";
import Contact from "./pages/Contact";
import Artisan from "./pages/Artisan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/RevuePresse" element={<RevuPresse />}/>
        <Route path="/Hospitalite" element={<Hotels />}/>
        <Route path="/Recettes" element={<Recettes />}/>
        <Route path="/KitMedia" element={<KitMedia />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/Activity" element={<Activity />}/>
        <Route path="/Artisan" element={<Artisan />}/>
        <Route path="/Infos/politique-de-confidentialite" element={<PrivacyPolicy/>}/>
        <Route path="/Infos/CGV" element={<CGV/>}/>
        <Route path="/Toques" element={<Toques />}/>
        <Route path="*" element={<h2>Page non trouvée</h2>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
