function compareByDate(a, b) {
    var dateA = new Date(a.createdAt);
    var dateB = new Date(b.createdAt);
    if (dateA < dateB) {
    }
    if (dateA > dateB) {
        return 1;
    }
    return 0;
}

export function sortMessageByDate(messages){
    let result = messages.sort(compareByDate);
    return result;
}