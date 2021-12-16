BEGIN{
	printf "%-10s%-10s\n", "Tester", "TotalTestcases"
}

{
	USERS[$4] += 1
}

END{

	for (u in USERS)
	{
		printf "%-10s%-10s\n", u, USERS[u]

	}
}
