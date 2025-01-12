const params = new URLSearchParams(location.search);
const GID = params.get("id");
console.log("Gallery ID is "+GID)
const gurl = "dev.hatch.lol/gallery/";
document.getElementById("galleryProjects").href = gurl+"?id="+GID;
document.getElementById("galleryComments").href = gurl+"comments/?id="+GID;
document.getElementById("galleryMembers").href = gurl+"members/?id="+GID
document.getElementById("galleryInfo").href = gurl+"info/?id="+GID
