function CalculResultatQuizz() {
    // Le quizz contient 7 questions
    const totalQuestions = 7;
    let countA = 0;
    let countB = 0;
    let countC = 0;
    let unanswered = [];

    // Parcourir chaque question et compter les réponses
    for (let i = 1; i <= totalQuestions; i++) {
        const selectedOption = document.querySelector(`input[name="reponse${i}"]:checked`);
        if (!selectedOption) {
            unanswered.push(i);
        } else {
            const answerId = selectedOption.id;
            if (answerId.startsWith('A')) {
                countA++;
            } else if (answerId.startsWith('B')) {
                countB++;
            } else if (answerId.startsWith('C')) {
                countC++;
            }
        }
    }

    // Si des questions n'ont pas de réponse, alerter l'utilisateur
    if (unanswered.length > 0) {
        alert("Veuillez répondre à toutes les questions avant de voir votre résultat ! Questions manquantes : " + unanswered.join(", "));
        return;
    }

    // Déterminer le profil majoritaire
    let redirectPage = "";
    if (countA >= countB && countA >= countC) {
        redirectPage = "../Resultats/lapin_chaos.html";
    } else if (countB >= countA && countB >= countC) {
        redirectPage = "../Resultats/lapin_diva.html";
    } else {
        redirectPage = "../Resultats/lapin_stratege.html";
    }

    // Rediriger vers la page du résultat
    window.location.href = redirectPage;
}