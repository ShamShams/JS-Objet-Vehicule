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

v1 = new Vehicule("Clio", 0);
v1.isPremium("diesel", "noir");
