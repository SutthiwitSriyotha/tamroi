function toggleFavorites(menuName) {
    
    let favorites = localStorage.getItem('favorites');
    
    if (!favorites) {
        
        favorites = [];
    } else {
        
        favorites = JSON.parse(favorites);
    }
    
    const index = favorites.indexOf(menuName);
    if (index === -1) {
        
        favorites.push(menuName);
        alert("ท่านได้เพิ่มเมนูนี้ในรายการโปรดแล้ว");
        document.getElementById('favorite-button').innerText = 'นำออกจากรายการโปรด';
    } else {
        
        favorites.splice(index, 1);
        alert("ท่านได้นำเมนูนี้ออกจากรายการโปรดแล้ว");
        document.getElementById('favorite-button').innerText = '+ เพิ่มในรายการโปรด';
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    
}
