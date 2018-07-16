module.exports = survey => {
    return `
        <html>
            <body>
                <div style="text-align: center;">
                    <h3>I'd like your input</h3>
                    <p>Please answer the followinf question:</p>
                    <p>${survey.body}</p>
                    <div>
                        <a href="http:localhost:4200">Yes</a>
                    </div>
                    <div>
                        <a href="http:localhost:4200">No</a>
                    </div>
                </div>
            </body>
        </html>
    `;

};
