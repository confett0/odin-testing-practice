const analyzeArray = (arr) => {
    if (arr.length === 0) throw new Error('Please insert a non empty array');
    return {
        average: arr.reduce((acc,curr) => acc + curr, 0) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    }
}

module.exports = analyzeArray;