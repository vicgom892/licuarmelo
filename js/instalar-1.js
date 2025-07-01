let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  document.getElementById('installBtnPlus18').style.display = 'inline-block';

  document.getElementById('installBtnPlus18').addEventListener('click', () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choice) => {
      if (choice.outcome === 'accepted') {
        console.log('Licu\'Armelo +18 instalada');
      }
      deferredPrompt = null;
    });
  });
});
