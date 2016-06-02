//translate
function isVowel(char){
	return ("aeiou".indexOf(char)>=0)?true:false;
}



function translate(word) {
	var result ="";
	for (i=0; i<word.length; i++){
		
		if (isVowel(word[i])){
			result+= word[i];
		} else {
			result += word[i] +"o"+ word[i];
		}
	}
	return result;
}

translate("test")


//sum and multiply
function sum(numbers){
	var result = 0;
	for (i=0; i<numbers.length;i++){
		result+= numbers[i];
	}
	return result;
};

sum([1,2,3,4,5])


function multi(numbers){
	var result = 1;
	for (i=0; i<numbers.length;i++){
		result*= numbers[i];
	}
	return result;
};

multi([1,2,3,4])


//reverse

function reverse (text) {
	var result= "" ;
	for (var i=text.length-1; i>=0; i--) {
	result += text[i];
	};
	return result;
};
reverse("i am some text")


//translate()

function swedishtrans(season) {
//	var swedish = ["a","b"];
	var dictionary = {			
			merry:"god",
			christmas:"jul",
			and:"och",
			happy:"gott",
			old:"nytt",
			year:"ar" };
	for (var i=1; i<season.length-1; i++)
	{
		console.log(dictionary.season[i]);
//	swedish.push(dictionary.season[i]);
	};
//	return swedish;
};

swedishtrans(["merry", "christmas", "and"])

