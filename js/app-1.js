if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/js/sw-1.js')
    .then(reg => console.log("Service Worker registrado:", reg))
    .catch(err => console.error("Error al registrar el Service Worker:", err));
}
function pedirPermisoNotificaciones() {
  if (!("Notification" in window)) {
    alert("Este navegador no soporta notificaciones.");
    return;
  }

  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      mostrarNotificacion("¡Nuevo sabor disponible!", {
        body: "Probá el licuado de maracuyá con ron. Solo por hoy 🍹",
        icon: "/icons/icon-192x192.png"
      });
    }
  });
}

function mostrarNotificacion(titulo, opciones) {
  new Notification(titulo, opciones);
}

window.addEventListener("load", () => {
  pedirPermisoNotificaciones();
});