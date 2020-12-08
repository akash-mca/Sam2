<?php
	// includes file
	include("test.php");

	// class and object
	class test {
		public $var = "testing";
	}
	$obj = new test();
	echo $obj->var;
?>