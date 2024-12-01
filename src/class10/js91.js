// async vs defer

// async , defer is best performance than async 

/* <script src="analytics.js" async></script> */
// The analytics.js script will be fetched and executed as soon as it's available.
// The browser doesn't wait for the DOM to fully load before executing the script.


{/* <script src="app.js" defer></script> */}
// The app.js script will be fetched in parallel with the HTML parsing but executed only after the entire HTML document is parsed.
// This ensures scripts are executed in order, which is important for interdependent scripts.

// In summary, use async for independent scripts and defer for scripts that depend on the DOM or other scripts. This improves performance and ensures the page loads smoothly.