import React from 'react';

function Intro(){
    return(
        <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
            <h1 className="text-4xl md:text-7x1 mb-1 md:mb-3 font-bold">Priyanka Madaan</h1>
            <p className="text-base md:text-x1 mb-3 font-medium"><a href='https://www.linkedin.com/in/priyanka-madaan/' target="-blank" className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-cyan-600" rel="noreferrer noopener">LinkedIn</a></p>
            <p className="text-sm max-w-x1 mb-6 font-bold">
                I'm a backend focussed developer with a decade of experience building large-scale systems from the ground up.
                I have experinece working in big and small companies with varying team sizes and responsibilities.
                Skilled in Python, C#.Net, GraphQL, Kubernetes, Git, Big data analysis, Microservices architecture, AWS and A/B testing.
                                
            </p>
        </div>
    )
}

export default Intro;
