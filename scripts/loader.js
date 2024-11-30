const totalAssets = 19;
let currentAsset = 0;

const loadingFill = document.querySelector('.loading-fill');
const loadingText = document.querySelector('.loading-text');
const loadingScreen = document.querySelector('.loading-screen');

function loadAssets() {
    const interval = setInterval(() => {
        currentAsset++;
        const progress = (currentAsset / totalAssets) * 100;

        loadingFill.style.width = progress + '%';
        loadingText.textContent = `Loading assets ${currentAsset}/${totalAssets}`;

        if (currentAsset >= totalAssets) {
            clearInterval(interval);
            loadingText.textContent = "All assets loaded!";
            loadingText.style.animation = 'bounce-up 0.6s ease-in-out';
            setTimeout(() => {
                loadingScreen.style.opacity = 0;
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 1000);
            }, 1500);
        }
    }, 100);
}

loadAssets();
