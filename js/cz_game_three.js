var who_npc = 1;






function cz_game(){
var Team_one_npc_val = $(".team_one li").text();
var Team_two_npc_val = $(".team_two li").text();
//新增three
//---------------
var Team_three_npc_val = $(".team_three li").text();
//------------------
var Team_one_npc_val_num = parseInt(Team_one_npc_val);
var Team_two_npc_val_num = parseInt(Team_two_npc_val);
//新增three
//----------------------
var Team_three_npc_val_num = parseInt(Team_three_npc_val);
//-----------------------
//var chence_live_chance_num = parseInt(chence_live_chance);
console.log("重置开始");
	//角色判断
	
	
		

switch (who_npc){
	case 1:
	console.log(Team_one_npc_val);
//		$(".team_one li").html(Team_one_npc_val_num + chence_live_chance_num);
//		alert("角色1分数传送");
		who_npc = 2;
		$(".team_one").css("background","rgba(0,0,0,0.8)");
		$(".team_three").css("background","rgba(0,0,0,0.8)");
		$(".team_two").css("background","rgba(0,50,0,0.7)");
		break;
	case 2:
//	$(".team_two li").text(Team_two_npc_val_num + chence_live_chance_num);
//		alert("角色2分数传送");
		who_npc = 3;
		$(".team_one").css("background","rgba(0,0,0,0.8)");
		$(".team_two").css("background","rgba(0,0,0,0.8)");
		$(".team_three").css("background","rgba(0,50,0,0.7)");
		break;
	case 3:
//	$(".team_two li").text(Team_two_npc_val_num + chence_live_chance_num);
//		alert("角色2分数传送");
		who_npc = 1;
		$(".team_three").css("background","rgba(0,0,0,0.8)");
		$(".team_two").css("background","rgba(0,0,0,0.8)");
		$(".team_one").css("background","rgba(0,50,0,0.7)");
		break;

	
}



	
	
	
	
	
	
	
	
	
	
	
	
	
	

	console.log("重置成功");
}
