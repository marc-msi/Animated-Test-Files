const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];


function search(str) {
  let results = fruit.filter(fruitName => {
    return fruitName.toLowerCase().includes(str.toLowerCase());
  });

  return results;
}

function searchHandler(e) {
  const inputValue = e.target.value;
  const results = search(inputValue);

  if (inputValue === '') {
    suggestions.innerHTML = ''; 
  } else {
    showSuggestions(results, inputValue);
  }
}

function showSuggestions(results, inputVal) {
  suggestions.innerHTML = ''; 

  results.forEach(result => {
    const listItem = document.createElement('li');
    listItem.textContent = result;
    suggestions.appendChild(listItem);

    
    listItem.addEventListener('mousedown', () => {
      input.value = result;
      suggestions.innerHTML = ''; 
    });
  });
}

input.addEventListener('keyup', searchHandler);


input.addEventListener('focus', () => {
  const inputValue = input.value;
  if (inputValue !== '') {
    const results = search(inputValue);
    showSuggestions(results, inputValue);
  }
});


input.addEventListener('blur', () => {
  suggestions.innerHTML = ''; 
});
