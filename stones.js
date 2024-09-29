

function UpdateViews(){
    const view = document.getElementById("views");
    const startDate = new Date("2024-07-01T08:30:00");
    const endDate = new Date();
    const diffInMilliseconds = Math.abs(endDate - startDate);
    const diffInMinutes = Math.floor(diffInMilliseconds / 60000);
    view.innerHTML = (diffInMinutes *5)+"";
    
}

function PageLoop(){
    setInterval(() => {
        UpdateViews();
    }, 1000);
}

PageLoop();