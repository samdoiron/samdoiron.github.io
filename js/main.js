if (document.readyState != 'loading') {
    InstantClick.init();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        InstantClick.init();
    });
}
