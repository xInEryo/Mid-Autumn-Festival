
var nav_items = document.querySelector('.nav-items');
var content_items = document.querySelector('.content-items');
for (var i = 0; i < nav_items.children.length; i++) {
    nav_items.children[i].children[0].index = i;
    // 排他思想
    nav_items.children[i].children[0].addEventListener('click', function () {
        for (var j = 0; j < content_items.children.length; j++) {
            nav_items.children[j].children[0].className = '';
            content_items.children[j].style.display = 'none';
        }
        this.className = 'current'
        content_items.children[this.index].style.display = 'block';
    })
}
