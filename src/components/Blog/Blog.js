import React from 'react';

const Blog = () => {
    return (
        <div style={{marginTop: '100px', marginLeft: '10%', width: '80%', textAlign: 'justify'}}>
            <div>
                <h2>What is Context Api?</h2>
                <p>Context Api is a React concept which we can use to send any data to any component without using props. Props are very useful way to send data from components to another components but it needs a medium to send data to its child's component. it can't avoid its child components. Instead Context Api can easily send data to any of the components inside it. It does not need any medium to send data.</p>
            </div>
            <div>
                <h2>What is Semantic Tag?</h2>
                <p>
                    We know that HTML has many tags that are used building a website. Some of them work differently. But most html tags do not define what they actually include inside them. But semantic tags are different. A semantic tag is a html tag as well as it describes the different contents or area of a website. Using semantic tags make the codes more understandable to the developers.    
                </p>
            </div>
        </div>
    );
};

export default Blog;