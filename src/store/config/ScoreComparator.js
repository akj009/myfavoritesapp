const scoreComparator = (first, second) => {
    let firstN = Number(first.score);
    let secondN = Number(second.score);
    if(firstN < secondN) {
        return 1;
    } else if(firstN > secondN) {
        return -1;
    } else {
        return 0;
    }
};

export default scoreComparator;