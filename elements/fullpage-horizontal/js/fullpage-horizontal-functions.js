
function getHash() {
    return window.location.hash.toString().slice(1);
}

function setHash(value) {
    window.location.hash = value;
}