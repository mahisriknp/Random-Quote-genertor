const quotes = [{
    quote: `“They succeed, because they think they can.” `,
    writer: `– Emily Dickinson`
}, {
    quote: `“Nothing is impossible, the word itself says ‘I’m possible’!”`,
    writer: `– Audrey Hepburn`
}, {
    quote: `“They succeed, because they think they can.”`,
    writer: `– Virgil`
}, {
    quote: `“If you have no critics you’ll likely have no success.”`,
    writer: `–  Leonard Cohen`
}, {
    quote: `“If you have no critics you’ll likely have no success.” `,
    writer: `– Douglas MacArthur`
}, {
    quote: `“I don’t believe in failure. It’s not failure if you enjoyed the process.”`,
    writer: `– Soren Kierkegaard`
}, {
    quote: `“It's hard to beat a person who never gives up.”`,
    writer: `–  Babe Ruth`
}, {
    quote: `“Earn Nicely, spend wisely and you will live happily.”`,
    writer: `– Auliq Ice`
} ]



let btn = document.querySelector("#Qbtn");

let quote = document.querySelector(".quote");

let writer = document.querySelector(".writer");


btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    
    
    quote.innerHTML = quotes[random].quote;

    
    writer.innerHTML = quotes[random].writer;
})