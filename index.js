
var nav_items = document.querySelector('.nav-items');
var content_items = document.querySelector('.content-items');
for (var i = 0; i < nav_items.children.length; i++) {
    nav_items.children[i].querySelector('a').index = i;
    // 排他思想
    nav_items.children[i].querySelector('a').addEventListener('click', function () {
        for (var j = 0; j < content_items.children.length; j++) {
            content_items.children[j].style.display = 'none';
        }
        content_items.children[this.index].style.display = 'block';
    })
}
