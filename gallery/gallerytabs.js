const params = new URLSearchParams(location.search);
const GID = params.get("id");
console.log("Gallery ID is "+GID)
const gurl = "dev.hatch.lol/gallery/";
document.getElementByID("galleryProjects").href = gurl+"?id="+GID;
document.getElementByID("galleryComments").href = gurl+"comments/?id="+GID;
document.getElementByID("galleryMembers").href = gurl+"members/?id="+GID
document.getElementByID("galleryInfo").href = gurl+"info/?id="+GID
