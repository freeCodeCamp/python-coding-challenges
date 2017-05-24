function toggleMap() {
  const mapRef = document.getElementById("map");
  const currentWidth = mapRef.style.width;
  mapRef.style.width = currentWidth === "250px" ? "0" : "250px";
}
