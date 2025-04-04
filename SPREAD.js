const liItems = document.getElementsByTagName('li');

console.log(liItems);

liItems.forEach(item => {
    item.style.color = 'red';
});

liItems.map(item => item.style.color = 'red'); // ...  =>  OPERATOR SPRED jesli cos nie jest tablica to nagle sie nia staje i metoda dziala pzdr

