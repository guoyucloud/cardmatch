function who_npc_curtain_add(){
var Team_one_npc_val = $(".team_one li").text();
var Team_two_npc_val = $(".team_two li").text();
//新增three值
//-------------
var Team_three_npc_val = $(".team_three li").text();
var Team_four_npc_val = $(".team_four li").text();
var Team_five_npc_val = $(".team_five li").text();
//---------
var Team_one_npc_val_num = parseInt(Team_one_npc_val);
var Team_two_npc_val_num = parseInt(Team_two_npc_val);
//新增three值
//--------------
var Team_three_npc_val_num = parseInt(Team_three_npc_val);
var Team_four_npc_val_num = parseInt(Team_four_npc_val);
var Team_five_npc_val_num = parseInt(Team_five_npc_val);
//-----------------


//角色判断

switch (who_npc){
	case 1:
	console.log(Team_one_npc_val);
		$(".team_one li").html(Team_one_npc_val_num + 1);
//		alert("角色1分数传送+3");
		break;
	case 2:
	console.log(Team_two_npc_val);
		$(".team_two li").html(Team_two_npc_val_num + 1);
//		alert("角色2分数传送+3");
		break;
	case 3:
	console.log(Team_three_npc_val);
		$(".team_three li").html(Team_three_npc_val_num + 1);
//		alert("角色2分数传送+3");
		break;
	case 4:
	console.log(Team_four_npc_val);
		$(".team_four li").html(Team_four_npc_val_num + 1);
//		alert("角色2分数传送+3");
		break;
	case 5:
	console.log(Team_five_npc_val);
		$(".team_five li").html(Team_five_npc_val_num + 1);
//		alert("角色2分数传送+3");
		break;
	}
//--------------------------
	
	
	
}






















	
	
	
	
	
	
	
	
	
	
	






