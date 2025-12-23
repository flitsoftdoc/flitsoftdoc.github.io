// Mermaid init for MkDocs Material (supports instant navigation)
if (window.mermaid) {
  window.mermaid.initialize({ startOnLoad: false });
}

if (typeof document$ !== "undefined") {
  // MkDocs Material: re-render on each page change
  document$.subscribe(({ body }) => {
    if (window.mermaid) {
      window.mermaid.run({ nodes: body.querySelectorAll(".mermaid") });
    }
  });
} else {
  // Fallback: render once on load
  document.addEventListener("DOMContentLoaded", () => {
    if (window.mermaid) {
      window.mermaid.run({ nodes: document.querySelectorAll(".mermaid") });
    }
  });
}
