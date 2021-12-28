
// Copy 4 wasm snippets
{
    let wasmSnippet = document.querySelector('.wasm-snippet-trail');
    for (let i = 0; i < 4; i++) {
        let clonedSnippet = wasmSnippet.cloneNode(true);
        wasmSnippet.parentNode.insertBefore(clonedSnippet, wasmSnippet);
    }
}