var img = [
	"https://cdn.pixabay.com/photo/2019/05/16/19/02/waterfalls-4207893_960_720.jpg",
	"https://cdn.pixabay.com/photo/2017/07/22/16/41/queenstown-2529295_960_720.jpg",
	"https://cdn.pixabay.com/photo/2014/04/14/20/11/japanese-cherry-trees-324175_960_720.jpg",
	"https://cdn.pixabay.com/photo/2019/05/17/13/26/dandelion-4209715_960_720.jpg",
	"https://cdn.pixabay.com/photo/2019/05/11/09/14/night-4195327_960_720.jpg"
];

var num = 0;

function slideForward() {
	num++;
	if (num >= img.length) {
		num = 0;
	}
	document.getElementById("imgBox").style.backgroundImage = "url(" + img[num] + ")";
}

function next() {
	num++;
	if (num >= img.length) {
		num = 0;
	}
	document.getElementById("imgBox").style.backgroundImage = "url(" + img[num] + ")";
}

function prev() {
	num--;
	if (num < 0) {
		num = img.length - 1;
	}
	document.getElementById("imgBox").style.backgroundImage = "url(" + img[num] + ")";
}

setInterval(slideForward, 2000);