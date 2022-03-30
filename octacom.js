/*
 * Auto resize height of DOM elements following the max height of the elements
 *
 * @param {array} elements - array of DOM elements
 *
 *
 */

const auto_min_height = (selectors) => {
    //selector = [array of selector]
    selectors.forEach((elements) => {
        let height_array = [];
        elements.forEach(function (item) {
            height_array.push(item.offsetHeight);
        });
        let max_height = Math.max(...height_array);
        elements.forEach(function (item) {
            item.style.minHeight = max_height + "px";
        });
    });
};
