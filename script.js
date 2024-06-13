
const quotes = [
 
   " Many of life's failures are people who did not realize how close they were to success when they gave up.",

   " Life is like a coin. You can spend it any way you wish, but you only spend it once.",

   "Never let the fear of striking out keep you from playing the game.",

   " Don't settle for what life gives you; make life better and build something.",

   "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",

   "The best way to predict your future is to create it",

   "If you want to live a happy life, tie it to a goal, not to people or things.",

   "You must expect great things of yourself before you can do them.",

   "It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things",

   "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",

   "You’re braver than you believe, and stronger than you seem, and smarter than you think",

   "Life isn't about finding yourself. Life is about creating yourself."

]
const input = document.getElementById("input")
const index = new Set()

function generateQuotes(){
    if (index.size >= quotes.length ){
        index.clear();
    }

    while(true){
         const randomIndex = Math.floor(Math.random()*quotes.length)
         if (index.has(randomIndex)) continue
            
         
         const quote = quotes[randomIndex] 
         input.innerHTML = quote;
         index.add(randomIndex) 
            break

    }


}
