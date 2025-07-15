document.querySelectorAll('.program').forEach(program => {
  program.addEventListener('click', function () {
    document.querySelectorAll('.program').forEach(p => p.classList.remove('active'));
    this.classList.add('active');
  });
});