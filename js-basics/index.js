// title
// body 
// author
// views
// comments
//   (author, body)
// isLive

const blogPost = {
    title: 'Article Title',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, non!',
    author: 'Joe Bishop',
    views: 214,
    comments: [
        { author: 'Sam', body: 'Cool beans.'},
        { author: 'Paul', body: '10 out of 10'},
    ],
    isLive: true
}

function BlogPost(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

let blogPost2 = new BlogPost('a', 'b', 'c');

console.log(blogPost2);