// place files you want to import through the `$lib` alias in this folder.
export async function load({ params, url }) {
    let code = url.searchParams.get('code');
    console.log(code);
    return { code: code};
}