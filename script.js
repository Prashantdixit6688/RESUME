document.getElementById('download-btn').addEventListener('click', function() {
    const resumeContent = document.querySelector('.resume-container').innerHTML;
    
    const doc = new Blob([resumeContent], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(doc);
    link.download = 'resume.html';
    link.click();
});
