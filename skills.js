window.addEventListener('load',()=> {
    let progressBar = document.querySelectorAll('.progress-bar');
    let values = [
        '70%',
        '60%',
        '65%',
        '55%',
        '65%'
    ];
    progressBar.forEach((progress,index)=> {
        progress.style.width = values [index];
    });
});
