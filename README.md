# 📄 Mekohm Scan — Numériseur de factures PDF hebdomadaire

Application Web progressive (PWA) légère et gratuite conçue pour iPhone (Safari) et navigateurs mobiles, permettant de numériser des reçus papier, d'importer des factures externes (PDF ou images) et de compiler un rapport PDF unique en fin de semaine.

🔗 **Accès direct :** [https://globul78.github.io/Scan/](https://globul78.github.io/Scan/)

---

## ✨ Fonctionnalités principales

* **Détection automatique des bordures & redressement :** Détecte les 4 coins d'un reçu via **OpenCV.js** et corrige la perspective avec une loupe tactile de précision.
* **Filtres haute lisibilité :** Mode **Document N&B** optimisé pour blanchir le fond gris des reçus thermiques (essence, quincaillerie, restaurants), mode **Couleur nette** ou **Original**.
* **Importation de documents externes :** Ajout direct de factures PDF multi-pages (ex. : factures d'hôtel reçues par courriel) via **PDF.js** ou de captures d'écran.
* **Sauvegarde locale persistante (`IndexedDB`) :** Les scans sont conservés automatiquement dans l'ordre chronologique sur le téléphone même après la fermeture complète du navigateur.
* **Organisation hebdomadaire :**
  * Réorganisation facile de l'ordre des pages (`◀` / `▶`) avant l'exportation.
  * Nommage rapide avec tags prédéfinis (`_Depenses`, `_Mazak`, `_Mekohm`) et date automatique.
  * Réinitialisation en un clic (`Nouvelle semaine`) une fois le PDF généré.
* **100 % confidentiel et gratuit :** Aucun serveur externe ni abonnement. Tout le traitement d'image et la génération du PDF (`jsPDF`) s'exécutent localement sur l'appareil.

---

## 📱 Installation sur iPhone (Écran d'accueil)

1. Ouvrez **[https://globul78.github.io/Scan/](https://globul78.github.io/Scan/)** dans **Safari**.
2. Appuyez sur le bouton **Partager** (icône carrée avec une flèche vers le haut en bas de l'écran).
3. Sélectionnez **Sur l'écran d'accueil**, puis appuyez sur **Ajouter**.
4. L'icône **Mekohm Scan** s'affiche sur votre écran d'accueil et s'ouvre en mode plein écran comme une application native.

---

## 🧭 Utilisation au quotidien

1. **En cours de semaine :** Appuyez sur **Photo** pour numériser un reçu papier ou sur **Importer** pour joindre un fichier `.pdf` ou une image depuis l'application *Fichiers*.
2. **En fin de semaine :** Vérifiez ou réorganisez l'ordre des factures avec les flèches sous chaque vignette, ajustez le nom du fichier au besoin, puis appuyez sur **PDF** pour enregistrer ou partager le rapport final.
3. **Semaine suivante :** Appuyez sur **🗑️ Nouvelle semaine** pour vider l'historique et repartir à zéro.

---

## 🛠️ Technologies utilisées

* **HTML5 / CSS3 / JavaScript Vanilla** (aucun processus de compilation requis)
* **[OpenCV.js](https://docs.opencv.org/)** — Détection de contours et transformation de perspective
* **[PDF.js](https://mozilla.github.io/pdf.js/)** — Rendu et conversion des fichiers PDF importés
* **[jsPDF](https://github.com/parallax/jsPDF)** — Génération de fichiers PDF multi-pages compressés
* **IndexedDB & Web Share API** — Stockage local persistant et partage natif iOS
