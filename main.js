var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('AI  Developer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Coding turns imagination into innovation')
    .pauseFor(2500)
    .deleteChars(10)
    .typeString('<strong> our reality!</strong>')
    .pauseFor(2500)
    .start();