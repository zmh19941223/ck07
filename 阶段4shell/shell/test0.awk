BEGIN{
	printf "%-10s%-10s\n", "Tester", "TotalTestcases"
}

{
	if ($4 == "lemon")
	{
		COUNT++;
	}
}

END{

	printf "%-10s%-10s\n", "total", "10"
}
