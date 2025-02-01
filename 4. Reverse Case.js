function reverseCase(str) {
    return str
        .split('')
        .map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
        .join('');
}

console.log(reverseCase("HeLLo WoRLd"));
