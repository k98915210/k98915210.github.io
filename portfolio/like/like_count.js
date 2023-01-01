const countLike = document.getElementById('like_count');

//https://api.countapi.xyz/create?namespace=hoichun-kan&key=like-count&value=0

initialVisitCount()

function initialVisitCount() {
	fetch('https://api.countapi.xyz/get/hoichun-kan/like-count')
	.then(res => res.json())
	.then(res => {
		countLike.innerHTML = res.value;
	})
}

function updateVisitCount() {
	fetch('https://api.countapi.xyz/update/hoichun-kan/like-count/?amount=1')
	.then(res => res.json())
	.then(res => {
		countLike.innerHTML = res.value;
	})
}


