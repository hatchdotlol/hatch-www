const params = new URLSearchParams(location.search);
const GID = params.get("id");
console.log("Gallery ID is "+GID)
const gurl = "dev.hatch.lol/gallery/";
document.getElementByID("projects").href = gurl+"?id="+GID;
document.getElementByID("comments").href = gurl+"comments/?id="+GID;
document.getElementByID("members").href = gurl+"members/?id="+GID
document.getElementByID("info").href = gurl+"info/?id="+GID
