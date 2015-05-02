define(function(require, exports, module){

	var iClientWidth = document.documentElement.clientWidth 
						|| document.body.clientWidth;
	var oContainer = document.getElementById('container');
	
	function Leaf(imgSrc){
		this.width = 100 + Math.random() * 50; //0~150|100~150
		this.oImg = new Image();
		this.oImg.src = imgSrc;
		this.oImg.width = this.width;
	}

	Leaf.prototype.render = function(){
		var that = this;
		this.pos = {
			left: Math.random() * (iClientWidth - this.width), //0~iClientWidth-width
			top: 0
		};
		oContainer.appendChild(this.oImg);
		this.oImg.style.left = this.pos.left + 'px';
		setTimeout(function(){
			that.fall();
		}, Math.random() * 2000);
	};

	Leaf.prototype.fall = function(){
		var that = this;
		setInterval(function(){
			that.oImg.style.top = that.oImg.offsetTop + 5 + 'px';
		}, 30);
	};

	// exports.haha = function(){

	// };

	// exports.xixi = function(){
		
	// };

	module.exports = Leaf;





});