import communique_presse from "@/assets/communique_presse.png";
import lahcen_hafid from "@/assets/lahcen_hafid.jpg";
import gala from "@/assets/gala.png";
import bannier_guide from "@/assets/bannier_guide.png";
import gala_bannier from "@/assets/gala_banniere.png";

const images: Record<string, string> = {
  communique_presse,
  lahcen_hafid,
  gala,
  bannier_guide,
  gala_bannier
};

interface SmartImageProps {
  thumbId: string;
  title: string;
  width: number;
  height: number;
}

const SmartImage = ({ thumbId, title, width, height }: SmartImageProps) => {
  const src = images[thumbId];
  if (!src) {
    console.warn(`Image not found for thumbId: ${thumbId}`);
    return null;
  }

  return <img src={src} alt={title} width={width} height={height} className="responsive-img" />;
};

export default SmartImage;
