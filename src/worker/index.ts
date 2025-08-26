// Minecraft QUIC Proxy - Cloudflare Workers
console.log('🎮 Minecraft QUIC Proxy loaded!');

// Add any interactive functionality here
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ DOM loaded, proxy ready!');
    
    // Add click handlers for endpoints
    const endpoints = document.querySelectorAll('.endpoint');
    endpoints.forEach(endpoint => {
        endpoint.addEventListener('click', () => {
            console.log('🔗 Endpoint clicked:', endpoint.textContent);
        });
    });
});
