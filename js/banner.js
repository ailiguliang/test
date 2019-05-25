function Banner(){
    this.oBanner = document.querySelector('.banner_con');
    this.oImgBox = document.querySelector('.imgBox');
    this.oImg = this.oImgBox.getElementsByTagName('img');
    this.oBtn = this.oBanner.querySelectorAll(' span');
    this.distance = this.oImg[0].offsetWidth;
    this.cloneImg = this.oImg[0].cloneNode();
    this.oImgBox.appendChild(this.cloneImg);
    this.count = 0 ;
    this.oImgBox.style.width = this.distance * this.oImg.length + 'px';
    this.timer = null;
    this.init();
}

Banner.prototype = {
    init : function(){
        this.autoPlay();
        this.bindEvent();
    },
    // 图片的移动
    toImg : function(){
        move(this.oImgBox,{'left':- this.distance * this.count});
    },

    // 往下一张移动
    nextImg : function(){
        if(this.count >= this.oImg.length - 1){
            this.oImgBox.style.left = 0 ;
            this.count = 1 ;
        }else{
            this.count ++ ;
        }
    },

    preImg : function(){
        if(this.count <= 0 ){
            this.oImgBox.style.left = -(this.oImg.length - 1) * this.distance + 'px';
            this.count = this.oImg.length - 2;
        }else{
            this.count -- ;
        }
    },
    // 自动播放
    autoPlay : function(){
        var _this = this ;
        clearInterval(_this.timer);
        this.timer = setInterval(function(){
            _this.nextImg();
            _this.toImg();
        },2000)
    },

    bindEvent : function(){
        var _this = this;
        this.oBtn[1].onclick = function(){
            _this.nextImg();
            _this.toImg();
        }
        this.oBtn[0].onclick = function(){
            _this.preImg();
            _this.toImg();
        }
        this.oBanner.onmouseover = function(){
            clearInterval(_this.timer);
            // _this.oBtn.style.display = "block";
        }
        this.oBanner.onmouseout = function(){
            _this.autoPlay();
        }
    }
}
new Banner();