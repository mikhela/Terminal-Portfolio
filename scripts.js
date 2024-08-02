$(function() {
    $('#terminal').terminal({
        help: function() {
            this.echo('Available commands:');
            this.echo('about - Information about me');
            this.echo('projects - List of my projects');
            this.echo('skills - My skills');
            this.echo('contact - How to contact me');
        },
        about: function() {
            this.echo('Hi, I am Giorgi Omanadze, a React Front-End Engineer.');
            this.echo('I am punctual and always complete tasks on time.');
        },
        projects: function() {
            this.echo('1. Project One - Description');
            this.echo('2. Project Two - Description');
            this.echo('3. Project Three - Description');
        },
        skills: function() {
            this.echo('JavaScript, React, HTML, CSS, jQuery, Git, and more...');
        },
        contact: function() {
            this.echo('Email: giorgi@example.com');
            this.echo('LinkedIn: linkedin.com/in/giorgiomanadze');
        },
        clear: function() {
            this.clear();
        }
    }, {
        greetings: 'Welcome to my portfolio! Type "help" to see available commands.',
        prompt: 'visitor@omanadze.com:~$ '
    });
});
