$(function() {
    $('#terminal').terminal({
        help: function() {
            this.echo('<span style="color: cyan;">Available commands:</span>', { raw: true });
            this.echo('<span style="color: green;">about</span> - Information about me', { raw: true });
            this.echo('<span style="color: green;">projects</span> - List of my projects', { raw: true });
            this.echo('<span style="color: green;">skills</span> - My skills', { raw: true });
            this.echo('<span style="color: green;">contact</span> - How to contact me', { raw: true });
        },
        about: function() {
            window.location.href = 'about/about.html';
        },
        projects: function() {
            window.location.href = 'projects/projects.html'
            this.echo('<span style="color: orange;">1. MoviesWeb - I developed a stunning movie site with React, leveraging Git and GitHub for version control and collaboration. By integrating an API key, the site dynamically fetches and displays movie data. Through iterative updates over a month, I enhanced its features and content, crafting a professional platform for movie aficionados.</span>', { raw: true });
            this.echo('<span style="color: orange;">2. BurgerKingClone - I made this project for fun when I was studying: HTML, CSS, JS</span>', { raw: true });
        },
        skills: function() {
            window.location.href = 'skills/skillspage.html'
        },
        contact: function() {
            this.echo('<span style="color: purple;">Email: omanadzOfficial@gmail.com</span>', { raw: true });
            this.echo('<span style="color: purple;">Second Email: giksona151@gmail.com</span>', { raw: true });
        },
        clear: function() {
            this.clear();
        }
    }, {
        greetings: '<span style="color: orange;">Welcome to my portfolio! Type "help" to see available commands.</span>',
        prompt: 'visitor@omanadze.com:~$ ',
        raw: true
    });
});
