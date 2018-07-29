var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
	'X-Client-Id': '3414',
	'X-Auth-Token': 'ab4f45ccecb8b9fdb508ae91131cf92e',
	'Content-Type': 'application/json; charset=utf-8'
};
fetch(baseUrl + '/board', {
	headers: myHeaders
}).then(function (resp) {
	return resp.json();
}).then(function (resp) {
	setupColumns(resp.columns);
});

function setupColumns(columns) {
	columns.forEach(function (column) {
		var col = new Column(column.id, column.name);
		board.addColumn(col);
		setupCards(col, column.cards);
	});
}

function setupCards(col, cards) {
	cards.forEach(function (card) {
		var cardObj = new Card(card.id, card.name);
		col.addCard(cardObj);
	});
}

function generateTemplate(name, data, basicElement) {
	var template = document.getElementById(name).innerHTML;
	var element = document.createElement(basicElement || 'div');
	Mustache.parse(template);
	element.innerHTML = Mustache.render(template, data);
	return element;
}