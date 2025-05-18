/** @type {HTMLButtonElement} */ let submitButton;
/** @type {HTMLButtonElement} */ let exitButton;
/** @type {HTMLDialogElement} */ let dialogo = document.getElementById('dialogo');
submitButton = document.getElementById('submit');
exitButton = document.getElementById('exit');
submitButton.addEventListener('click', () => {
    dialogo.showModal()
})

exitButton.addEventListener('click', () => {
    dialogo.close()
})