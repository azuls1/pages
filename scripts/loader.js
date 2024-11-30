const totalAssets = 19;
let currentAsset = 0;

const loadingFill = document.querySelector('.loading-fill');
const loadingText = document.querySelector('.loading-text');
const loadingScreen = document.querySelector('.loading-screen');
const iframe = document.querySelector('iframe');

function updateProgress() {
    const progress = (currentAsset / totalAssets) * 100;
    loadingFill.style.width = progress + '%';
    loadingText.textContent = `Loading assets ${currentAsset}/${totalAssets}`;
}

function loadIframe() {
    iframe.addEventListener('load', () => {
        currentAsset++;
        updateProgress();
        if (currentAsset >= totalAssets) {
            finalizeLoading();
        }
    });
}

function finalizeLoading() {
    loadingText.textContent = "All assets loaded!";
    loadingText.style.animation = 'bounce-up 0.6s ease-in-out';
    setTimeout(() => {
        loadingScreen.style.opacity = 0;
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 1000);
    }, 1500);
}

function loadAssets() {
    const interval = setInterval(() => {
        if (currentAsset >= totalAssets - 1) {
            clearInterval(interval);
            if (currentAsset === totalAssets - 1) {
                currentAsset++;
                updateProgress();
                finalizeLoading();
            }
        } else {
            currentAsset++;
            updateProgress();
        }
    }, 100);
}

loadIframe();
loadAssets();
