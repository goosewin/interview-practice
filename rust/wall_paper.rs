fn wall_paper(l: f64, w: f64, h: f64) -> String {
	if l != 0. && w != 0. && h != 0. {
		let needed: f64 = (l * h) * 2. + (w * h) * 2.;
		let result = ((needed + (needed / 100.) * 15.) / 5.2 + 1.) as i32;
		return match result {
			0 => "zero".to_string(),
			1 => "one".to_string(),
			2 => "two".to_string(),
			3 => "three".to_string(),
			4 => "four".to_string(),
			5 => "five".to_string(),
			6 => "six".to_string(),
			7 => "seven".to_string(),
			8 => "eight".to_string(),
			9 => "nine".to_string(),
			10 => "ten".to_string(),
			11 => "eleven".to_string(),
			12 => "twelve".to_string(),
			13 => "thirteen".to_string(),
			14 => "fourteen".to_string(),
			15 => "fifteen".to_string(),
			16 => "sixteen".to_string(),
			17 => "seventeen".to_string(),
			18 => "eighteen".to_string(),
			19 => "nineteen".to_string(),
			20 => "twenty".to_string(),
			_ => panic!("r < 0 or > 20"),
		};
	}
	return "zero".to_string();
}
