use std::collections::HashMap;

fn product_fib(prod: u64) -> (u64, u64, bool) {
    let mut i1 = 0;
    let mut i2 = 1;
    while i1 * i2 < prod {
        let inc = i1 + i2;
        i1 = i2;
        i2 = inc;
    }
    (i1, i2, prod == i1 * i2)
}

fn fib(n: u64, map: &mut HashMap<u64, u64>) -> u64 {
    match n {
        0 | 1 => 1,
        _ => {
            if map.contains_key(&n) {
                *map.get(&n).unwrap()
            } else {
                let val = fib(n - 1, map) + fib(n - 2, map);
                map.insert(n, val);
                val
            }
        }
    }
}

fn fib_products(n: u64) -> (u64, u64, u64) {
    let mut map = HashMap::new();
    match n {
        0 => (0, 1, 0),
        1 => (0, 1, 1),
        _ => (
            fib(n - 2, &mut map),
            fib(n - 1, &mut map),
            fib(n - 1, &mut map) * fib(n - 2, &mut map),
        ),
    }
}

fn product_fib2(prod: u64) -> (u64, u64, bool) {
    let mut n = 0;
    loop {
        n += 1;
        if prod == fib_products(n).2 {
            return (fib_products(n).0, fib_products(n).1, true);
        }

        if prod < fib_products(n).2 {
            return (fib_products(n).0, fib_products(n).1, false);
        }
    }
}
