fn tribonacci(signature: &[f64; 3], n: usize) -> Vec<f64> {
	let mut result:Vec<f64> = vec![];
	for x in 0..n {
		if x < 3 {
			result.push(signature[x]);
			continue;
		}
		result.push(result[x - 3] + result[x - 2] + result[x - 1]);
	}
	return result;
}
