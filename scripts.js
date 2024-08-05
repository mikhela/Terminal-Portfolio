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
            this.echo('<span style="color: yellow;">Hi, I am Giorgi Omanadze, a React Front-End Engineer.</span>', { raw: true });
            this.echo('<span style="color: yellow;">I am punctual and always complete tasks on time.</span>', { raw: true });
        },
        projects: function() {
            this.echo('<span style="color: orange;">1. MoviesWeb - I developed a stunning movie site with React, leveraging Git and GitHub for version control and collaboration. By integrating an API key, the site dynamically fetches and displays movie data. Through iterative updates over a month, I enhanced its features and content, crafting a professional platform for movie aficionados.</span>', { raw: true });
            this.echo('<span style="color: orange;">2. BurgerKingClone - I made this project for fun when I was studying: HTML, CSS, JS</span>', { raw: true });
        },
        skills: function() {
            this.echo('<span style="color: lightblue;">JavaScript, React, HTML, CSS, jQuery, Git, GitHub, Bootstrap, and more...</span>', { raw: true });
        },
        contact: function() {
            this.echo('<span style="color: purple;">Email: giorgi@example.com</span>', { raw: true });
            this.echo('<span style="color: purple;">LinkedIn: linkedin.com/in/giorgiomanadze</span>', { raw: true });
        },
        clear: function() {
            this.clear();
        }
    }, {
        greetings: '<span style="color: lime;">Welcome to my portfolio! Type "help" to see available commands.</span>',
        prompt: 'visitor@omanadze.com:~$ ',
        raw: true
    });
});
