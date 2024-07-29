export const fetchInfo = async () => {
    let a = await fetch('https://api.github.com/users/NikCodePro')
    let b = a.json()
    return b
}