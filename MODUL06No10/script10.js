(function(){
	function Question(question, answers, correct){
		this.question=question;
		this.answers=answers;
		this.correct=correct;
	}
	Question.prototype.displayQuestion=function(){
		console.log(this.question);
		for(var i=0; i<this.answers.length; i++){
			console.log(i+':' +this.answers[i]);
		}
	}
	Question.prototype.checkAnswer=function(ans){
		if(ans===this.correct){
			console.log('jawaban anda benar!');
		}else{
			console.log('salah.coba lagi :)')
		}
	}
	var q1 = new Question('Apakah Javascript bahasa pemrograman paling keren sedunia?',
								['Ya', 'Enggak'],
								0);
	var q2 = new Question('Siapa Nama Dosen yang Mengajar Kuliah ini?',
								['John', 'Michela', 'Oskar', 'Sandra'],
								2);
	var q3 = new Question('Kata yang paling bagus mendiskripsikan koding?',
								['Bosen', 'Susah', 'Membahagiakan', 'Membosankan'],
								2);
	var q4 = new Question('Kampus Stikom Yos Sudarso Terletak dijalan Apakah?',
								['Jl.Smp 5 Karanglewas', 'Jl.Smp 5 Karang Klesem', 'Jl.Smp 6 Karang Klesem', 'Jl.Smp 7 Karang Klesem'],
								1);
	var q5 = new Question('Berapa jumlah program studi yang ada di Stikom Yos Sudarso Purwokerto?',
								['1', '3', '2', '4'],
								3);
	var question=[q1, q2, q3, q4, q5];
	var n=Math.floor(Math.random() *question.length);
	question[n].displayQuestion();
	var answer =parseInt(prompt('pilih jawaban yang benar.'));
	question[n].checkAnswer(answer);
	function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

})();