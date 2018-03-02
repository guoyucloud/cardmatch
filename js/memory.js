//声音初始化
var click_event_sound = document.getElementById("click_event_sound");
var win_event_sound = document.getElementById("win_event_sound");
var occult_event_sound = document.getElementById("occult_event_sound");
var memory = function(obj) {
	return document.getElementById(obj);
}

// 图片模型
//var model = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];

// 随机排列
//function fn() {
//	return Math.random() - Math.random();
//}
//
//model.sort(fn);

function chongzhi() {
	json_roll();
	console.log(img_json_roll);
	//	console.log(model.sort(fn));
	//插入html描述
	for(var i = 0, len = img_json_roll.length; i < len; i++) {
		//	var url = "img/" + img_json_roll[i] + ".png"; //图片地址
		$(".scene img").eq(i).attr("src", img_json_roll[i].img_src);
		$(".scene .box").eq(i).attr("attr", img_json_roll[i].id);
	}
}
chongzhi();

//调整图片比例
function onresize() {
	var picbox = document.getElementById("box1");
	var imgs, bgs;
	var picbox_w = picbox.offsetWidth;
	var picbox_h = picbox_w * 12 / 16; //在此修改图片比例!
	for(var i = 0; i < 12; i++) {
		picbox = document.getElementById("box" + i);
		picbox.style.height = picbox_h + 'px';
		imgs = document.getElementById("img" + i);
		imgs.style.width = picbox_w + 'px';
		imgs.style.height = picbox_h + 'px';
		bgs = document.getElementById("bg" + i);
		bgs.style.width = picbox_w + 'px';
		bgs.style.height = picbox_h + 'px';
	}
}

onresize();

var cacheObj = null; //缓存数据

var aBtn = memory("scene").getElementsByTagName("div");

var count = 0; //配对数

var count_sum = 0; //按键数

//      var ding = document.getElementById("dingmusic");//音效

function jioiji() {
		for(var i = 0, len = aBtn.length; i < len; i++) {
		aBtn[i].onclick = function() {
//		-----------------------------------------------------
//=================================================
//	$(".scene div").click("on", function() {
		click_event_sound.play();
		var self = this;
		//              ding.play();
		count_sum++;
		//              $("Begin").textContent = "重新开始 已点击" + count_sum + "步";
		if(cacheObj == self) {
			return;
		}
		self.className = "box hover";
		if(cacheObj == null) // 判断缓存存在
		{
			cacheObj = self;
		} else {

			if(cacheObj.getAttribute("attr") == self.getAttribute("attr")) // 判断数值 是否相等
			{
				var sound_id = parseInt(cacheObj.getAttribute("attr"));
				console.log(cacheObj.getAttribute("attr"));

				$(".win_event_sound").attr("src", img_json_free[sound_id - 1].img_sound);
				console.log(cacheObj.getAttribute("attr"));
				console.log(img_json_free[sound_id - 1].img_sound);
				//				console.log(img_json_roll[sound_id-1].img_sound);
				win_event_sound.play();

				self.className = cacheObj.className = "box hover";
								self.onclick = cacheObj.onclick = null;
				cacheObj = null;
				count++;
				//				alert("成功");
				who_npc_curtain_add();
			} else {
				cz_game();

				//				alert("失败");
				setTimeout(function() {
					self.className = "box";
					if(cacheObj) {
						cacheObj.className = "box";
					}
					cacheObj = null;
					click_event_sound.play();
				}, 300);

			}
		}
		if(count == 6) {
			console.log("需要重置了");
			occult_event_sound.play();
			cacheObj = null;
			count = 0;
			//重置
			//              	------------------
			who_npc = 1;
			$(".score_num ul").css("background", "rgba(0,0,0,0.8)");
			$(".team_one").css("background", "rgba(0,50,0,0.7)");
			//		-----------------------------
			jioiji();
			cz_game_all();
			chongzhi();

		}
//	})
//==============================================
//-------------------------------------------

		}

	}
}
jioiji();