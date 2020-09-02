const projects = [
    {
        id: 'HTML/CSS',
        src: 'pic1.PNG',
        href: 'https://phuongbui99.github.io/Shopping-Online/'
    },
    {
        id: 'Javascript',
        src: 'song.PNG',
        href: 'https://phuongbui99.github.io/ChooseSong/'
    },
    {
        id: 'HTML/CSS',
        src: 'Work.PNG'
    },
    {
        id: 'HTML/CSS',
        src: 'pic1.PNG',
        href: 'https://phuongbui99.github.io/Shopping-Online/'
    },
    {
        id: 'Javascript',
        src: 'song.PNG',
        href: 'https://phuongbui99.github.io/ChooseSong/'
    },
    {
        id: 'API',
        src: 'Capture.PNG',
        href: 'https://phuongbui99.github.io/weatherApp/'
    },
]

window.addEventListener('DOMContentLoaded', function(){
    displayProjects(projects);
    filterProject();
});

function displayProjects(projects){

     const menu = document.getElementById('menu-picture');
     const project = projects.map(function(item){
        return `<div class="item col-md-6 col-sm-6 col-lg-4" style="margin-bottom: 30px"><a href="${item.herf}"><img src="image/${item.src}"></a></div>`;
     });
    menu.innerHTML = project.join('');
}

function filterProject(){
    const btns = document.querySelectorAll('.filter');
    btns.forEach(function (btn){
        btn.addEventListener("click", function(e){
            e.preventDefault();
            const typeProject = e.currentTarget.id;
            const filter = projects.filter(function (project){
                if(project.id === typeProject)return project;
            });
            if(typeProject === "All")displayProjects(projects);
            else displayProjects(filter);
        })
    })
}
