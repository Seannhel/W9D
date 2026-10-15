
 // Create an array of 10 tweets
let tweets = [
    { tweet: "Good morning!", username: "Sean", created_at: "10-01-2026", age: 21 },
    { tweet: "I love coding!", username: "Alex", created_at: "10-02-2026", age: 17 },
    { tweet: "What a nice day!", username: "John", created_at: "10-03-2026", age: 25 },
    { tweet: "Playing games!", username: "Mike", created_at: "10-04-2026", age: 16 },
    { tweet: "Learning JavaScript!", username: "Sarah", created_at: "10-05-2026", age: 19 },
    { tweet: "Hello everyone!", username: "James", created_at: "10-06-2026", age: 15 },
    { tweet: "Time for coffee!", username: "Anna", created_at: "10-07-2026", age: 22 },
    { tweet: "School is fun!", username: "Chris", created_at: "10-08-2026", age: 14 },
    { tweet: "Happy Friday!", username: "Emily", created_at: "10-09-2026", age: 30 },
    { tweet: "I love airplanes!", username: "David", created_at: "10-10-2026", age: 17 }
];

// While loop for users 18 and older
let i = 0;

while (i < tweets.length) {
    if (tweets[i].age >= 18) {
        console.log(tweets[i].tweet, tweets[i].username, tweets[i].created_at);
    }
    i++;
}

// For loop for users under 18
for (let j = 0; j < tweets.length; j++) {
    if (tweets[j].age < 18) {
        console.log(tweets[j].tweet, tweets[j].username, tweets[j].created_at);
    }
}
