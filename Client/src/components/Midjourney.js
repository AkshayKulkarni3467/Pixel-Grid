async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/Kvikontent/midjourney-v6",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.blob();
	return result;
}
query({"inputs": "Astronaut riding a horse"}).then((response) => {
	// Use image
	console.log(typeof(response))
	console.log(response)
});