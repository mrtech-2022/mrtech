export const scrollToSection = (sectionId, navigate) => {
    navigate('/', { replace: false });

    setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100); // Delay to ensure the section is in the DOM
};
