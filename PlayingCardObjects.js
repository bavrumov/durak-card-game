var CLUB = 0, DIAMOND = 1, HEART = 2, SPADE = 3;
var ACE = 14, JACK = 11, QUEEN = 12, KING = 13;
var RANK = 0, SUIT = 1, IMAGE = 2;

function generateDurakDeck()
{
	var deck = new Array();
	for (s = CLUB; s <= SPADE; s++)
		for (r = 6; r <= ACE; r++)
		{
			card=new Card(s, r);
			deck.push(card);
		}
	return deck;
}

function Card(chosenSuit, chosenRank)
{
	this.suit=chosenSuit;
	this.rank=chosenRank;
	this.image="./cardimages/"+chosenRank+"-"+chosenSuit+".png";
}

function CardDeck()
{
	//The deck is a simple array that will
	//be filled with Card objects.
	this.deck = new Array();
	//A series of functions will be used.
	this.peekCard = function(idx)
	{
		if (!idx)
		return this.deck[0];
			
		return this.deck[idx];
	}
	
	this.isEmpty = function()
	{
		return this.deck.length == 0;
	}
	
	this.getNumCards = function()
	{
		return this.deck.length;
	}
	
	this.removeCard = function (idx)
	{
		return this.deck.splice(idx, 1)[0];
	}
	
	this.insertCard = function (c, idx)
	{
		if (!idx)
			this.deck.push(c);
		else
			this.deck.splice(idx, 0, c);
	}
	
	this.emptyDeck = function ()
	{
		this.deck.splice(0, this.deck.length);
	}
	
	this.shuffle = function ()
	{
		tmp = new Array();
		while (this.deck.length > 0)
		{
			cardIdx = parseInt(Math.random() * this.deck.length);
			tmp.push(this.removeCard(cardIdx));
		}
		
		this.deck = tmp;
	}
	
	this.dealCard = function ()
	{
		return this.removeCard(0);
	}
}