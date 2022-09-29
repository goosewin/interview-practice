fn solution(num: i32) -> i32 {
    (3..num).filter(|x| x % 3 == 0 || x % 5 == 0).sum()
}
