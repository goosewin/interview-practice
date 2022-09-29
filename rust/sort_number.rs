fn sort_numbers(arr: &Vec<i32>) -> Vec<i32> {
    if arr.len() == 0 {
        return Vec::new();
    } else {
        let mut arr = arr.clone();
        let mut start = 0;
        while start != arr.len() {
            for index in start..arr.len() {
                match arr[index] < arr[start] {
                    true => arr.swap(index, start),
                    false => (),
                }
            }
            start += 1;
        }
        arr
    }
}
