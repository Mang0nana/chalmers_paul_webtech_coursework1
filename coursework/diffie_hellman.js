function difhell()
{
	
	var g_value = document.getElementById("g").value;
	var n_value = document.getElementById("n").value;
	var x_value = document.getElementById("x").value;
	var y_value = document.getElementById("y").value;

	var bob_calc1 = (g_value**x_value) % n_value;
	document.getElementById("bob1").innerHTML = bob_calc1;

	var alice_calc1 = (g_value**y_value) % n_value;
	document.getElementById("alice1").innerHTML = alice_calc1

	var bob_calc2 = (alice_calc1**x_value) % n_value;
	document.getElementById("bob2").innerHTML = bob_calc2;
	
	var alice_calc2 = (bob_calc1**y_value) % n_value;
	document.getElementById("alice2").innerHTML = alice_calc2;
}