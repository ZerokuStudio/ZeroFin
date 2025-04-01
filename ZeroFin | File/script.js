(() => {
    function u() {
        function n(t, e, i) {
            let r = document.createElement("a");
            r.href = t;
            r.target = i;
            r.rel = e;
            document.body.appendChild(r);
            r.click();
            r.remove();
        }
        function o(t) {
            if (this.dataset.hydrated) {
                this.removeEventListener("click", o);
                return;
            }
            t.preventDefault();
            t.stopPropagation();
            let e = this.getAttribute("href");
            if (!e) return;
            if (/Mac|iPod|iPhone|iPad/u.test(navigator.userAgent) ? t.metaKey : t.ctrlKey) return n(e, "", "_blank");
            let r = this.getAttribute("rel") ?? "", c = this.getAttribute("target") ?? "";
            n(e, r, c);
        }
        function a(t) {
            if (this.dataset.hydrated) {
                this.removeEventListener("auxclick", o);
                return;
            }
            t.preventDefault();
            t.stopPropagation();
            let e = this.getAttribute("href");
            e && n(e, "", "_blank");
        }
        function s(t) {
            if (this.dataset.hydrated) {
                this.removeEventListener("keydown", s);
                return;
            }
            if (t.key !== "Enter") return;
            t.preventDefault();
            t.stopPropagation();
            let e = this.getAttribute("href");
            if (!e) return;
            let i = this.getAttribute("rel") ?? "", r = this.getAttribute("target") ?? "";
            n(e, i, r);
        }
        document.querySelectorAll("[data-nested-link]").forEach(t => {
            t instanceof HTMLElement && (t.addEventListener("click", o), t.addEventListener("auxclick", a), t.addEventListener("keydown", s));
        });
    }
    return u;
})()();

(() => {
    function i() {
        for (let e of document.querySelectorAll("[data-framer-original-sizes]")) {
            let t = e.getAttribute("data-framer-original-sizes");
            t === "" ? e.removeAttribute("sizes") : e.setAttribute("sizes", t);
            e.removeAttribute("data-framer-original-sizes");
        }
    }
    function a() {
        window.__framer_onRewriteBreakpoints = i;
    }
    return a;
})()();

document.addEventListener('DOMContentLoaded', () => {
    const preloadLinks = [
        "https://framerusercontent.com/sites/1O4b19IW193pWcubNXpE5J/chunk-T6WLSUG5.mjs",
        "https://framerusercontent.com/sites/1O4b19IW193pWcubNXpE5J/chunk-Q52Q2QTZ.mjs",
        "https://framerusercontent.com/sites/1O4b19IW193pWcubNXpE5J/chunk-JR5VT52U.mjs",
        "https://framerusercontent.com/sites/1O4b19IW193pWcubNXpE5J/chunk-RIUMFBNJ.mjs",
        "https://framerusercontent.com/sites/1O4b19IW193pWcubNXpE5J/chunk-42U43NKG.mjs",
        "https://framerusercontent.com/sites/1O4b19IW193pWcubNXpE5J/YnzadvpiNhEcb04yPUceFUlponKlVjz77TVo7SIouEY.O6TJSBJQ.mjs",
        "https://framerusercontent.com/sites/1O4b19IW193pWcubNXpE5J/chunk-EW3U7NGA.mjs",
        "https://framerusercontent.com/sites/1O4b19IW193pWcubNXpE5J/chunk-7KNHMOQO.mjs",
        "https://framerusercontent.com/sites/1O4b19IW193pWcubNXpE5J/chunk-HJTRIHF6.mjs",
        "https://framerusercontent.com/sites/1O4b19IW193pWcubNXpE5J/chunk-FE7TOXPP.mjs",
        "https://framerusercontent.com/sites/1O4b19IW193pWcubNXpE5J/chunk-ON4BJ4TX.mjs",
        "https://framerusercontent.com/sites/1O4b19IW193pWcubNXpE5J/chunk-EJHNJKBN.mjs",
        "https://framerusercontent.com/sites/1O4b19IW193pWcubNXpE5J/chunk-EFZO7PW6.mjs",
        "https://framerusercontent.com/sites/1O4b19IW193pWcubNXpE5J/script_main.X354BNDS.mjs"
    ];

    preloadLinks.forEach(link => {
        const preloadLink = document.createElement('link');
        preloadLink.rel = 'modulepreload';
        preloadLink.fetchpriority = 'low';
        preloadLink.href = link;
        document.head.appendChild(preloadLink);
    });

    const mainScript = document.createElement('script');
    mainScript.type = 'module';
    mainScript.src = "https://framerusercontent.com/sites/1O4b19IW193pWcubNXpE5J/script_main.X354BNDS.mjs";
    mainScript.async = true;
    mainScript.fetchpriority = 'low';
    document.head.appendChild(mainScript);
});
