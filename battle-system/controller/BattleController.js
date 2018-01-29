// DECLARING EVERYTHING FIRST -- USE SERVER SIDE TO ALLOW MORE PLAYER VAR FUNCTIONALITY

var $round = 1;

var $Play1Turn = true;

var $Play2Turn = false;

// STRENGTH AND DEF VALUE -- MAKE 0, LET SERVER PULL REAL VALUES TO STORE INTO VARIABLE //

var $Play1StrVal = 25;

var $Play1DefVal = 25;

var $Play2StrVal = 25;

var $Play2DefVal = 25;

var $Play1Health = 100;

var $Play1Mana = 50;

var $Play2Mana = 50;

var $Play2Health = 100;

var $Play1HolySheild = false;

var $Play2HolySheild = false;

var $Play1FireSpell1 = false;

var $Play1IceSpell1 = false;

var $Play1LightningSpell1 = false;

var $Play1FireSpell2 = false;

var $Play1IceSpell2 = false;

var $Play1LightningSpell2 = false;

var $Play1FireSpell3 = false;

var $Play1IceSpell3 = false;

var $Play1LightningSpell3 = false;

var $Play2FireSpell1 = false;

var $Play2IceSpell1 = false;

var $Play2LightningSpell1 = false;

var $Play2FireSpell2 = false;

var $Play2IceSpell2 = false;

var $Play2LightningSpell2 = false;

var $Play2FireSpell3 = false;

var $Play2IceSpell3 = false;

var $Play2LightningSpell3 = false;



// Swords!---------------------------------------------------------------------------------------

function Play1Star() {
	window.$Play1StrVal = 27;
}

function Play1Cake() {
	$Play1StrVal = 29;
}

function Play1Bread() {
	$Play1StrVal = 31;
}

function Play1Laser() {
	$Play1StrVal = 33;
}

function Play2Star() {
	$Play2StrVal = 27;
}

function Play2Cake() {
	$Play2StrVal = 29;
}

function Play2Bread() {
	$Play2StrVal = 31;
}

function Play2Laser() {
	$Play2StrVal = 33;
}


// PLAYER 1!! ----------------------------------------------------------------------------------


$(document).ready(function(){

	$('.Play1Attb').on('click', function(){

		// HIDE PLAYER 1 TURN CAPABILITIES //

		$(".Play1Attb").hide();
		$(".P1Ab").hide();

		// BRING BACK PLAYER 2 TURN CAPABILITIES //

		$(".Play2Attb").show();
		$(".P2Ab").show();

	});

// PLAYER 2!! ------------------------------------------------------------------------------------

$('.Play2Attb').on('click', function(){

		// HIDE PLAYER 2 TURN CAPABILITIES //

		$(".Play2Attb").hide();
		$(".P2Ab").hide();
		

		// BRING BACK PLAYER 1 TURN CAPABILITIES //

		$(".Play1Attb").show();
		$(".P1Ab").show();

	});

// START THE GAME 

$("#Ready").on('click', function(){
	$("#ReadyDiv").hide();
	$('.Play1H').html("<br><br>" + "Health:" + ' ' + $Play1Health + '<br><br>' + "Mana:" + ' ' + $Play1Mana);
	$('.Play2H').html("<br><br>" + "Health:" + ' ' + $Play2Health + '<br><br>' + "Mana:" + ' ' + $Play2Mana);
	$('.BattleLog').html("Battle Log -- Round " + Math.floor($round) );
	$('.AttScrn2').html("");
	$('.AttScrn1').html("First to 0 Health Dies! Let the Games Begin!");
		});


});

// ENDING GAME DIV

$(document).ready(function(){
	$("#GameOver").hide();

}); 






// ABILITIES! -------------------------------------------------------------------------------------




function Play1HolySheild() {
	if ($Play1Mana >= 30) {
			$Play1HolySheild = true; 
			$Play1Mana = $Play1Mana - 30;
			$round = $round + 0.5;
			$(".Play1Attb").hide();
			$(".P1Ab").hide();
			$(".Play2Attb").show();
			$(".P2Ab").show();
			$('.Play1H').html("<br><br>" + "Health:" + ' ' + $Play1Health + '<br><br>' + "Mana:" + ' ' + $Play1Mana);
			$('.Play2H').html("<br><br>" + "Health:" + ' ' + $Play2Health + '<br><br>' + "Mana:" + ' ' + $Play2Mana);
			$('.BattleLog').html("Battle Log -- Round " + Math.floor($round) );
			$('.AttScrn1').html("<br><br>" + "Player 1 Casted Holy Sheild!");
			$('.AttScrn2').html("");
			$Play2Mana = $Play2Mana + 5;
		}
	else {
		$('.AttScrn1').html("Not Enough Mana!");
		$('.AttScrn2').html("");
	}
}

function Play2HolySheild() {
	if ($Play2Mana >= 30) {
			$Play2HolySheild = true;
			$Play2Mana = $Play2Mana - 30; 
			$round = $round + 0.5;
			$(".Play2Attb").hide();
			$(".P2Ab").hide();
			$(".Play1Attb").show();
			$(".P1Ab").show();
			$('.Play1H').html("<br><br>" + "Health:" + ' ' + $Play1Health + '<br><br>' + "Mana:" + ' ' + $Play1Mana);
			$('.Play2H').html("<br><br>" + "Health:" + ' ' + $Play2Health + '<br><br>' + "Mana:" + ' ' + $Play2Mana);
			$('.BattleLog').html("Battle Log -- Round " + Math.floor($round) );
			$('.AttScrn2').html("<br><br>" + "Player 2 Casted Holy Sheild!");
			$('.AttScrn1').html("");
			$Play1Mana = $Play1Mana + 5;
		}
	else {
		$('.AttScrn2').html("Not Enough Mana!");
		$('.AttScrn1').html("");
	}

}



		// PLAYER 1 HEALING SPELLS




function Play1HealSpell1() {
	if ($Play1Mana >= 10) {
		$Play1Mana = $Play1Mana - 10;
		$Play1Health = $Play1Health + 40;
		$round = $round + 0.5;
		$(".Play1Attb").hide();
		$(".P1Ab").hide();
		$(".Play2Attb").show();
		$(".P2Ab").show();
		$('.Play1H').html("<br><br>" + "Health:" + ' ' + $Play1Health + '<br><br>' + "Mana:" + ' ' + $Play1Mana);
		$('.Play2H').html("<br><br>" + "Health:" + ' ' + $Play2Health + '<br><br>' + "Mana:" + ' ' + $Play2Mana);
		$('.BattleLog').html("Battle Log -- Round " + Math.floor($round) );
		$('.AttScrn1').html("<br><br>" + "Player 1 Healed for 40 HP!");
		$('.AttScrn2').html("");
		$Play2Mana = $Play2Mana + 5;
	}

	else {
		$('.AttScrn1').html("Not Enough Mana!");
		$('.AttScrn2').html("");
	}
}

function Play1HealSpell2() {
	if ($Play1Mana >= 30) {
		$Play1Mana = $Play1Mana - 30;
		$Play1Health = $Play1Health + 60;
		$round = $round + 0.5;
		$(".Play1Attb").hide();
		$(".P1Ab").hide();
		$(".Play2Attb").show();
		$(".P2Ab").show();
		$('.Play1H').html("<br><br>" + "Health:" + ' ' + $Play1Health + '<br><br>' + "Mana:" + ' ' + $Play1Mana);
		$('.Play2H').html("<br><br>" + "Health:" + ' ' + $Play2Health + '<br><br>' + "Mana:" + ' ' + $Play2Mana);
		$('.BattleLog').html("Battle Log -- Round " + Math.floor($round) );
		$('.AttScrn1').html("<br><br>" + "Player 1 Healed for 60 HP!");
		$('.AttScrn2').html("");
		$Play2Mana = $Play2Mana + 5;

	}

	else {
		$('.AttScrn1').html("Not Enough Mana!");
		$('.AttScrn2').html("");
	}
}

function Play1HealSpell3() {
	if ($Play1Mana >= 50) {
		$Play1Mana = $Play1Mana - 50;
		$Play1Health = $Play1Health + 100;
		$round = $round + 0.5;
		$(".Play1Attb").hide();
		$(".P1Ab").hide();
		$(".Play2Attb").show();
		$(".P2Ab").show();
		$('.Play1H').html("<br><br>" + "Health:" + ' ' + $Play1Health + '<br><br>' + "Mana:" + ' ' + $Play1Mana);
		$('.Play2H').html("<br><br>" + "Health:" + ' ' + $Play2Health + '<br><br>' + "Mana:" + ' ' + $Play2Mana);
		$('.BattleLog').html("Battle Log -- Round " + Math.floor($round) );
		$('.AttScrn1').html("<br><br>" + "Player 1 Healed for 100 HP!");
		$('.AttScrn2').html("");
		$Play2Mana = $Play2Mana + 5;
	}

	else {
		$('.AttScrn1').html("Not Enough Mana!");
		$('.AttScrn2').html("");
	}
}





			// PLAYER 2 HEAL SPELLS




function Play2HealSpell1() {
	if ($Play2Mana >= 10) {
		$Play2Mana = $Play2Mana - 10;
		$Play2Health = $Play2Health + 40;
		$round = $round + 0.5;
		$(".Play2Attb").hide();
		$(".P2Ab").hide();
		$(".Play1Attb").show();
		$(".P1Ab").show();
		$('.Play1H').html("<br><br>" + "Health:" + ' ' + $Play1Health + '<br><br>' + "Mana:" + ' ' + $Play1Mana);
		$('.Play2H').html("<br><br>" + "Health:" + ' ' + $Play2Health + '<br><br>' + "Mana:" + ' ' + $Play2Mana);
		$('.BattleLog').html("Battle Log -- Round " + Math.floor($round) );
		$('.AttScrn2').html("<br><br>" + "Player 2 Healed for 40 HP!");
		$('.AttScrn1').html("");
		$Play1Mana = $Play1Mana + 5;
	}

	else {
		$('.AttScrn2').html("Not Enough Mana!");
		$('.AttScrn1').html("");
	}
}

function Play2HealSpell2() {
	if ($Play2Mana >= 30) {
		$Play2Mana = $Play2Mana - 30;
		$Play2Health = $Play2Health + 60;
		$round = $round + 0.5;
		$(".Play2Attb").hide();
		$(".P2Ab").hide();
		$(".Play1Attb").show();
		$(".P1Ab").show();
		$('.Play1H').html("<br><br>" + "Health:" + ' ' + $Play1Health + '<br><br>' + "Mana:" + ' ' + $Play1Mana);
		$('.Play2H').html("<br><br>" + "Health:" + ' ' + $Play2Health + '<br><br>' + "Mana:" + ' ' + $Play2Mana);
		$('.BattleLog').html("Battle Log -- Round " + Math.floor($round) );
		$('.AttScrn2').html("<br><br>" + "Player 2 Healed for 60 HP!");
		$('.AttScrn1').html("");
		$Play1Mana = $Play1Mana + 5;
	}

	else {
		$('.AttScrn2').html("Not Enough Mana!");
		$('.AttScrn1').html("");
	}
}

function Play2HealSpell3() {
	if ($Play2Mana >= 50) {
		$Play2Mana = $Play2Mana - 50;
		$Play2Health = $Play2Health + 100;
		$round = $round + 0.5;
		$(".Play2Attb").hide();
		$(".P2Ab").hide();
		$(".Play1Attb").show();
		$(".P1Ab").show();
		$('.Play1H').html("<br><br>" + "Health:" + ' ' + $Play1Health + '<br><br>' + "Mana:" + ' ' + $Play1Mana);
		$('.Play2H').html("<br><br>" + "Health:" + ' ' + $Play2Health + '<br><br>' + "Mana:" + ' ' + $Play2Mana);
		$('.BattleLog').html("Battle Log -- Round " + Math.floor($round) );
		$('.AttScrn2').html("<br><br>" + "Player 1 Healed for 100 HP!");
		$('.AttScrn1').html("");
		$Play1Mana = $Play1Mana + 5;
	}

	else {
		$('.AttScrn2').html("Not Enough Mana!");
		$('.AttScrn1').html("");
	}
}




			// PLAYER 1 ATTACK SPELLS FUNCTION

	function Play1FireSpell1() {

		if ($Play1Mana >= 10) {
			$Play1FireSpell1 = true;
			attack1();
			$(".Play1Attb").hide();
			$(".P1Ab").hide();
			$(".Play2Attb").show();
			$(".P2Ab").show();
		}

		else {
			$('.AttScrn1').html("Not Enough Mana!");
			$('.AttScrn2').html("");

		}
	}

	function Play1IceSpell1() {

		if ($Play1Mana >= 10) {
			$Play1IceSpell1 = true;
			attack1();
			$(".Play1Attb").hide();
			$(".P1Ab").hide();
			$(".Play2Attb").show();
			$(".P2Ab").show();
		}

		else {
			$('.AttScrn1').html("Not Enough Mana!");
			$('.AttScrn2').html("");
		}
	}

	function Play1LightningSpell1() {

		if ($Play1Mana >= 10) {
			$Play1LightningSpell1 = true;
			attack1();
			$(".Play1Attb").hide();
			$(".P1Ab").hide();
			$(".Play2Attb").show();
			$(".P2Ab").show();
		}

		else {
			$('.AttScrn1').html("Not Enough Mana!");
			$('.AttScrn2').html("");
		}
	}

	function Play1FireSpell2() {

		if ($Play1Mana >= 30) {
			$Play1FireSpell2 = true;
			attack1();
			$(".Play1Attb").hide();
			$(".P1Ab").hide();
			$(".Play2Attb").show();
			$(".P2Ab").show();
		}

		else {
			$('.AttScrn1').html("Not Enough Mana!");
			$('.AttScrn2').html("");
		}
	}

	function Play1IceSpell2() {

		if ($Play1Mana >= 30) {
			$Play1IceSpell2 = true;
			attack1();
			$(".Play1Attb").hide();
			$(".P1Ab").hide();
			$(".Play2Attb").show();
			$(".P2Ab").show();
		}

		else {
			$('.AttScrn1').html("Not Enough Mana!");
			$('.AttScrn2').html("");
		}
	}

	function Play1LightningSpell2() {

		if ($Play1Mana >= 30) {
			$Play1LightningSpell2 = true;
			attack1();
			$(".Play1Attb").hide();
			$(".P1Ab").hide();
			$(".Play2Attb").show();
			$(".P2Ab").show();
		}

		else {
			$('.AttScrn1').html("Not Enough Mana!");
			$('.AttScrn2').html("");
		}
	}

	function Play1FireSpell3() {

		if ($Play1Mana >= 50) {
			$Play1FireSpell3 = true;
			attack1();
			$(".Play1Attb").hide();
			$(".P1Ab").hide();
			$(".Play2Attb").show();
			$(".P2Ab").show();
		}

		else {
			$('.AttScrn1').html("Not Enough Mana!");
			$('.AttScrn2').html("");
		}
	}

	function Play1IceSpell3() {

		if ($Play1Mana >= 50) {
			$Play1IceSpell3 = true;
			attack1();
			$(".Play1Attb").hide();
			$(".P1Ab").hide();
			$(".Play2Attb").show();
			$(".P2Ab").show();
		}

		else {
			$('.AttScrn1').html("Not Enough Mana!");
			$('.AttScrn2').html("");
		}
	}

	function Play1LightningSpell3() {

		if ($Play1Mana >= 50) {
			$Play1LightningSpell3 = true;
			attack1();
			$(".Play1Attb").hide();
			$(".P1Ab").hide();
			$(".Play2Attb").show();
			$(".P2Ab").show();
		}

		else {
			$('.AttScrn1').html("Not Enough Mana!");
			$('.AttScrn2').html("");
		}
	}






  	// PLAYER ONE MELEE ATTACK FUNCTION // ----------------------------------------------------------------------------



			function attack1() {

	// Strength Value Converted To DPS //


	if ($Play1StrVal == 27) {
			$Play1Att =  Math.floor((Math.random() * 300) + (Math.random() *300)); 
	}

	else if ($Play1StrVal == 29) {
			$Play1Att =  Math.floor((Math.random() * 700) + (Math.random() *700)); 
	}

	else if ($Play1StrVal == 31) {
			$Play1Att =  Math.floor((Math.random() * 1100) + (Math.random() *1100)); 
	}

	else if ($Play1StrVal == 33) {
			$Play1Att =  Math.floor((Math.random() * 1600) + (Math.random() *1600));
	}

	else {
		alert("Games Broken!")
	}


			// FACTORING ENEMY DEFENSE WITH PLAYER 1 ATTACK

		
			var $AttScale = ($Play2DefVal/$Play1StrVal) * 30;
			$Play1Att = Math.floor( ($Play1Att - ($AttScale / 100) * $Play1Att));
			


			// FACTORING PLAYER 1 ATTACK SPELL ACTIVITY

			if ($Play1FireSpell1 == true) {
				$Play1Att = 20;
				$Play1Mana = $Play1Mana - 10;
			}

			else if ($Play1FireSpell2 == true) {
				$Play1Att = 40;
				$Play1Mana = $Play1Mana - 30;
			}
		

			else if ($Play1FireSpell3 == true) {
				$Play1Att = 60;
				$Play1Mana = $Play1Mana - 50;
			}

			else if ($Play1IceSpell1 == true) {
				$Play1Att = 20;
				$Play1Mana = $Play1Mana - 10;
			}
		

			else if ($Play1IceSpell2 == true) {
				$Play1Att = 40;
				$Play1Mana = $Play1Mana - 30;
			}

			else if ($Play1IceSpell3 == true) {
				$Play1Att = 60;
				$Play1Mana = $Play1Mana - 50;
			}
		

			else if ($Play1LightningSpell1 == true) {
				$Play1Att = 20;
				$Play1Mana = $Play1Mana - 10;
			}

			else if ($Play1LightningSpell2 == true) {
				$Play1Att = 40;
				$Play1Mana = $Play1Mana - 30;
			}
		

			else if ($Play1LightningSpell3 == true) {
				$Play1Att = 60;
				$Play1Mana = $Play1Mana - 50;
			}

			else {
				$Play1Att = $Play1Att
			}



			// FACTORING ENEMY DEFENSE ABILITIES!!


			if ($Play2HolySheild == true) {

					$Play1Att = $Play1Att * 0.5;
				}

			else {
					$Play1Att = $Play1Att;
				} 

				$Play2Health = $Play2Health - $Play1Att;



			// BATTLE LOGS!!!
			$Play2Mana = $Play2Mana + 5;

			$('.Play1H').html("<br><br>" + "Health:" + ' ' + $Play1Health + '<br><br>' + "Mana:" + ' ' + $Play1Mana);
			$('.Play2H').html("<br><br>" + "Health:" + ' ' + $Play2Health + '<br><br>' + "Mana:" + ' ' + $Play2Mana);
			$('.AttScrn1').html("<br><br>" + "Player 1 Dealt " +  $Play1Att + " Damage to Player 2!");
			$('.AttScrn2').html("");
			$('.BattleLog').html("Battle Log -- Round " + Math.floor($round) )

			if ($Play1Health <= 0 || $Play2Health <= 0) {
					$("#GameOver").show();
						}

					else {

						}
			

			// ROUND INCREASE!

			$round = $round + 0.5
			$Play1Turn = false;
			$Play2Turn = true;

			// ABULITY RESETS AND MANA INCREASE!!!

			$Play2HolySheild = false;
			$Play1FireSpell1 = false;
			$Play1FireSpell2 = false;
			$Play1FireSpell3 = false;
			$Play1IceSpell1 = false;
			$Play1IceSpell2 = false;
			$Play1IceSpell3 = false;
			$Play1LightningSpell1 = false;
			$Play1LightningSpell2 = false;
			$Play1LightningSpell3 = false;

	}



	// PLAYER 2 ATTACK SPELLS FUNCTION

	function Play2FireSpell1() {

		if ($Play2Mana >= 10) {
			$Play2FireSpell1 = true;
			attack2();
		$(".Play2Attb").hide();
		$(".P2Ab").hide();
		$(".Play1Attb").show();
		$(".P1Ab").show();
		}

		else {
			$('.AttScrn2').html("Not Enough Mana!");
			$('.AttScrn1').html("");
		}
	}

	function Play2IceSpell1() {

		if ($Play2Mana >= 10) {
			$Play2IceSpell1 = true;
			attack2();
		$(".Play2Attb").hide();
		$(".P2Ab").hide();
		$(".Play1Attb").show();
		$(".P1Ab").show();
		}

		else {
			$('.AttScrn2').html("Not Enough Mana!");
			$('.AttScrn1').html("");
		}
	}

	function Play2LightningSpell1() {

		if ($Play2Mana >= 10) {
			$Play2LightningSpell1 = true;
			attack2();
		$(".Play2Attb").hide();
		$(".P2Ab").hide();
		$(".Play1Attb").show();
		$(".P1Ab").show();
		}

		else {
			$('.AttScrn2').html("Not Enough Mana!");
			$('.AttScrn1').html("");
		}
	}

	function Play2FireSpell2() {

		if ($Play2Mana >= 30) {
			$Play2FireSpell2 = true;
			attack2();
		$(".Play2Attb").hide();
		$(".P2Ab").hide();
		$(".Play1Attb").show();
		$(".P1Ab").show();
		
		}

		else {
			$('.AttScrn2').html("Not Enough Mana!");
			$('.AttScrn1').html("");
		}
	}

	function Play2IceSpell2() {

		if ($Play2Mana >= 30) {
			$Play2IceSpell2 = true;
			attack2();
		$(".Play2Attb").hide();
		$(".P2Ab").hide();
		$(".Play1Attb").show();
		$(".P1Ab").show();
		}

		else {
			$('.AttScrn2').html("Not Enough Mana!");
			$('.AttScrn1').html("");
		}
	}

	function Play2LightningSpell2() {

		if ($Play2Mana >= 30) {
			$Play2LightningSpell2 = true;
			attack2();
		$(".Play2Attb").hide();
		$(".P2Ab").hide();
		$(".Play1Attb").show();
		$(".P1Ab").show();
		}

		else {
			$('.AttScrn2').html("Not Enough Mana!");
			$('.AttScrn1').html("");
		}
	}

	function Play2FireSpell3() {

		if ($Play2Mana >= 50) {
			$Play2FireSpell3 = true;
			attack2();
		$(".Play2Attb").hide();
		$(".P2Ab").hide();
		$(".Play1Attb").show();
		$(".P1Ab").show();
		}

		else {
			$('.AttScrn2').html("Not Enough Mana!");
			$('.AttScrn1').html("");
		}
	}

	function Play2IceSpell3() {

		if ($Play2Mana >= 50) {
			$Play2IceSpell3 = true;
			attack2();
		$(".Play2Attb").hide();
		$(".P2Ab").hide();
		$(".Play1Attb").show();
		$(".P1Ab").show();
		}

		else {
			$('.AttScrn2').html("Not Enough Mana!");
			$('.AttScrn1').html("");
		}
	}

	function Play2LightningSpell3() {

		if ($Play2Mana >= 50) {
			$Play2LightningSpell3 = true;
			attack2();
		$(".Play2Attb").hide();
		$(".P2Ab").hide();
		$(".Play1Attb").show();
		$(".P1Ab").show();
		}

		else {
			$('.AttScrn2').html("Not Enough Mana!");
			$('.AttScrn1').html("");
		}
	};




	// PLAYER 2 MELEE ATTACK FUNTION ---------------------------------------------------------------------------------



	function attack2() {

	if ($Play2StrVal == 27) {
			$Play2Att =  Math.floor((Math.random() * 300) + (Math.random() *300)); 
	}

	else if ($Play2StrVal == 29) {
			$Play2Att =  Math.floor((Math.random() * 700) + (Math.random() *700)); 
	}

	else if ($Play2StrVal == 31) {
			$Play2Att =  Math.floor((Math.random() * 1100) + (Math.random() *1100)); 
	}

	else if ($Play2StrVal == 33) {
			$Play2Att =  Math.floor((Math.random() * 1600) + (Math.random() *1600)); 
	}

	else {
		alert("Games Broken!")
	}



			// FACTORING ENEMY DEFENSE WITH PLAYER 2 ATTACK


			var $AttScale = ($Play1DefVal/$Play2StrVal) * 30;
			$Play2Att = Math.floor( ($Play2Att - ($AttScale / 100) * $Play2Att));



			// FACTORING ENEMY DEFENSE BUFFS!!


			
		if ($Play1HolySheild == true) {

					$Play2Att = $Play2Att * 0.5;
				}

			else {
					$Play2Att = $Play2Att;
				} 

			
			// FACTORING PLAYER 2 ATTACK SPELL ACTIVITY

			if ($Play2FireSpell1 == true) {
				$Play2Att = 20;
				$Play2Mana = $Play2Mana - 10;
			}

			else if ($Play2FireSpell2 == true) {
				$Play2Att = 40;
				$Play2Mana = $Play2Mana - 30;
			}
		

			else if ($Play2FireSpell3 == true) {
				$Play2Att = 60;
				$Play2Mana = $Play2Mana - 50;
			}

			else if ($Play2IceSpell1 == true) {
				$Play2Att = 20;
				$Play2Mana = $Play2Mana - 10;
			}
		

			else if ($Play2IceSpell2 == true) {
				$Play2Att = 40;
				$Play2Mana = $Play2Mana - 30;
			}

			else if ($Play2IceSpell3 == true) {
				$Play2Att = 60;
				$Play2Mana = $Play2Mana - 50;
			}
		

			else if ($Play2LightningSpell1 == true) {
				$Play2Att = 20;
				$Play2Mana = $Play2Mana - 10;
			}

			else if ($Play2LightningSpell2 == true) {
				$Play2Att = 40;
				$Play2Mana = $Play2Mana - 30;
			}
		

			else if ($Play2LightningSpell3 == true) {
				$Play2Att = 60;
				$Play2Mana = $Play2Mana - 50;
			}

			else {
				$Play2Att = $Play2Att;
			}


			// FINAL ATTACK AFTER FACTORS!!!


			$Play1Health = $Play1Health - $Play2Att;



			// BATTLE LOGS!!!

			$Play1Mana = $Play1Mana + 5;
		
			$('.Play1H').html("<br><br>" + "Health:" + ' ' + $Play1Health + '<br><br>' + "Mana:" + ' ' + $Play1Mana);
			$('.Play2H').html("<br><br>" + "Health:" + ' ' + $Play2Health + '<br><br>' + "Mana:" + ' ' + $Play2Mana);
			$('.AttScrn2').html("<br><br>" + "Player 2 Dealt " +  $Play2Att + " Damage to Player 1!");
			$('.AttScrn1').html("");
			$('.BattleLog').html("Battle Log -- Round " + Math.floor($round) )

			if ($Play1Health <= 0 || $Play2Health <= 0) {
					$("#GameOver").show();
						}

					else {

						}

			// ROUND INCREASE

			$round = $round + 0.5

			$Play2Turn = false;
			$Play1Turn = true;

			// ABILITY RESETS!

			$Play1HolySheild = false;
			$Play2FireSpell1 = false;
			$Play2FireSpell2 = false;
			$Play2FireSpell3 = false;
			$Play2IceSpell1 = false;
			$Play2IceSpell2 = false;
			$Play2IceSpell3 = false;
			$Play2LightningSpell1 = false;
			$Play2LightningSpell2 = false;
			$Play2LightningSpell3 = false;
			

	};

