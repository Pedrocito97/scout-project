function getBasePath() {
    // Récupère le chemin du fichier actuel (URL sans le nom de fichier)
    let currentPath = window.location.pathname;
  
    // Supprime le nom du fichier actuel pour obtenir le chemin de base
    return currentPath.substring(0, currentPath.lastIndexOf('./'));
  }
  
  function loadHTML(id, filePath) {
    console.log(getBasePath());
    const basePath = getBasePath();
    const fullPath = basePath + '/' + filePath;
  
    console.log(fullPath);
    fetch(fullPath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erreur de chargement pour ${fullPath}`);
        }
        return response.text();
      })
      .then(data => {
        document.getElementById(id).innerHTML = data;
      })
      .catch(error => console.error("Erreur :", error));
  }
  // Exemple d'utilisation
  loadHTML("header", "sections/navigation.html");