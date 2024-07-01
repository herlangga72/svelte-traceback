// place files you want to import through the `$lib` alias in this folder.
import { codeToHtml } from "shiki";

export async function load({ params, url }) {
    let code = url.searchParams.get('code') || "";
    let codeHTml = await codeToHtml(code,{
        lang:"python",
        theme:"github-dark",
    });
    return { code: codeHTml};
}