const bodyContent = document.body.innerHTML
    .replace(/Legos|LEGOs|LEGOS/g,"LEGO bricks")
    .replace(/Lego|lego/g,"LEGO");
document.body.innerHTML = bodyContent;