function Vehicule(modele, km) {
  this.modele = modele;
  this.km = km || 0;
  this.moteur = "essence";
  this.couleur = "grise";
  this.voyage = function(kmVoyage) {
    return (this.km += kmVoyage);
  };
  this.isPremium = function(moteurLuxe, couleurLuxe) {
    this.moteur = moteurLuxe;
    this.couleur = couleurLuxe;
  };
}

clio = new Vehicule("Clio", 0);
clio.isPremium("diesel", "bleue");

megane = new Vehicule("Megane", 500);

modus = new Vehicule("Modus", 900);

scenic = new Vehicule("Scenic", 0);
scenic.isPremium("diesel", "noire");

twingo = new Vehicule("Twingo", 300);
