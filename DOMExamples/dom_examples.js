function performClassListOperations() {
    const paragraph = document.getElementById('myParagraph');

    // Adding a class
    paragraph.classList.add('italic');

    // Removing a class
    paragraph.classList.remove('highlight');

    // Toggling a class
    paragraph.classList.toggle('underline', true);

    // Checking if a class exists
    const hasItalicClass = paragraph.classList.contains('italic');
    console.log(`Has italic class: ${hasItalicClass}`);

    // Replacing a class after a delay (for demonstration)
    setTimeout(() => {
        paragraph.classList.replace('underline', 'strike');
        
        // Accessing classes as a string
        const classString = paragraph.classList.toString();
        console.log(`Current classes: ${classString}`);
    }, 2000); // Delay for 2 seconds
}