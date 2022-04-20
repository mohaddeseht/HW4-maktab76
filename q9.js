function protect(email) {
    let cut = email.split("@");
    let part1 = cut[0];
    let len = String(part1.length);
    part1 = part1.substring(0, (part1.length - len));
    // return part1 + "...@" + cut[1];
    return part1;
}
console.log(protect("robin_singh@example.com"));